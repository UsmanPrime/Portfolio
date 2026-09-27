import { useEffect, useId, useRef, useState } from "react";
import {
  Activity,
  Fingerprint,
  LockKeyhole,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { useSurfaceTilt } from "@/hooks/useSurfaceTilt";
import type { DefenseRenderer } from "@/lib/defenseRenderer";

const stages = [
  {
    label: "Monitoring",
    heading: "A network worth defending.",
    detail:
      "Explore a simulated incident: detect an unusual login, investigate the evidence, then contain the source.",
    event: "Simulated telemetry connected · baseline established",
    action: "Simulate an alert",
    icon: Activity,
  },
  {
    label: "Alert detected",
    heading: "An unusual pattern emerges.",
    detail:
      "The demo endpoint recorded 24 failed sign-ins followed by a successful login from the same source. Time to correlate the events.",
    event: "auth.log · repeated failures → successful login",
    action: "Investigate evidence",
    icon: Fingerprint,
  },
  {
    label: "Investigating",
    heading: "Turn signals into evidence.",
    detail:
      "The same account and source appear across the failed and successful sign-ins. In this scenario, the correlation warrants session revocation and source isolation.",
    event: "Correlation · account + source + event timeline",
    action: "Contain the incident",
    icon: LockKeyhole,
  },
  {
    label: "Contained",
    heading: "Contain. Document. Improve.",
    detail:
      "Demo source isolated and session revoked. Preserve the evidence, review account access, and tune the detection before closing the incident.",
    event: "Response complete · evidence preserved",
    action: "Replay simulation",
    icon: ShieldCheck,
  },
];

export default function DefenseScene() {
  const surface = useSurfaceTilt(2.5);
  const fallbackGradient = useId();
  const host = useRef<HTMLDivElement>(null);
  const renderer = useRef<DefenseRenderer | null>(null);
  const [stage, setStage] = useState(0);
  const [ready, setReady] = useState(false);
  const reduced = useMotionPreference();
  const [failed, setFailed] = useState(false);
  const current = stages[stage];
  const Icon = current.icon;

  useEffect(() => {
    if (reduced || failed || !host.current) return;
    const element = host.current;
    let cancelled = false;
    let visible = false;
    let started = false;
    let idle = 0;
    let timer = 0;
    let frame = 0;
    let painted = false;
    const initialize = async () => {
      idle = 0;
      if (cancelled || started || !visible || document.hidden) return;
      started = true;
      try {
        const { createDefenseRenderer } = await import("@/lib/defenseRenderer");
        if (cancelled) return;
        if (!visible || document.hidden) { started = false; return; }
        performance.mark('globe-init-start');
        const instance = await createDefenseRenderer(element, () => {
          setFailed(true);
          setReady(false);
        });
        if (cancelled) { instance.dispose(); return; }
        renderer.current = instance;
        await renderer.current.ready;
        if (!cancelled) {
          performance.mark('globe-ready');
          setReady(true);
        }
      } catch {
        if (!cancelled) setFailed(true);
      }
    };
    const schedule = () => {
      if (!painted || started || cancelled || !visible || document.hidden || idle || timer) return;
      // Non-essential enhancement: do not race the first paint or hero entrance.
      timer = window.setTimeout(() => {
        timer = 0;
        if ('requestIdleCallback' in window) idle = window.requestIdleCallback(() => void initialize());
        else void initialize();
      }, 800);
    };
    const afterPaint = () => {
      frame = requestAnimationFrame(() => {
        frame = requestAnimationFrame(() => { painted = true; schedule(); });
      });
    };
    if (document.readyState === 'complete') afterPaint();
    else window.addEventListener('load', afterPaint, { once: true });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    });
    observer.observe(element);
    document.addEventListener('visibilitychange', schedule);
    return () => {
      cancelled = true;
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      if (idle) window.cancelIdleCallback(idle);
      window.removeEventListener('load', afterPaint);
      document.removeEventListener('visibilitychange', schedule);
      observer.disconnect();
      renderer.current?.dispose();
      renderer.current = null;
      setReady(false);
    };
  }, [reduced, failed]);

  useEffect(() => {
    renderer.current?.setStage(stage);
  }, [stage, ready]);

  return (
    <div ref={surface} className={`defense-console panel-interactive defense-stage-${stage}`} role="region" aria-label="Interactive incident simulation">
      <div className="scene-heading">
        <span>Network defense lab</span>
        <span className="demo-tag">Interactive demo</span>
      </div>
      <div className="scene-visual" ref={host} aria-hidden="true">
        {!ready && (
          <div className="globe-fallback">
            <svg className="fallback-globe" viewBox="0 0 100 100" fill="none">
              <defs>
                <radialGradient id={fallbackGradient} cx="30%" cy="25%" r="80%">
                  <stop offset="0%" className="fallback-highlight" />
                  <stop offset="100%" className="fallback-shadow" />
                </radialGradient>
              </defs>
              <ellipse className="fallback-orbit" cx="50" cy="50" rx="43" ry="17" transform="rotate(-28 50 50)" />
              <ellipse className="fallback-orbit" cx="50" cy="50" rx="20" ry="42" transform="rotate(-28 50 50)" />
              <circle className="fallback-surface" cx="50" cy="50" r="29" fill={`url(#${fallbackGradient})`} />
              <ellipse cx="50" cy="50" rx="16" ry="32" />
              <path d="M18 50H82M25 30H75M25 70H75" />
              <path d="M27 43L40 39M42 23L40 39M72 34L63 54M75 63L63 54M33 72L46 70M54 45L46 70" />
              {[[27, 43], [42, 23], [72, 34], [75, 63], [33, 72], [54, 45]].map(([x, y]) => <circle key={`${x}-${y}`} className="fallback-node" cx={x} cy={y} r="0.7" />)}
            </svg>
          </div>
        )}
        <svg className="scene-annotations" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
          <g className="annotation-endpoint"><path d="M4 21H26" /><path data-leader="endpoint" d="M26 21L40 39" /><circle data-anchor="endpoint" cx="40" cy="39" r="0.6" /></g>
          <g className="annotation-forensics"><path d="M96 48H78" /><path data-leader="forensics" d="M78 48L63 54" /><circle data-anchor="forensics" cx="63" cy="54" r="0.6" /></g>
          <g className="annotation-access"><path d="M4 81H28" /><path data-leader="access" d="M28 81L46 70" /><circle data-anchor="access" cx="46" cy="70" r="0.6" /></g>
        </svg>
        <span className="scene-annotation annotation-endpoint" title="Wazuh / Splunk">Endpoint protection</span>
        <span className="scene-annotation annotation-forensics" title="Trace the evidence">Digital forensics</span>
        <span className="scene-annotation annotation-access" title="Identity / access">Secure by design</span>
        <span className="scene-caption">
          {reduced
            ? "Static view · reduced motion"
            : failed
              ? "Static network view"
              : "Pointer-reactive · simulated network flow"}
        </span>
      </div>
      <div className="incident-panel panel-interactive">
        <div className="incident-progress" aria-hidden="true">
          {["Monitor", "Detect", "Investigate", "Contain"].map((label, index) => <span key={label} data-complete={index <= stage} data-current={index === stage}><i />{label}</span>)}
        </div>
        <div aria-live="polite" aria-atomic="true">
          <div className="incident-status">
          <span>
            <Icon aria-hidden="true" /> {current.label}
          </span>
          <span className="font-mono" aria-label={`Simulation step ${stage + 1} of ${stages.length}`}>{stage + 1} / {stages.length}</span>
          </div>
          <h2 key={stage} className="incident-heading">{current.heading}</h2>
          <p>{current.detail}</p>
          <code className="incident-event">
            <svg key={stage} className="incident-event-dot" viewBox="0 0 10 10" aria-hidden="true"><circle cx="5" cy="5" r="3" /></svg>
            <span>{current.event}</span>
          </code>
        </div>
        <div className="incident-controls">
          <button className="panel-interactive" onClick={() => setStage((stage + 1) % stages.length)}>
            {current.action} <span aria-hidden="true">↗</span>
          </button>
          {stage > 0 && (
            <button
              className="panel-interactive incident-reset"
              onClick={() => setStage(0)}
              aria-label="Reset simulation"
            >
              <RotateCcw aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
