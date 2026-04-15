"use client";

import { useRef, useState, useEffect } from "react";

export function useDraggableScroll() {
  const ref = useRef<HTMLElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onMouseDown = (e: MouseEvent) => {
      setIsMouseDown(true);
      setStartX(e.pageX - element.offsetLeft);
      setScrollLeft(element.scrollLeft);
      setIsDragging(false);
    };

    const onMouseLeave = () => {
      setIsMouseDown(false);
      setIsDragging(false);
    };

    const onMouseUp = (e: MouseEvent) => {
      setIsMouseDown(false);
      // Small delay to prevent unintended clicks during a drag
      if (isDragging) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDown) return;
      
      const x = e.pageX - element.offsetLeft;
      const walk = (x - startX) * 2; // scroll speed multiplier
      
      if (Math.abs(walk) > 5) {
        setIsDragging(true);
      }

      if (isDragging) {
        e.preventDefault();
        element.scrollLeft = scrollLeft - walk;
      }
    };

    // Use passive: false for mousemove/mousedown to prevent unexpected page scrolls if needed
    element.addEventListener("mousedown", onMouseDown);
    element.addEventListener("mouseleave", onMouseLeave);
    element.addEventListener("mouseup", onMouseUp, { capture: true });
    element.addEventListener("mousemove", onMouseMove);

    return () => {
      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("mouseleave", onMouseLeave);
      element.removeEventListener("mouseup", onMouseUp, { capture: true });
      element.removeEventListener("mousemove", onMouseMove);
    };
  }, [isMouseDown, startX, scrollLeft, isDragging]);

  return ref;
}
