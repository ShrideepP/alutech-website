import { useState, useEffect } from "react";

/**
 * Hook that returns true when the viewport width is below the specified breakpoint
 * @param breakpoint - The width breakpoint in pixels (e.g., 768)
 * @returns true if viewport width < breakpoint, false otherwise, undefined during SSR
 */
export function useMediaQuery(breakpoint: number): boolean | undefined {
  // Initialize with undefined to avoid hydration mismatch
  const [isBelowBreakpoint, setIsBelowBreakpoint] = useState<
    boolean | undefined
  >(undefined);

  useEffect(() => {
    // This only runs on the client after hydration
    const query = `(max-width: ${breakpoint - 1}px)`;
    const media = window.matchMedia(query);

    // Set initial value
    setIsBelowBreakpoint(media.matches);

    // Create listener for changes
    const listener = (event: MediaQueryListEvent) => {
      setIsBelowBreakpoint(event.matches);
    };

    // Use the newer addEventListener API
    media.addEventListener("change", listener);

    // Cleanup
    return () => media.removeEventListener("change", listener);
  }, [breakpoint]);

  return isBelowBreakpoint;
}
