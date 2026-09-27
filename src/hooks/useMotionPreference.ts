import { useSyncExternalStore } from "react";

const eventName = "portfolio-motion-change";
function subscribe(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  window.addEventListener(eventName, callback);
  return () => {
    media.removeEventListener("change", callback);
    window.removeEventListener(eventName, callback);
  };
}
function getSnapshot() {
  return (
    document.documentElement.dataset.motion === "paused" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}
export function useMotionPreference() {
  return useSyncExternalStore(subscribe, getSnapshot, () => true);
}
export function toggleMotion() {
  const root = document.documentElement;
  root.dataset.motion = root.dataset.motion === "paused" ? "auto" : "paused";
  window.dispatchEvent(new Event(eventName));
}
