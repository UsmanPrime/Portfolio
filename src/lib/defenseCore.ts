import * as THREE from "three";
import type { PaletteValues, AnchorPosition } from "./defenseTypes";

/** DOM-free scene shared by the worker and compatibility renderer. */
export function createDefenseCore(canvas: HTMLCanvasElement | OffscreenCanvas, values: PaletteValues, pixelRatio: number, onFrame: (anchors: AnchorPosition[]) => void) {
  const color = (value: string) => {
    const [h, s, l] = value.trim().split(/\s+/).map(parseFloat);
    return new THREE.Color().setHSL(h / 360, s / 100, l / 100, THREE.SRGBColorSpace);
  };
  const palette = { accent: color(values.accent), neutral: color(values.neutral), surface: color(values.surface), text: color(values.text), warning: color(values.warning), success: color(values.success) };
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "low-power" });
  renderer.setPixelRatio(Math.min(pixelRatio, 1.5));
  renderer.setClearColor(palette.surface, 0);
  const scene = new THREE.Scene();
  // Fixed studio lighting gives depth without simulating activity or adding shadow passes.
  const keyLight = new THREE.DirectionalLight(palette.accent, 1.8);
  keyLight.position.set(-3, 4, 5);
  const rimLight = new THREE.DirectionalLight(palette.text, 1.2);
  rimLight.position.set(3, 1, -2);
  scene.add(keyLight, rimLight, new THREE.HemisphereLight(palette.accent, palette.surface, 0.8));
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 40);
  camera.position.set(0, 0.2, 7.3);
  const root = new THREE.Group();
  root.rotation.z = -0.18;
  scene.add(root);
  const resources: { dispose(): void }[] = [];
  const track = <T extends { dispose(): void }>(value: T) => {
    resources.push(value);
    return value;
  };
  const edgeMaterial = track(
    new THREE.LineBasicMaterial({
      color: palette.accent,
      transparent: true,
      opacity: 0.48,
    }),
  );
  const globeGeometry = track(new THREE.IcosahedronGeometry(1.65, 2));
  const edges = new THREE.LineSegments(
    track(new THREE.WireframeGeometry(globeGeometry)),
    edgeMaterial,
  );
  root.add(edges);
  root.add(
    new THREE.Mesh(
      track(new THREE.SphereGeometry(1.59, 32, 24)),
      track(new THREE.MeshPhongMaterial({
        color: palette.surface.clone().lerp(palette.accent, 0.16),
        emissive: palette.accent,
        emissiveIntensity: 0.035,
        specular: palette.accent.clone().multiplyScalar(0.3),
        shininess: 16,
      })),
    ),
  );
  // Three real surface anchors; coordinates are scene geometry, not UI tokens.
  // The same SVG leaders also have static coordinates for the no-WebGL view.
  const anchorGeometry = track(new THREE.SphereGeometry(0.035, 6, 6));
  const anchorMaterial = track(new THREE.MeshBasicMaterial({ color: palette.accent }));
  const activeMaterial = track(new THREE.MeshBasicMaterial({ color: palette.warning }));
  const annotations = [
    { id: "endpoint", point: new THREE.Vector3(-0.7, 0.7, 1.2), elbow: [26, 21] },
    { id: "forensics", point: new THREE.Vector3(0.95, -0.1, 1.2), elbow: [78, 48] },
    { id: "access", point: new THREE.Vector3(-0.2, -0.9, 1.2), elbow: [28, 81] },
  ].map(annotation => {
    const position = annotation.point.normalize().multiplyScalar(1.65);
    const marker = new THREE.Mesh(anchorGeometry, anchorMaterial);
    marker.position.copy(position);
    root.add(marker);
    return { ...annotation, position, marker };
  });
  const target = new THREE.Vector2();
  // Nine simulated endpoints: six sources feed the three labeled destinations.
  const sources = [
    [-1.2, 0.1, 0.9], [-0.4, 1.3, 0.8], [1.1, 0.9, 0.7],
    [1.2, -0.9, 0.6], [-0.9, -1.1, 0.6], [0.3, 0.3, 1.5],
  ];
  const flows = sources.map((coordinates, index) => {
    const position = new THREE.Vector3(...coordinates).normalize().multiplyScalar(1.65);
    const marker = new THREE.Mesh(anchorGeometry, anchorMaterial);
    marker.position.copy(position);
    const destination = annotations[index % annotations.length].position;
    const midpoint = position.clone().add(destination).normalize().multiplyScalar(1.82);
    const curve = new THREE.QuadraticBezierCurve3(position, midpoint, destination);
    const line = new THREE.Line(track(new THREE.BufferGeometry().setFromPoints(curve.getPoints(32))), edgeMaterial);
    const packet = new THREE.Mesh(anchorGeometry, anchorMaterial);
    packet.scale.setScalar(0.65);
    packet.visible = false;
    root.add(marker, line, packet);
    return { curve, packet, phase: index / sources.length };
  });
  let flowTime = 0;
  let interacting = false;
  let burstUntil = 0;
  let frame = 0;
  let visible = false;
  let disposed = false;
  let compiled = false;
  let last = 0;
  const frameInterval = 1000 / 30;
  const point = new THREE.Vector3();
  const draw = (now: number) => {
    frame = 0;
    if (disposed || !compiled || !visible) return;
    if (last && now - last < frameInterval - 0.5) {
      frame = requestAnimationFrame(draw);
      return;
    }
    const delta = last ? Math.min((now - last) / 1000, 0.05) : 0;
    last = now;
    const flowing = interacting || now < burstUntil;
    if (flowing) flowTime += delta * 0.22;
    flows.forEach(({ curve, packet, phase }) => {
      packet.visible = flowing;
      if (flowing) curve.getPoint((flowTime + phase) % 1, packet.position);
    });
    // Normalized hero pointer range is ±0.5: yaw ±26°, pitch ±17°.
    root.rotation.y = THREE.MathUtils.damp(root.rotation.y, target.x * 0.9, 14, delta);
    root.rotation.x = THREE.MathUtils.damp(
      root.rotation.x,
      target.y * 0.6,
      14,
      delta,
    );
    renderer.render(scene, camera);
    // Project into the overlay without layout reads or React rerenders per frame.
    onFrame(annotations.map(annotation => {
      point.copy(annotation.position).applyMatrix4(root.matrixWorld).project(camera);
      return { id: annotation.id, x: (point.x + 1) * 50, y: (1 - point.y) * 50 };
    }));
    const settling = Math.abs(root.rotation.y - target.x * 0.9) > 0.0001 || Math.abs(root.rotation.x - target.y * 0.6) > 0.0001;
    if (flowing || settling) frame = requestAnimationFrame(draw);
  };
  const start = () => {
    if (!frame && compiled && visible && !disposed) {
      last = 0;
      frame = requestAnimationFrame(draw);
    }
  };
  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };

  const ready = renderer.compileAsync(scene, camera).then(() => {
    if (disposed) return;
    compiled = true;
    start();
  });
  return {
    ready,
    setSize(width: number, height: number) {
      if (!width || !height || disposed) return;
      camera.aspect = width / height;
      camera.position.z = camera.aspect < 1 ? 8.3 : 7.3;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      start();
    },
    setVisible(value: boolean) { visible = value; if (visible) start(); else stop(); },
    setPointer(x: number, y: number, active: boolean) { target.set(x, y); interacting = active; start(); },
    setStage(value: number) {
      burstUntil = value ? performance.now() + 2400 : 0;
      activeMaterial.color.copy(value === 3 ? palette.success : palette.warning);
      annotations.forEach((annotation, index) => { annotation.marker.material = value === index + 1 ? activeMaterial : anchorMaterial; });
      start();
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      stop();
      const release = () => { resources.forEach(resource => resource.dispose()); renderer.dispose(); };
      void ready.then(release, release);
    },
  };
}
export type DefenseCore = ReturnType<typeof createDefenseCore>;
