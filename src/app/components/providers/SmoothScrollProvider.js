"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function SmoothScrollProvider({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform-origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Parallax background layers */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%)`,
            y: useSpring(useScroll().scrollY, {
              stiffness: 100,
              damping: 30,
            }),
          }}
        />
      </div>

      {children}
    </>
  );
}
