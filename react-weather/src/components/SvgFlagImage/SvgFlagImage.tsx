import { useEffect, useRef, useState } from "react";
import './styles.css';
import { type SvgFlagImageProps } from './types';

/**
 * Component that displays a country flag SVG image based on a country code.
 * 
 * Key features:
 * - Uses the country-flag-icons library to fetch flag icons
 * - Implements mounting state to prevent hydration issues
 * - Dynamically imports flag icons to reduce bundle size
 * - Handles error cases gracefully
 * - Supports custom CSS classes
 * @param countryCode - The ISO 3-letter country code (e.g., "US", "FR")
 * @param className - Optional CSS class name to apply to the container
 * @returns A div element containing the country flag SVG
 */
export function SvgFlagImage({ countryCode, className }: SvgFlagImageProps) {
  const [mounted, setMounted] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const newClassName = `country-image ${className}`.trim();

  // Effect to handle component lifecycle - sets mounted state on mount
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  // Effect to render the flag SVG based on country code
  useEffect(() => {
    if (!mounted || !imageRef.current) return;

    // Dynamically import the flag icons library
    import("country-flag-icons/string/3x2")
      .then((flagsModule) => {
        // Get the flag code from the country code
        const flagCode = countryCode as keyof typeof flagsModule;
        // Retrieve the SVG flag from the flags library

        const flagSvg = flagsModule[flagCode];

        // Set the inner HTML of the container with the flag SVG
        // Fallback to empty string if flag SVG is not available
        if (imageRef.current) {
          imageRef.current.innerHTML = flagSvg?.length > 0 ? flagSvg : "";
        }
      })
      .catch((error) => {
        console.error("Failed to load flag icons:", error);
      });
  }, [mounted]);

  // Render the flag container with appropriate classes and title

  return (
    <div className={newClassName} ref={imageRef} title={countryCode} />
  );
}
