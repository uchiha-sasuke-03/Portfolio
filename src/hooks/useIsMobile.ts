import { useState, useEffect } from 'react';

/**
 * Hook to detect if the user is on a mobile device.
 * Uses both screen width and user-agent heuristics.
 * Returns true on the server / initial render to default to the lighter experience.
 */
export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);

  return isMobile;
}
