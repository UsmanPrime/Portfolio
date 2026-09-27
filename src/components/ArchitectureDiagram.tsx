import { useEffect, useId, useRef, useState } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";
import { useSurfaceTilt } from "@/hooks/useSurfaceTilt";

function Layer({ title, summary, detail, kind }: { title: string; summary: string; detail: string; kind: string }) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduced = useMotionPreference();
  const id = useId();
  const tiltRef = useSurfaceTilt();
  const expanded = reduced || pinned || hovered || focused;
  return (
    <div className="architecture-layer-frame">
    <div ref={tiltRef} className={`architecture-layer layer-${kind} panel-interactive`}>
      <button type="button" aria-expanded={expanded} aria-controls={id}
        onPointerEnter={event => { if (event.pointerType === "mouse") setHovered(true); }}
        onPointerLeave={() => setHovered(false)}
        onFocus={event => setFocused(event.currentTarget.matches(":focus-visible"))}
        onBlur={() => setFocused(false)} onClick={() => setPinned(value => !value)}>
        <strong>{title}</strong><span>{summary}</span>
        <span className="layer-affordance" aria-hidden="true">{expanded ? "− Detail" : "+ Detail"}</span>
      </button>
      <p id={id} className="layer-detail" hidden={!expanded}>{detail}</p>
    </div>
    </div>
  );
}

function FlowConnector({ branched = false }: { branched?: boolean }) {
  const markerId = useId();
  const path = branched ? "M150 15V38" : "M150 0V38";
  return (
    <svg className="architecture-flow" viewBox="0 0 300 40" preserveAspectRatio="none" aria-hidden="true">
      <defs><marker id={markerId} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10Z" /></marker></defs>
      {branched && <path className="flow-branch" d="M50 0V15H250V0M150 0V15" />}
      <path className="flow-trunk" d={path} markerEnd={`url(#${markerId})`} />
      <circle className="flow-packet" cx="150" cy="0" r="2" />
    </svg>
  );
}

export default function ArchitectureDiagram({ system }: { system: "pims" | "residency" }) {
  const ref = useRef<HTMLElement>(null);
  const played = useRef(false);
  const reduced = useMotionPreference();
  useEffect(() => {
    const figure = ref.current;
    if (!figure) return;
    if (reduced) { played.current = true; return; }
    if (played.current) return;
    const animations: Animation[] = [];
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      played.current = true;
      observer.disconnect();
      figure.querySelectorAll(".flow-packet").forEach((packet, index) => {
        animations.push(packet.animate([
          { transform: "translateY(0px)", opacity: 0 },
          { transform: "translateY(8px)", opacity: 1, offset: 0.2 },
          { transform: "translateY(38px)", opacity: 0 },
        ], { duration: 600, delay: index * 280, easing: "linear" }));
      });
    }, { threshold: 0.25 });
    observer.observe(figure);
    return () => { observer.disconnect(); animations.forEach(animation => animation.cancel()); };
  }, [reduced]);
  return (
    <figure ref={ref} className={`architecture-diagram ${system === "pims" ? "pims-path" : "residency-map"} panel-static`}>
      <figcaption>{system === "pims" ? "Authorization across the request path" : "Three portals, shared security services"}</figcaption>
      <p className="architecture-instructions">Hover, focus, or tap a layer to inspect its controls.</p>
      {system === "pims" ? <>
        <Layer kind="client" title="Client UI" summary="Role-aware access controls" detail="UI restrictions are backed by authorization in middleware and server APIs." />
        <FlowConnector />
        <Layer kind="middleware" title="Edge middleware" summary="RBAC enforcement" detail="Access control is enforced before requests reach the server APIs." />
        <FlowConnector />
        <Layer kind="server" title="Server APIs" summary="RBAC · Zod validation · parameterized queries" detail="Validated input and parameterized queries support the server-side authorization boundary." />
        <FlowConnector />
        <div className="architecture-boundary">
          <span className="architecture-boundary-label">Tenant data boundary</span>
          <Layer kind="database" title="PostgreSQL" summary="Row Level Security" detail="Database-level policies isolate tenant data beyond the client interface." />
        </div>
        <p className="architecture-caption">Conceptual request flow. Controls at each layer; database policies isolate tenant data.</p>
      </> : <>
        <div className="architecture-portals">
          {["Resident", "Admin", "Vendor"].map(portal => <Layer key={portal} kind="client" title={portal} summary="Portal" detail="Role-based access through shared authentication services." />)}
        </div>
        <FlowConnector branched />
        <Layer kind="middleware" title="Identity & authorization" summary="TOTP · JWT / refresh tokens · RBAC" detail="Two-factor authentication and token-based sessions support role-based access." />
        <FlowConnector />
        <Layer kind="server" title="Node.js / Express.js API" summary="Helmet.js · CSRF protection · rate limiting · audit logging" detail="Request protections and audit logging are applied in the shared backend." />
        <FlowConnector />
        <Layer kind="database" title="MongoDB" summary="Application data" detail="The application data store sits behind the shared API and its access controls." />
        <p className="architecture-caption">Conceptual service flow. The three portals share authentication and backend controls, not unrestricted access.</p>
      </>}
    </figure>
  );
}
