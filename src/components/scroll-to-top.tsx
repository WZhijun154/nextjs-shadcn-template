"use client";

import { Button } from "./ui/button";
import { ArrowUpToLine } from "lucide-react";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";

export const ScrollToTop = () => {
  const showTopBtn = useScrollToTop();

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="fixed bottom-4 right-4 opacity-90 shadow-md"
          size="icon"
        >
          <ArrowUpToLine className="h-4 w-4" />
        </Button>
      )}
    </>
  );
};
