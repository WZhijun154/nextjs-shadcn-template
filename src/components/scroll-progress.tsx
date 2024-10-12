"use client";

import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = Math.ceil((scrollPx / winHeightPx) * 100);

      setScrollProgress(scrolled);
      setIsAnimating(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // Ensure the duration is 5000ms (5 seconds)
    };

    window.addEventListener("scroll", updateScrollProgress);

    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div
      style={{ top: `calc(${scrollProgress}% - 40px)` }}
      className={`fixed right-0 w-[17px] h-20 ${
        isAnimating ? "bg-primary/60" : "bg-primary/20"
      } hover:bg-primary/60 z-50 rounded-full transition-all duration-300 hidden md:block`}
    />
  );
}
