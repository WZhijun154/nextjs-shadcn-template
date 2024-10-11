"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/dynamics";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = Math.ceil((scrollPx / winHeightPx) * 100);

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return <Progress value={scrollProgress} className="w-full h-[4px]" />;
}
