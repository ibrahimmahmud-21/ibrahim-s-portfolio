import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateReady, setAnimateReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark as ready for animation after mount — content stays visible if JS/observer fails
    setAnimateReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);

    // Fallback: if not visible after 1.5s, force show
    const fallback = setTimeout(() => setIsVisible(true), 1500);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  const className = `scroll-fade${animateReady ? " animate-ready" : ""}${isVisible ? " visible" : ""}`;

  return { ref, isVisible, className };
}
