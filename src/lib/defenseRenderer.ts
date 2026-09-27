import type { DefenseCore } from './defenseCore';
import type { AnchorPosition, DefenseRenderer, PaletteValues, WorkerInput, WorkerOutput } from './defenseTypes';
export type { DefenseRenderer } from './defenseTypes';

/** UI-thread bridge only. Three.js is evaluated inside a dedicated worker when supported. */
export async function createDefenseRenderer(host: HTMLElement, onContextLost: () => void): Promise<DefenseRenderer> {
  const css = getComputedStyle(document.documentElement);
  const palette: PaletteValues = {
    accent: css.getPropertyValue('--color-accent'), neutral: css.getPropertyValue('--color-text-muted'),
    surface: css.getPropertyValue('--color-surface'), text: css.getPropertyValue('--color-text'),
    warning: css.getPropertyValue('--color-warning'), success: css.getPropertyValue('--color-success'),
  };
  const canvas = document.createElement('canvas');
  canvas.className = 'defense-canvas';
  canvas.style.opacity = '0';
  host.prepend(canvas);
  let disposed = false, visible = false, rendered = false;
  let worker: Worker | undefined;
  let core: DefenseCore | undefined;
  let terminateTimer = 0;
  let resolveReady: () => void;
  let rejectReady: (error: Error) => void;
  const ready = new Promise<void>((resolve, reject) => { resolveReady = resolve; rejectReady = reject; });
  const annotations = [
    { id: 'endpoint', left: 26, top: 21 }, { id: 'forensics', left: 78, top: 48 }, { id: 'access', left: 28, top: 81 },
  ].map(annotation => {
    const line = host.querySelector<SVGPathElement>(`[data-leader="${annotation.id}"]`);
    const dot = host.querySelector<SVGCircleElement>(`[data-anchor="${annotation.id}"]`);
    const fallback = line?.getAttribute('d');
    line?.setAttribute('d', 'M0 0L1 0');
    return { ...annotation, line, dot, fallback, x: Number(dot?.getAttribute('cx')), y: Number(dot?.getAttribute('cy')) };
  });
  const drawOverlay = (anchors: AnchorPosition[]) => {
    if (disposed || !visible || document.hidden) return;
    for (const position of anchors) {
      const anchor = annotations.find(item => item.id === position.id);
      if (!anchor) continue;
      if (anchor.line) anchor.line.style.transform = `matrix(${position.x - anchor.left},${position.y - anchor.top},0,1,${anchor.left},${anchor.top})`;
      if (anchor.dot) anchor.dot.style.transform = `translate(${position.x - anchor.x}px,${position.y - anchor.y}px)`;
    }
    if (!rendered) { rendered = true; canvas.style.opacity = '1'; resolveReady(); }
  };
  const fail = () => {
    if (disposed) return;
    rejectReady(new Error('Globe renderer unavailable'));
    onContextLost();
  };
  const send = (message: WorkerInput) => worker?.postMessage(message);
  const bounds = host.getBoundingClientRect();
  try {
    if (typeof Worker !== 'undefined' && 'transferControlToOffscreen' in canvas) {
      worker = new Worker(new URL('./defense.worker.ts', import.meta.url), { type: 'module' });
      canvas.dataset.renderer = 'worker';
      worker.onmessage = (event: MessageEvent<WorkerOutput>) => {
        if (event.data.type === 'disposed') { clearTimeout(terminateTimer); worker?.terminate(); }
        else if (event.data.type === 'frame') drawOverlay(event.data.anchors);
        else fail();
      };
      worker.onerror = fail;
      const offscreen = canvas.transferControlToOffscreen();
      worker.postMessage({ type: 'init', canvas: offscreen, palette, pixelRatio: Math.min(devicePixelRatio, 1.5), width: bounds.width, height: bounds.height } satisfies WorkerInput, [offscreen]);
    } else {
      canvas.dataset.renderer = 'main';
      const { createDefenseCore } = await import('./defenseCore');
      core = createDefenseCore(canvas, palette, devicePixelRatio, drawOverlay);
      core.setSize(bounds.width, bounds.height);
      void core.ready.catch(fail);
    }
  } catch {
    canvas.remove();
    annotations.forEach(anchor => { if (anchor.fallback) anchor.line?.setAttribute('d', anchor.fallback); });
    worker?.terminate();
    throw new Error('Globe renderer unavailable');
  }
  const syncVisibility = () => {
    const active = visible && !document.hidden;
    send({ type: 'visible', value: active });
    core?.setVisible(active);
  };
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; syncVisibility(); });
  observer.observe(host);
  const resize = new ResizeObserver(() => {
    const { width, height } = host.getBoundingClientRect();
    send({ type: 'size', width, height });
    core?.setSize(width, height);
  });
  resize.observe(host);
  const pointerHost = host.closest<HTMLElement>('#home') ?? host;
  let pointerFrame = 0, pointerX = 0, pointerY = 0;
  const pointer = (event: PointerEvent) => {
    if (event.pointerType !== 'mouse' || !visible || document.hidden) return;
    pointerX = event.clientX; pointerY = event.clientY;
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      const rect = pointerHost.getBoundingClientRect();
      const x = (pointerX - rect.left) / rect.width - 0.5, y = (pointerY - rect.top) / rect.height - 0.5;
      send({ type: 'pointer', x, y, active: true });
      core?.setPointer(x, y, true);
    });
  };
  const leave = () => {
    cancelAnimationFrame(pointerFrame); pointerFrame = 0;
    send({ type: 'pointer', x: 0, y: 0, active: false });
    core?.setPointer(0, 0, false);
  };
  const lost = (event: Event) => { event.preventDefault(); fail(); };
  canvas.addEventListener('webglcontextlost', lost);
  pointerHost.addEventListener('pointermove', pointer, { passive: true });
  pointerHost.addEventListener('pointerleave', leave);
  document.addEventListener('visibilitychange', syncVisibility);
  return {
    ready,
    setStage(value) { if (!disposed) { send({ type: 'stage', value }); core?.setStage(value); } },
    dispose() {
      if (disposed) return;
      disposed = true;
      resolveReady();
      observer.disconnect(); resize.disconnect(); cancelAnimationFrame(pointerFrame);
      pointerHost.removeEventListener('pointermove', pointer);
      pointerHost.removeEventListener('pointerleave', leave);
      document.removeEventListener('visibilitychange', syncVisibility);
      canvas.removeEventListener('webglcontextlost', lost);
      annotations.forEach(anchor => {
        if (anchor.fallback) anchor.line?.setAttribute('d', anchor.fallback);
        anchor.line?.style.removeProperty('transform'); anchor.dot?.style.removeProperty('transform');
      });
      core?.dispose();
      if (worker) {
        // Explicit GPU cleanup, with a bound if a lost context never completes compilation.
        send({ type: 'dispose' });
        terminateTimer = window.setTimeout(() => worker?.terminate(), 1500);
      }
      canvas.remove();
    },
  };
}
