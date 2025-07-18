"use client";

import { motion } from "framer-motion";

export default function HeroHeader() {
  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-40 p-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="max-width section-padding">
        <div className="flex justify-between items-center">
          {/* Minimal logo */}
          <motion.div
            className="text-2xl font-bold"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-gradient">MA</span>
          </motion.div>

          {/* Simple CTA */}
          <motion.a
            href="#contact"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            {"Let's talk →"}
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
