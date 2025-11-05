import { useEffect, useRef, useState } from "react";
import * as flags from "country-flag-icons/string/3x2";
import "./styles.css";

export default function SvgFlagImage({
  countryCode,
  className,
}: {
  countryCode: string;
  className?: string;
}) {
  const [mounted, setMounted] = useState(true);
  const imageRef = useRef<HTMLDivElement>(null);
  const newClassName = `country-image ${className}`.trim();

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!mounted || !imageRef.current) return;

    const flagCode = countryCode as keyof typeof flags;
    const flagSvg = flags[flagCode];

    imageRef.current.innerHTML = flagSvg?.length > 0 ? flagSvg : "";
  }, [mounted]);

  return <div className={newClassName} ref={imageRef} />;
}
