"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Database,
  Globe,
  Palette,
  Server,
  Terminal,
  Boxes,
  Cloud,
  GitBranch,
  Monitor,
  Zap,
  Layers,
} from "lucide-react";
import {
  ParallaxSection,
  ParallaxElement,
  FloatingElement,
} from "@/components/ui/Parallax";

// Import React Icons for technology logos
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiFirebase,
  SiDocker,
  SiNextdotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPython,
  SiFigma,
  SiPostgresql,
  SiRedis,
  SiGraphql,
  SiSymfony,
  SiVercel,
} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";

// Skill card component - redesigned
const SkillCard = ({ skill, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col min-h-[260px] h-full">
        {/* Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
            <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {skill.items.length} Skills
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {skill.description}
        </p>

        {/* Skills tags */}
        {/* Skills tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {skill.items.map((item, idx) => (
            <motion.span
              key={item}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 + idx * 0.02 }}
              viewport={{ once: true }}
              className="text-xs px-3 py-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-lg text-gray-700 dark:text-gray-300 font-medium"
            >
              {item}
            </motion.span>
          ))}
        </div>

        {/* Hover indicator */}
        <motion.div
          className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

// Technology badge component with proper icons
const TechBadge = ({ tech, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="relative w-16 h-16 bg-white dark:bg-gray-800 rounded-xl shadow-md group-hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-100 dark:border-gray-700">
        <tech.icon
          className={`w-8 h-8 transition-colors ${tech.color}`}
          style={{ color: isHovered ? tech.hoverColor : undefined }}
        />

        {/* Tooltip */}
        <motion.div
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-lg whitespace-nowrap pointer-events-none"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
          transition={{ duration: 0.2 }}
        >
          {tech.name}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Monitor,
      description: "Building responsive and interactive user interfaces",
      items: [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML/CSS",
      ],
    },
    {
      name: "Backend Development",
      icon: Server,
      description: "Creating robust server-side applications and APIs",
      items: [
        "PHP",
        "Laravel",
        "Symfony",
        "Node.js",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      name: "Database & Cloud",
      icon: Database,
      description: "Managing data and deploying scalable solutions",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Docker", "Vercel"],
    },
    {
      name: "Tools & Workflow",
      icon: GitBranch,
      description: "Version control and development best practices",
      items: ["Git", "GitHub", "CI/CD", "Agile", "Testing", "Code Review"],
    },
    {
      name: "LMS Development",
      icon: Boxes,
      description: "Specialized in educational technology solutions",
      items: ["Moodle", "Plugin Development", "SCORM", "LTI", "Custom Modules"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Creating intuitive and beautiful user experiences",
      items: [
        "Figma",
        "Adobe XD",
        "Responsive Design",
        "Wireframing",
        "Prototyping",
      ],
    },
  ];

  const technologies = [
    {
      icon: SiReact,
      name: "React",
      color: "text-[#61DAFB]",
      hoverColor: "#61DAFB",
    },
    {
      icon: SiNextdotjs,
      name: "Next.js",
      color: "text-gray-900 dark:text-white",
      hoverColor: "#000",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "text-[#3178C6]",
      hoverColor: "#3178C6",
    },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "text-[#F7DF1E]",
      hoverColor: "#F7DF1E",
    },
    {
      icon: SiPhp,
      name: "PHP",
      color: "text-[#777BB4]",
      hoverColor: "#777BB4",
    },
    {
      icon: SiLaravel,
      name: "Laravel",
      color: "text-[#FF2D20]",
      hoverColor: "#FF2D20",
    },
    {
      icon: SiNodedotjs,
      name: "Node.js",
      color: "text-[#339933]",
      hoverColor: "#339933",
    },
    {
      icon: SiMongodb,
      name: "MongoDB",
      color: "text-[#47A248]",
      hoverColor: "#47A248",
    },
    {
      icon: SiMysql,
      name: "MySQL",
      color: "text-[#4479A1]",
      hoverColor: "#4479A1",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwind",
      color: "text-[#06B6D4]",
      hoverColor: "#06B6D4",
    },
    {
      icon: SiDocker,
      name: "Docker",
      color: "text-[#2496ED]",
      hoverColor: "#2496ED",
    },
    {
      icon: SiGit,
      name: "Git",
      color: "text-[#F05032]",
      hoverColor: "#F05032",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background gradient orbs with parallax */}
      <ParallaxElement
        speed={0.5}
        className="absolute top-0 left-1/4 w-96 h-96"
      >
        <div className="w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      </ParallaxElement>
      <ParallaxElement
        speed={-0.5}
        className="absolute bottom-0 right-1/4 w-96 h-96"
      >
        <div className="w-full h-full bg-purple-500/10 rounded-full blur-3xl" />
      </ParallaxElement>

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
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications from
            concept to deployment
          </p>
        </motion.div>

        {/* Skills grid - new design */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Technologies showcase with proper icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-2">Technologies I Work With</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            My favorite tools and technologies for building amazing products
          </p>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <TechBadge key={tech.name} tech={tech} delay={index * 0.03} />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Always learning and exploring new technologies to deliver better
            solutions
          </p>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Projects
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
