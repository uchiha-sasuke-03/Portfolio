// src/hooks/useGsapScrollReveal.ts
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook that applies a simple GSAP scroll‑triggered reveal animation to a DOM element.
 * The animation fades in the element and moves it upward when it enters the viewport.
 * Options can be extended to customize the animation (duration, y offset, etc.).
 */
export function useGsapScrollReveal({
  duration = 0.6,
  y = 50,
  opacity = 0,
  ease = 'power2.out',
}: {
  duration?: number;
  y?: number;
  opacity?: number;
  ease?: string;
} = {}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const tween = gsap.fromTo(
      el,
      { opacity, y },
      {
        opacity: 1,
        y: 0,
        duration,
        ease,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      },
    );
    return () => {
      // Clean up ScrollTrigger & tween
      tween.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return ref;
}
