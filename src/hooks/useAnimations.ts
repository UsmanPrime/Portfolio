import { useEffect, useRef, useState, useCallback } from "react";

// ─────────────────────────────────────────────────────────────
// SCROLL REVEAL - IntersectionObserver-driven visibility toggle
// ─────────────────────────────────────────────────────────────
interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options: UseScrollRevealOptions = {}) => {
  const { threshold = 0.1, rootMargin = "0px 0px -40px 0px", triggerOnce = true } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          if (triggerOnce) observer.unobserve(element);
        } else if (!triggerOnce) {
          setIsRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isRevealed };
};

// ─────────────────────────────────────────────────────────────
// DECRYPT TEXT - Characters scramble then resolve to final text
// Mimics a forensic data-decode / intel decryption effect
// ─────────────────────────────────────────────────────────────
const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

export const useDecryptText = (
  finalText: string,
  options: { speed?: number; startDelay?: number; triggerOnReveal?: boolean } = {}
) => {
  const { speed = 30, startDelay = 0, triggerOnReveal = false } = options;
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(!triggerOnReveal);
  const ref = useRef<HTMLDivElement>(null);

  // If triggerOnReveal, observe the element
  useEffect(() => {
    if (!triggerOnReveal) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [triggerOnReveal]);

  useEffect(() => {
    if (!hasTriggered) return;

    let timeout: ReturnType<typeof setTimeout>;
    let resolvedCount = 0;

    const scramble = () => {
      if (resolvedCount >= finalText.length) {
        setDisplayedText(finalText);
        setIsComplete(true);
        return;
      }

      const resolved = finalText.slice(0, resolvedCount);
      const remaining = finalText.length - resolvedCount;
      const scrambled = Array.from({ length: remaining }, () =>
        CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)]
      ).join("");

      setDisplayedText(resolved + scrambled);
      resolvedCount++;
      timeout = setTimeout(scramble, speed);
    };

    timeout = setTimeout(scramble, startDelay);
    return () => clearTimeout(timeout);
  }, [finalText, speed, startDelay, hasTriggered]);

  return { displayedText, isComplete, ref };
};

// ─────────────────────────────────────────────────────────────
// TYPING EFFECT - Classic terminal character-by-character
// ─────────────────────────────────────────────────────────────
export const useTypingEffect = (text: string, speed: number = 50, startDelay: number = 0) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let charIndex = 0;

    const startTyping = () => {
      const type = () => {
        if (charIndex < text.length) {
          setDisplayedText(text.slice(0, charIndex + 1));
          charIndex++;
          timeout = setTimeout(type, speed);
        } else {
          setIsComplete(true);
        }
      };
      type();
    };

    timeout = setTimeout(startTyping, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isComplete };
};

// ─────────────────────────────────────────────────────────────
// COUNT UP - Numeric counter with eased animation
// ─────────────────────────────────────────────────────────────
export const useCountUp = (end: number, duration: number = 2000, startOnReveal: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const startCounting = useCallback(() => {
    if (hasStarted) return;
    setHasStarted(true);

    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, hasStarted]);

  useEffect(() => {
    if (!startOnReveal) {
      startCounting();
      return;
    }

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [startCounting, startOnReveal]);

  return { count, ref };
};

// ─────────────────────────────────────────────────────────────
// SCAN LINE - Animated scan-line reveal for cards
// Returns a CSS variable for the scan-line position
// ─────────────────────────────────────────────────────────────
export const useScanReveal = (duration: number = 600) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScanning(true);
          setTimeout(() => {
            setIsRevealed(true);
            setIsScanning(false);
          }, duration);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.unobserve(el);
  }, [duration]);

  return { ref, isScanning, isRevealed };
};
