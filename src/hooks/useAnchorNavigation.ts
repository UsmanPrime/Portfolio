import { useEffect, useLayoutEffect } from "react";

const useClientLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/** Temporarily measure skipped sections while native fragment navigation settles. */
export function useAnchorNavigation() {
  useClientLayoutEffect(() => {
    const root = document.documentElement;
    let active: Element | null = null;
    let quiet = 0;
    let deadline = 0;
    let frame = 0;
    const finish = () => {
      clearTimeout(quiet);
      clearTimeout(deadline);
      cancelAnimationFrame(frame);
      active = null;
      delete root.dataset.anchorNavigation;
    };
    const settle = () => {
      if (!active) return;
      clearTimeout(quiet);
      quiet = window.setTimeout(finish, 180);
    };
    const targetFor = (hash: string) => {
      try {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        return target?.closest(".agency-page") ? target : null;
      } catch { return null; }
    };
    const begin = (target: Element, reposition = false) => {
      if (active === target) return;
      finish();
      active = target;
      root.dataset.anchorNavigation = "active";
      target.getBoundingClientRect();
      deadline = window.setTimeout(finish, 4000);
      frame = requestAnimationFrame(() => {
        if (reposition) target.scrollIntoView({ block: "start" });
        settle();
      });
    };
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element).closest<HTMLAnchorElement>("a[href]");
      if (!link || link.hasAttribute("download") || (link.target && link.target !== "_self")) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || url.search !== location.search) return;
      const target = targetFor(url.hash);
      if (target) begin(target); // Deliberately preserve the browser's default action.
    };
    const hash = () => {
      const target = targetFor(location.hash);
      if (target) begin(target, true);
      else finish();
    };
    document.addEventListener("click", click, true);
    window.addEventListener("hashchange", hash);
    window.addEventListener("scroll", settle, { passive: true });
    document.addEventListener("scrollend", settle);
    hash();
    return () => {
      finish();
      document.removeEventListener("click", click, true);
      window.removeEventListener("hashchange", hash);
      window.removeEventListener("scroll", settle);
      document.removeEventListener("scrollend", settle);
    };
  }, []);
}
