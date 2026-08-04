"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="from-accent via-accent-2 to-accent fixed top-0 right-0 left-0 z-[95] h-[2px] origin-left bg-gradient-to-r"
      aria-hidden="true"
    />
  );
}
