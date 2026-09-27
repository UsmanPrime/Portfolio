import { useEffect, useId, useRef } from "react";
import { useMotionPreference } from "@/hooks/useMotionPreference";

type Group = { title: string; domain: string; skills: { name: string }[] };

/** Each satellite is one listed skill; links indicate membership, not proficiency. */
export default function SkillGraph({ groups }: { groups: Group[] }) {
  const ref = useRef<SVGSVGElement>(null);
  const reduced = useMotionPreference();
  const titleId = useId();
  const positions = groups.map((group, index) => ({
    x: group.domain === "security" ? 100 : 300,
    y: groups.slice(0, index).filter(previous => previous.domain === group.domain).length * 150 + 60,
  }));
  useEffect(() => {
    const svg = ref.current;
    if (!svg || reduced) return;
    const clusters = Array.from(svg.querySelectorAll<SVGGElement>("[data-cluster]"));
    let frame = 0;
    let visible = true;
    let x = 0, y = 0, targetX = 0, targetY = 0;
    const draw = () => {
      frame = 0;
      if (!visible || document.hidden) return;
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      clusters.forEach((cluster, index) => {
        const weight = 0.65 + index * 0.06;
        cluster.setAttribute("transform", `translate(${x * weight} ${y * weight})`);
      });
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.03) frame = requestAnimationFrame(draw);
    };
    const start = () => { if (!frame && visible && !document.hidden) frame = requestAnimationFrame(draw); };
    const pointer = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;
      const bounds = svg.getBoundingClientRect();
      targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
      targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
      start();
    };
    const leave = () => { targetX = 0; targetY = 0; start(); };
    const stop = () => { cancelAnimationFrame(frame); frame = 0; };
    const visibility = () => { if (document.hidden) stop(); else start(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) start(); else stop(); });
    observer.observe(svg);
    svg.addEventListener("pointermove", pointer, { passive: true });
    svg.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      stop(); observer.disconnect();
      svg.removeEventListener("pointermove", pointer);
      svg.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", visibility);
      clusters.forEach(cluster => cluster.removeAttribute("transform"));
    };
  }, [reduced]);
  return (
    <figure className="skill-graph">
      <figcaption><strong>{groups.reduce((sum, group) => sum + group.skills.length, 0)} skills / {groups.length} categories</strong><span>Nodes show listed skills; links group categories by domain. Select a cluster to explore.</span></figcaption>
      <svg ref={ref} viewBox="0 0 400 480" aria-labelledby={titleId}>
        <title id={titleId}>Skill inventory grouped by category</title>
        {groups.map((group, index) => {
          const next = groups.findIndex((candidate, candidateIndex) => candidateIndex > index && candidate.domain === group.domain);
          return next < 0 ? null : <line key={`domain-${group.title}`} className="skill-domain-link" x1={positions[index].x} y1={positions[index].y} x2={positions[next].x} y2={positions[next].y} aria-hidden="true" />;
        })}
        {groups.map((group, index) => {
          const { x: cx, y: cy } = positions[index];
          return <g key={group.title} data-cluster={group.title}>
            {group.skills.map((skill, skillIndex) => {
              const angle = skillIndex / group.skills.length * Math.PI * 2;
              const x = cx + Math.cos(angle) * 44;
              const y = cy + Math.sin(angle) * 44;
              return <g key={skill.name}><title>{skill.name}</title><line x1={cx} y1={cy} x2={x} y2={y} /><circle className="skill-satellite" cx={x} cy={y} r="2.5" /></g>;
            })}
            <a href={`#skills-${group.title.toLowerCase().replace(/[^a-z]+/g, "-")}`} className="panel-interactive" aria-label={`Explore ${group.title}: ${group.skills.length} skills`}>
              <rect className="skill-cluster-hitarea" x={cx - 95} y={cy - 52} width="190" height="135" aria-hidden="true" />
              <circle className="skill-cluster-halo" cx={cx} cy={cy} r="25" aria-hidden="true" />
              <circle className="skill-cluster-target" cx={cx} cy={cy} r="17" />
              <text x={cx} y={cy + 4} textAnchor="middle">{group.skills.length}</text>
              <text className="skill-cluster-label" x={cx} y={cy + 66} textAnchor="middle">{group.title}</text>
            </a>
          </g>;
        })}
      </svg>
    </figure>
  );
}
