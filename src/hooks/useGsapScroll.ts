// src/hooks/useGsapScroll.ts
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Generic hook to set up a GSAP ScrollTrigger animation on a DOM element.
 * It returns a ref to be attached to the target element.
 * The `animation` callback receives the element and should create a GSAP timeline
 * (or tween) and return it. The hook will automatically kill the timeline on
 * unmount.
 */
export function useGsapScroll({
  animation,
  start = 'top 85%',
  end,
  scrub = false,
  markers = false,
}: {
  animation: (el: HTMLElement) => gsap.core.Tween | gsap.core.Timeline;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const tween = animation(el);
    // Attach scroll trigger
    const st = ScrollTrigger.create({
      trigger: el,
      start,
      end,
      scrub,
      markers,
      animation: tween,
    });
    return () => {
      tween.kill();
      st.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ref;
}
