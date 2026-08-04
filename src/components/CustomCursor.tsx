"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Reads client-only capabilities (pointer type, motion preference) that
    // are unknown at server-render time, so this can't be a lazy initializer.
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(fine && !reduced);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf = 0;

    const move = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`;
    };

    const loop = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        ring.dataset.state = "hover";
      }
    };
    const onLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor-hover]")) {
        ring.dataset.state = "default";
      }
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", onEnter);
    document.addEventListener("pointerout", onLeave);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", onEnter);
      document.removeEventListener("pointerout", onLeave);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90]">
      <div
        ref={dotRef}
        className="bg-accent-2 fixed top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
      />
      <div
        ref={ringRef}
        data-state="default"
        className="border-accent-2/60 data-[state=hover]:bg-accent-2/10 fixed top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-[width,height,opacity] duration-200 ease-out data-[state=hover]:h-12 data-[state=hover]:w-12"
      />
    </div>
  );
}
