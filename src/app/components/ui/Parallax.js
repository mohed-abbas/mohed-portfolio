"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

// Simple parallax wrapper for sections
export function ParallaxSection({ children, className = "", offset = 50 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.6, 1, 1, 0.6]
  );

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

// Parallax background element
export function ParallaxElement({
  children,
  speed = 0.5,
  className = "",
  rotate = false,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOffset = 100 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [0, rotate ? 360 : 0]);

  return (
    <motion.div ref={ref} style={{ y, rotateZ }} className={className}>
      {children}
    </motion.div>
  );
}

// Floating animation for elements
export function FloatingElement({ children, delay = 0, duration = 3 }) {
  return (
    <motion.div
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Scale on scroll
export function ScaleOnScroll({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <motion.div ref={ref} style={{ scale }} className={className}>
      {children}
    </motion.div>
  );
}
