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
  Layers,
  Monitor,
  Zap,
} from "lucide-react";

// Skill card component
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
      className="group relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon */}
      <motion.div
        className="relative z-10 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors"
        animate={{ rotate: isHovered ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
      </motion.div>

      {/* Content */}
      <h3 className="relative z-10 text-lg font-semibold mb-2">{skill.name}</h3>
      <p className="relative z-10 text-sm text-gray-600 dark:text-gray-400 mb-4">
        {skill.description}
      </p>

      {/* Skills list */}
      <div className="relative z-10 flex flex-wrap gap-2">
        {skill.items.map((item, idx) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 + idx * 0.02 }}
            viewport={{ once: true }}
            className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
          >
            {item}
          </motion.span>
        ))}
      </div>

      {/* Progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, delay: index * 0.1 }}
        viewport={{ once: true }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

// Technology badge component
const TechBadge = ({ tech, delay }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      onClick={() => setIsFlipped(!isFlipped)}
      className="relative w-20 h-20 cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md flex items-center justify-center"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute inset-0 flex items-center justify-center backface-hidden">
          <span className="text-2xl font-bold text-gray-700 dark:text-gray-300">
            {tech.icon}
          </span>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl"
          style={{ transform: "rotateY(180deg)" }}
        >
          <span className="text-xs text-white font-medium text-center px-2">
            {tech.name}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: Monitor,
      description: "Creating beautiful, responsive user interfaces",
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
      description: "Building robust server-side applications",
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
      name: "Database Management",
      icon: Database,
      description: "Designing and optimizing data structures",
      items: ["MySQL", "PostgreSQL", "MongoDB", "MariaDB", "Redis", "Firebase"],
    },
    {
      name: "DevOps & Tools",
      icon: Cloud,
      description: "Deployment and development workflows",
      items: ["Git", "Docker", "CI/CD", "DigitalOcean", "Heroku", "Vercel"],
    },
    {
      name: "LMS Development",
      icon: Boxes,
      description: "Specialized in educational technology",
      items: ["Moodle", "Plugin Development", "SCORM", "LTI", "Custom Modules"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      description: "Crafting intuitive user experiences",
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
    { icon: "⚛️", name: "React" },
    { icon: "🔷", name: "TypeScript" },
    { icon: "🟩", name: "Node.js" },
    { icon: "🔴", name: "Laravel" },
    { icon: "🐘", name: "PHP" },
    { icon: "🍃", name: "MongoDB" },
    { icon: "🐬", name: "MySQL" },
    { icon: "🎨", name: "Tailwind" },
    { icon: "📱", name: "React Native" },
    { icon: "🔥", name: "Firebase" },
    { icon: "🐳", name: "Docker" },
    { icon: "📚", name: "Moodle" },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Technologies showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Technologies I Love</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <TechBadge key={tech.name} tech={tech} delay={index * 0.05} />
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Always eager to learn new technologies and take on challenging
            projects
          </p>
          <motion.a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
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

      {/* CSS for 3D flip effect */}
      <style jsx>{`
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
