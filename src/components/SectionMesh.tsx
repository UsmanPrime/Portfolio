import { useEffect, useRef } from "react";

const sections = ["home", "about", "skills", "experience", "certifications", "projects", "resume", "contact"];

/** One scroll signature: blend adjacent section fields at a shared reading line.
 * Only two full-bleed fields are painted at once; no per-frame React state. */
export default function SectionMesh({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = ref.current;
    if (!host || reduced) return;
    const layers = Array.from(host.querySelectorAll<HTMLElement>(".mesh-layer"));
    const targets = sections.map(id => document.getElementById(id)!);
    let frame = 0;
    let geometryDirty = true;
    let started = false;
    let documentTops: number[] = [];
    const update = () => {
      frame = 0;
      if (document.hidden) return;
      const readingLine = innerHeight * 0.55;
      const blendDistance = innerHeight * 0.55;
      const scroll = window.scrollY;
      if (geometryDirty) {
        documentTops = targets.map(target => target.getBoundingClientRect().top + scroll);
        geometryDirty = false;
      }
      const tops = documentTops.map(top => top - scroll);
      let incoming = tops.findIndex((top, index) => index > 0 && top > readingLine - blendDistance / 2);
      if (incoming < 0) incoming = targets.length;
      const outgoing = incoming - 1;
      const progress = incoming < targets.length
        ? Math.max(0, Math.min(1, (readingLine + blendDistance / 2 - tops[incoming]) / blendDistance))
        : 0;
      const blend = progress * progress * (3 - 2 * progress);
      layers.forEach((layer, index) => {
        // Outgoing remains opaque below the incoming layer: no dark dip mid-blend.
        const opacity = index === outgoing ? 1 : index === incoming ? blend : 0;
        const value = String(Math.round(opacity * 1000) / 1000);
        const visible = String(opacity > 0);
        if (layer.style.opacity !== value) layer.style.opacity = value;
        if (layer.dataset.visible !== visible) layer.dataset.visible = visible;
      });
    };
    const schedule = () => { if (started && !frame && !document.hidden) frame = requestAnimationFrame(update); };
    const visibility = () => {
      host.dataset.running = String(!document.hidden);
      if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
      else schedule();
    };
    host.dataset.running = String(!document.hidden);
    // Let initial content paint before measuring the complete document.
    let startupFrame = requestAnimationFrame(() => {
      startupFrame = requestAnimationFrame(() => { started = true; schedule(); });
    });
    const invalidate = () => { geometryDirty = true; schedule(); };
    const resize = new ResizeObserver(invalidate);
    targets.forEach(target => resize.observe(target));
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", invalidate);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      cancelAnimationFrame(startupFrame);
      cancelAnimationFrame(frame); resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", invalidate);
      document.removeEventListener("visibilitychange", visibility);
      host.dataset.running = "false";
    };
  }, [reduced]);

  return (
    <div ref={ref} className="section-mesh-stage" aria-hidden="true" data-running="false">
      {sections.map((section, index) => (
        <div key={section} className="mesh-layer" data-section={section} data-visible={index === 0 ? "true" : "false"} style={{ opacity: index === 0 ? 1 : 0 }}>
          <div className="mesh-field" />
        </div>
      ))}
    </div>
  );
}
