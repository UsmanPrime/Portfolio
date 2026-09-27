import { useEffect, useRef } from "react";
import { useMotionPreference } from "./useMotionPreference";

/** Pointer-only progressive enhancement; no React renders or idle animation loop. */
export function useSurfaceTilt(angle = 7) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useMotionPreference();
  useEffect(() => {
    const element = ref.current;
    if (!element || reduced) return;
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    let frame = 0;
    let x = 0, y = 0;
    const reset = () => {
      cancelAnimationFrame(frame); frame = 0;
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
      element.removeAttribute("data-tilting");
    };
    const move = (event: PointerEvent) => {
      if (!pointer.matches || event.pointerType !== "mouse") return;
      // Use the untransformed parent frame to avoid feedback from a tilted bounding box.
      const bounds = element.parentElement!.getBoundingClientRect();
      x = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1));
      y = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1));
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        element.style.setProperty("--tilt-x", `${-y * angle}deg`);
        element.style.setProperty("--tilt-y", `${x * angle}deg`);
        element.dataset.tilting = "true";
      });
    };
    const visibility = () => { if (document.hidden) reset(); };
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) reset(); });
    observer.observe(element);
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", reset);
    element.addEventListener("pointercancel", reset);
    pointer.addEventListener("change", reset);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      reset(); observer.disconnect();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      element.removeEventListener("pointercancel", reset);
      pointer.removeEventListener("change", reset);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [reduced, angle]);
  return ref;
}
