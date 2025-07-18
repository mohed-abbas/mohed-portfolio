"use client";

import { motion } from "framer-motion";
import { Calendar, Code2, Coffee, Rocket } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Stats component
const StatCard = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 text-center group hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
  >
    <motion.div
      className="inline-flex p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-4"
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.5 }}
    >
      <Icon size={24} />
    </motion.div>
    <h3 className="text-2xl font-bold mb-1">{value}</h3>
    <p className="text-gray-600 dark:text-gray-400 text-sm">{label}</p>
  </motion.div>
);

// Journey timeline item
const TimelineItem = ({ year, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className={`flex items-center gap-4 ${
      index % 2 === 0 ? "flex-row" : "flex-row-reverse"
    }`}
  >
    <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
    <div className="relative">
      <div className="w-4 h-4 bg-blue-600 rounded-full" />
      {index !== 2 && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gray-300 dark:bg-gray-700" />
      )}
    </div>
    <div className="flex-1">
      <span className="text-blue-600 dark:text-blue-400 font-medium">
        {year}
      </span>
    </div>
  </motion.div>
);

export default function AboutSection() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const stats = [
    { icon: Calendar, value: "2+", label: "Years Experience" },
    { icon: Code2, value: "50+", label: "Projects Completed" },
    { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
    { icon: Rocket, value: "15+", label: "Technologies" },
  ];

  const journey = [
    {
      year: "2022",
      title: "Started My Journey",
      description:
        "Began learning web development and fell in love with creating digital experiences",
    },
    {
      year: "2023",
      title: "Specialized in LMS",
      description:
        "Focused on Moodle plugin development and educational technology",
    },
    {
      year: "2024",
      title: "Full Stack Mastery",
      description:
        "Expanded expertise to modern frameworks like React, Laravel, and cloud technologies",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-width section-padding relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A passionate developer who loves turning ideas into reality through
            code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">
              {"Hi, I'm Mohed Abbas 👋"}
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                {`I'm a Full Stack Developer with over 2 years of experience in
                creating dynamic web applications and specialized Learning
                Management System plugins. My journey in tech started with a
                curiosity about how things work on the web, and it has evolved
                into a passion for building impactful digital solutions.`}
              </p>
              <p>
                {`I specialize in PHP and JavaScript ecosystems, with deep
                expertise in frameworks like Laravel, React, and Next.js. My
                experience with Moodle plugin development has taught me the
                importance of creating user-friendly educational tools that
                enhance the learning experience.`}
              </p>
              <p>
                {`When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of
                coffee while solving complex problems. I believe in continuous
                learning and staying updated with the latest industry trends.`}
              </p>
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {"Let's Work Together"}
              <Rocket size={18} />
            </motion.a>
          </motion.div>

          {/* Right content - GitHub Snake */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">
                  GitHub Contributions
                </span>
              </div>

              {/* GitHub Snake Animation */}
              <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-900 p-4">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
                )}
                <Image
                  src="https://raw.githubusercontent.com/mohed-abbas/mohed-abbas/output/github-snake-dark.svg"
                  alt="GitHub contribution snake"
                  width={500}
                  height={200}
                  className="w-full h-auto dark:hidden"
                  onLoad={() => setImageLoaded(true)}
                />
                <Image
                  src="https://raw.githubusercontent.com/mohed-abbas/mohed-abbas/output/github-snake.svg"
                  alt="GitHub contribution snake"
                  width={500}
                  height={200}
                  className="w-full h-auto hidden dark:block"
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
                My coding journey visualized 🐍
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
          <div className="space-y-8">
            {journey.map((item, index) => (
              <TimelineItem key={item.year} {...item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
