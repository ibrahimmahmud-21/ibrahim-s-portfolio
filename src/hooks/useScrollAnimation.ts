import { useEffect, useRef, useState } from "react";

export function useScrollAnimation(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animateReady, setAnimateReady] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Mark as ready for animation after mount
    setAnimateReady(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px 50px 0px" }
    );

    observer.observe(el);

    // Fallback: if not visible after 1.2s, force show
    const fallback = setTimeout(() => setIsVisible(true), 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [threshold]);

  const className = `scroll-fade${animateReady ? " animate-ready" : ""}${isVisible ? " visible" : ""}`;

  return { ref, isVisible, className };
}
