import { useEffect, useRef, useState } from "react";
import { useMotionPreference } from "./useMotionPreference";

export function useCredentialCount(total: number) {
  const ref = useRef<HTMLParagraphElement>(null);
  const completed = useRef(false);
  const [count, setCount] = useState(0);
  const reduced = useMotionPreference();
  useEffect(() => {
    if (reduced || completed.current) {
      completed.current = true;
      setCount(total);
      return;
    }
    let frame = 0;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / 850, 1);
        setCount(Math.round(total * (1 - (1 - progress) ** 2)));
        if (progress < 1) frame = requestAnimationFrame(tick);
        else completed.current = true;
      };
      frame = requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, [reduced, total]);
  return { ref, count: reduced ? total : count };
}
