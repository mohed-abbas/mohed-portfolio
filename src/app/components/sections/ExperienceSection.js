"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { experiences, certifications } from "@/lib/data/experience";

// Experience card component
const ExperienceCard = ({ experience, index, isLeft }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 1], [isLeft ? -100 : 100, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, x }}
      className={`flex items-center gap-8 ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      {/* Content card */}
      <motion.div
        className="flex-1 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold mb-1">{experience.title}</h3>
            <p className="text-blue-600 dark:text-blue-400 font-medium">
              {experience.company}
            </p>
          </div>
          <motion.div
            className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <experience.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar size={16} />
            {experience.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={16} />
            {experience.location}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {experience.description}
        </p>

        {/* Achievements */}
        <div className="space-y-2">
          {experience.achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-2"
            >
              <CheckCircle2
                size={16}
                className="text-green-500 mt-0.5 flex-shrink-0"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {achievement}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Technologies used */}
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Timeline dot and line */}
      <div className="relative">
        <motion.div
          className="w-4 h-4 bg-blue-600 rounded-full ring-4 ring-blue-100 dark:ring-blue-900/30"
          whileInView={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
        {index !== experiences.length - 1 && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gray-300 dark:bg-gray-700" />
        )}
      </div>

      {/* Year */}
      <div className="flex-1 text-center">
        <motion.span
          className="text-4xl font-bold text-gray-200 dark:text-gray-800"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
        >
          {experience.year}
        </motion.span>
      </div>
    </motion.div>
  );
};

// Certification card
const CertificationCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl relative overflow-hidden group"
  >
    <div className="flex items-start justify-between mb-3">
      <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
      <span className="text-sm text-gray-600 dark:text-gray-400">
        {cert.year}
      </span>
    </div>
    <h4 className="font-semibold mb-1">{cert.title}</h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
      {cert.issuer}
    </p>
    {cert.credential && (
      <p className="text-xs text-gray-500 dark:text-gray-500">
        {cert.credential}
      </p>
    )}

    {/* View credential link */}
    {cert.link && cert.link !== "#" && (
      <motion.a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
        whileHover={{ scale: 1.1 }}
      >
        <ExternalLink size={16} className="text-gray-600 dark:text-gray-400" />
      </motion.a>
    )}
  </motion.div>
);

export default function ExperienceSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-width section-padding relative" ref={containerRef}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional growth and key milestones
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mb-20">
          {/* Animated center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-700">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-purple-600"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Certifications & Courses</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard key={cert.id} cert={cert} index={index} />
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
            Ready to add your project to my journey?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
