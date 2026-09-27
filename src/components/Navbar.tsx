import { useEffect, useRef, useState } from "react";
import { Menu, Pause, Play, Shield, X } from "lucide-react";
import { toggleMotion, useMotionPreference } from "@/hooks/useMotionPreference";

const links = [
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["certifications", "Certifications"],
  ["projects", "Projects"],
  ["resume", "Resume"],
  ["contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduced = useMotionPreference();
  const progress = useRef<HTMLDivElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);
  const desktopLinks = useRef<HTMLDivElement>(null);
  const underline = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const update = () => {
      const parent = desktopLinks.current;
      const line = underline.current;
      const link = parent?.querySelector<HTMLElement>('[aria-current="location"]');
      if (!parent || !line) return;
      // Read geometry before writing styles; the underline scales instead of
      // animating width (which caused layout on active-section changes).
      const width = link?.offsetWidth ?? 0;
      const left = link?.offsetLeft ?? 0;
      line.style.opacity = link ? "1" : "0";
      if (link) {
        line.style.transform = `translateX(${left}px) scaleX(${width})`;
      }
    };
    update();
    const observer = new ResizeObserver(update);
    if (desktopLinks.current) observer.observe(desktopLinks.current);
    return () => observer.disconnect();
  }, [active]);
  useEffect(() => {
    let frame = 0;
    let dirty = true;
    let started = false;
    let height = 0;
    let tops: number[] = [];
    let previous = "";
    const update = () => {
      frame = 0;
      const scrollY = window.scrollY;
      if (dirty) {
        height = document.documentElement.scrollHeight - window.innerHeight;
        tops = links.map(([id]) => (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) + scrollY);
        dirty = false;
      }
      if (progress.current)
        progress.current.style.transform = `scaleX(${height > 0 ? scrollY / height : 0})`;
      let current = "";
      links.forEach(([id], index) => {
        if (tops[index] - scrollY <= 140)
          current = id;
      });
      if (current !== previous) { previous = current; setActive(current); }
    };
    const scroll = () => {
      if (started && !frame) frame = requestAnimationFrame(update);
    };
    let startupFrame = requestAnimationFrame(() => {
      startupFrame = requestAnimationFrame(() => { started = true; scroll(); });
    });
    const invalidate = () => { dirty = true; scroll(); };
    const resize = new ResizeObserver(invalidate);
    document.querySelectorAll('main > section[id]').forEach(section => resize.observe(section));
    window.addEventListener("scroll", scroll, { passive: true });
    window.addEventListener("resize", invalidate);
    return () => {
      cancelAnimationFrame(startupFrame);
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", scroll);
      window.removeEventListener("resize", invalidate);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <nav
      className="portfolio-nav fixed top-0 inset-x-0 z-50"
      aria-label="Main navigation"
    >
      <div className="layout-container">
        <div className="flex items-center justify-between h-[72px] gap-4">
          <a
            href="#home"
            className="panel-interactive flex items-center gap-2.5 shrink-0"
            aria-label="Usman Ibrahim home"
          >
            <Shield size={21} className="text-primary" />
            <span className="font-semibold text-sm">
              usman<span className="text-primary">.ibrahim</span>
            </span>
          </a>
          <div ref={desktopLinks} className="desktop-nav-links hidden lg:flex gap-5">
            <span ref={underline} className="active-section-underline" aria-hidden="true" />
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`text-[11px] transition-colors hover:text-primary ${active === id ? "text-primary" : "text-muted-foreground"}`}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              className="panel-interactive motion-control"
              onClick={toggleMotion}
              aria-pressed={reduced}
              aria-label={
                reduced
                  ? "Resume animations (respects system preference)"
                  : "Pause animations"
              }
            >
              {reduced ? <Play size={12} /> : <Pause size={12} />}
              <span className="hidden sm:inline">
                {reduced ? "Motion off" : "Motion on"}
              </span>
            </button>
            <button
              ref={menuButton}
              className="panel-interactive lg:hidden p-2 text-muted-foreground"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label={open ? "Close navigation" : "Open navigation"}
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
        {open && (
          <div
            id="mobile-navigation"
            className="lg:hidden grid grid-cols-2 gap-1 pb-5 border-t border-border pt-3"
          >
            {links.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                aria-current={active === id ? "location" : undefined}
                className="p-3 text-sm text-muted-foreground hover:text-primary"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
      <div ref={progress} className="nav-progress" aria-hidden="true" />
    </nav>
  );
}
