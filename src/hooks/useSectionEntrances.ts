import { useEffect, useRef } from "react";
import { useMotionPreference } from "./useMotionPreference";

// Leaf-level units only: never reveal a unit and its descendants together.
const units = [
  '.hero-copy > *', '.defense-console', '.hero-status-row',
  '.about-introduction > *', '.about-bio > p', '.about-evidence', '.about-profile',
  '.about-status', '#about .interactive-terminal', '.about-credentials', '.about-manifest > header', '.about-manifest-row',
  '.skills-introduction > *', '.skills-category', '.skill-graph', '.skills-evidence > h3',
  '.skills-evidence > dl > div', '.evidence-sources', '.skills-note',
  '.projects-introduction > *', '.project-filters', '.project-case > header',
  '.project-homepage-preview', '.project-story > .case-narrative > h4', '.project-story > .case-narrative > p',
  '.project-story > .case-narrative > ul > li', '.residency-brief > div',
  '.architecture-diagram > figcaption', '.architecture-diagram > p', '.architecture-layer-frame', '.residency-ledger', '.residency-outcome',
  '.project-case > footer', '.project-supporting > h2', '.project-domain > h3', '.project-row',
  '.section-heading > *', '.timeline-entry', '.experience-achievements > h3',
  '.experience-achievements > .grid > *', '.credential-proof', '.cert-group',
  '#certifications .content-reading > p', '.resume-download', '#resume .space-y-6 > *',
  '.contact-form-panel', '.contact-info-panel', '#contact .terminal-panel',
  '.portfolio-footer .content-standard > *',
].join(',');

function entranceKind(element: HTMLElement) {
  if (element.matches('h1,h2,h3,h4')) return 'heading';
  if (element.matches('.about-profile')) return 'image';
  if (element.matches('.panel-static,.panel-interactive,.skills-category,.timeline-entry,.architecture-layer-frame,.project-case > header')) {
    const card = element.matches('.project-case > header') ? element.parentElement! : element;
    const siblings = [...(card.parentElement?.children ?? [])].filter(sibling => sibling.tagName === card.tagName);
    return siblings.indexOf(card) % 2 === 0 ? 'card-right' : 'card-left';
  }
  return 'text';
}

/** One observer/animation recipe; unenhanced markup remains fully visible. */
export function useSectionEntrances() {
  const ref = useRef<HTMLElement>(null);
  const seen = useRef(new WeakSet<Element>());
  const reduced = useMotionPreference();
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const registered = new Set<HTMLElement>();
    const animations = new Map<HTMLElement, Animation>();
    const finish = (element: HTMLElement) => {
      seen.current.add(element);
      element.dataset.reveal = 'complete';
      animations.get(element)?.cancel();
      animations.delete(element);
      observer?.unobserve(element);
    };
    const observer = !reduced && 'IntersectionObserver' in window
      ? new IntersectionObserver(entries => {
        const siblings = new Map<Element | null, number>();
        // An intersection trigger also works for units taller than the viewport.
        entries.filter(entry => entry.isIntersecting)
          .sort((a, b) => a.target.compareDocumentPosition(b.target) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1)
          .forEach(entry => {
            const element = entry.target as HTMLElement;
            observer?.unobserve(element);
            if (seen.current.has(element)) return;
            seen.current.add(element);
            const index = siblings.get(element.parentElement) ?? 0;
            siblings.set(element.parentElement, index + 1);
            element.dataset.reveal = 'complete';
            const animation = element.animate([
              { opacity: 0, translate: 'var(--entrance-offset)', scale: 'var(--entrance-scale)' },
              { opacity: 1, translate: '0 0', scale: '1' },
            ], { duration: 440, delay: Math.min(index, 3) * 60, easing: 'cubic-bezier(0.16, 0.7, 0.3, 1)', fill: 'backwards' });
            animations.set(element, animation);
            animation.onfinish = () => finish(element);
          });
      }, { threshold: 0, rootMargin: '0px 0px -32px 0px' }) : null;
    const register = () => {
      root.querySelectorAll<HTMLElement>(units).forEach(element => {
        if (registered.has(element)) return;
        registered.add(element);
        element.dataset.revealKind = entranceKind(element);
        // Above-the-fold content is never hidden waiting for an observer/animation.
        // The server motion snapshot is conservative. Do not consume offscreen
        // entrances before hydration supplies the real motion preference.
        if (!observer) element.dataset.reveal = 'complete';
        else if (element.closest('#home') || seen.current.has(element) || element.contains(document.activeElement)) finish(element);
        else { element.dataset.reveal = 'pending'; observer.observe(element); }
      });
      registered.forEach(element => {
        if (!root.contains(element)) { finish(element); registered.delete(element); }
      });
    };
    register();
    const mutations = new MutationObserver(records => {
      if (records.some(record => [...record.addedNodes, ...record.removedNodes].some(node => node instanceof Element))) register();
    });
    mutations.observe(root, { childList: true, subtree: true });
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const unit = event.target.closest<HTMLElement>('[data-reveal]');
      if (unit) finish(unit);
    };
    root.addEventListener('focusin', onFocus);
    return () => {
      observer?.disconnect();
      mutations.disconnect();
      root.removeEventListener('focusin', onFocus);
      animations.forEach(animation => animation.cancel());
      registered.forEach(element => { delete element.dataset.reveal; });
    };
  }, [reduced]);
  return ref;
}
