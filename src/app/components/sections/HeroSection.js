"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import dynamic from "next/dynamic";
import HeroHeader from "@/components/ui/HeroHeader";
import { ParallaxLayer } from "@/components/ui/Parallax";

// Dynamically import 3D background to avoid SSR issues
const HeroBackground = dynamic(
  () => import("@/components/three/HeroBackground"),
  {
    ssr: false,
    loading: () => (
      <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>
    ),
  }
);

// Enhanced TypeWriter with glitch effect
const TypeWriter = ({ words, className }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const word = words[currentWord];

        if (!isDeleting) {
          setCurrentText(word.substring(0, currentText.length + 1));

          if (currentText === word) {
            setIsGlitching(true);
            setTimeout(() => {
              setIsGlitching(false);
              setIsDeleting(true);
            }, 1500);
          }
        } else {
          setCurrentText(word.substring(0, currentText.length - 1));

          if (currentText === "") {
            setIsDeleting(false);
            setCurrentWord((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, currentWord, isDeleting, words]);

  return (
    <span className={`${className} ${isGlitching ? "animate-pulse" : ""}`}>
      {currentText}
      <motion.span
        className="inline-block ml-1 w-0.5 h-8 bg-blue-600"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </span>
  );
};

// Animated skill badge
const SkillBadge = ({ icon: Icon, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, type: "spring", stiffness: 100 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-white/20 dark:border-white/10"
  >
    <Icon size={16} className="text-blue-600 dark:text-blue-400" />
    <span className="text-sm font-medium">{label}</span>
  </motion.div>
);

// Mouse follower cursor
const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrameId = null;

    const updateMousePosition = (e) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    // Check if hovering over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-2 h-2 rounded-full bg-blue-600 pointer-events-none z-[100] hidden lg:block -translate-x-1 -translate-y-1"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      />
      {/* Cursor ring */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-blue-600/30 pointer-events-none z-[100] hidden lg:block -translate-x-4 -translate-y-4"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering
            ? "rgb(37 99 235 / 0.6)"
            : "rgb(37 99 235 / 0.3)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 150, mass: 0.8 }}
      />
    </>
  );
};

export default function HeroSection() {
  const skills = [
    "Full Stack Developer",
    "PHP Expert",
    "React Developer",
    "LMS Plugin Creator",
  ];
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Minimal header */}
      <HeroHeader />

      {/* 3D Background */}
      <HeroBackground />

      {/* Content */}
      <motion.div
        className="relative z-10 max-width section-padding text-center"
        style={{ y: y1, opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Name with simple animation */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient">{siteConfig.hero.name}</span>
          </motion.h1>

          {/* Typewriter effect */}
          <motion.div
            className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 mb-8 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <TypeWriter words={skills} className="font-light" />
          </motion.div>

          {/* Simple subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            {siteConfig.hero.subtitle}
          </motion.p>

          {/* CTA Buttons - simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href={siteConfig.hero.cta.primary.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              {siteConfig.hero.cta.primary.text}
            </motion.a>

            <motion.a
              href={siteConfig.hero.cta.secondary.href}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              {siteConfig.hero.cta.secondary.text}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Simple scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ChevronDown size={24} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
