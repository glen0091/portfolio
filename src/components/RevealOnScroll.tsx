"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

/**
 * Progressive-enhancement reveal.
 *
 * Before hydration (and if JS never loads / is disabled) it renders a plain,
 * fully-visible wrapper — so content is NEVER hidden behind an animation that
 * might not run. After mount it swaps in the animated version, which mounts
 * fresh and plays its entrance. This keeps the motion for real users while
 * guaranteeing the content is always visible and indexable.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReady(true);
  }, []);

  if (!ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
