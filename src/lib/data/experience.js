import { Code2, Briefcase, Lightbulb, GraduationCap } from "lucide-react";

export const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelance",
    duration: "2023 - Present",
    location: "Remote",
    year: "2023",
    icon: Code2,
    description:
      "Developing custom web solutions for clients worldwide, specializing in LMS plugins and full-stack applications.",
    achievements: [
      "Built 15+ custom Moodle plugins for educational institutions",
      "Delivered 20+ full-stack web applications",
      "Maintained 100% client satisfaction rate",
      "Reduced deployment time by 40% through CI/CD implementation",
    ],
    technologies: ["React", "Laravel", "PHP", "MySQL", "Docker"],
  },
  {
    id: 2,
    title: "Junior Web Developer",
    company: "Tech Solutions Inc",
    duration: "2022 - 2023",
    location: "Paris, France",
    year: "2022",
    icon: Briefcase,
    description:
      "Contributed to developing enterprise web applications and gained expertise in modern development practices.",
    achievements: [
      "Collaborated on 5 major client projects",
      "Improved application performance by 30%",
      "Implemented responsive designs for mobile compatibility",
      "Participated in agile development cycles",
    ],
    technologies: ["JavaScript", "Node.js", "MongoDB", "Git"],
  },
  {
    id: 3,
    title: "Web Development Intern",
    company: "Digital Agency",
    duration: "2021 - 2022",
    location: "Paris, France",
    year: "2021",
    icon: Lightbulb,
    description:
      "Started my professional journey learning industry best practices and modern web technologies.",
    achievements: [
      "Assisted in developing 10+ client websites",
      "Learned version control and team collaboration",
      "Created reusable component libraries",
      "Received mentorship from senior developers",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
  {
    id: 4,
    title: "Computer Science Student",
    company: "University",
    duration: "2019 - 2022",
    location: "France",
    year: "2019",
    icon: GraduationCap,
    description:
      "Pursued computer science education with focus on web technologies and software engineering.",
    achievements: [
      "Completed coursework in algorithms and data structures",
      "Built multiple academic projects",
      "Participated in coding competitions",
      "Maintained strong academic performance",
    ],
    technologies: ["Java", "Python", "C++", "SQL"],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Advanced React Development",
    issuer: "Online Platform",
    year: "2023",
    credential: "#REACT2023",
    link: "#", // Add actual credential link
  },
  {
    id: 2,
    title: "Laravel Mastery Course",
    issuer: "Tech Academy",
    year: "2023",
    credential: "#LARAVEL2023",
    link: "#",
  },
  {
    id: 3,
    title: "Moodle Plugin Development",
    issuer: "Moodle HQ",
    year: "2022",
    credential: "#MOODLE2022",
    link: "#",
  },
  {
    id: 4,
    title: "Full Stack Web Development",
    issuer: "Certification Institute",
    year: "2022",
    credential: "#FULLSTACK2022",
    link: "#",
  },
];

// You can add more data categories here
export const achievements = [
  {
    id: 1,
    title: "100% Client Satisfaction",
    description: "Maintained perfect client satisfaction across all projects",
    year: "2024",
  },
  {
    id: 2,
    title: "50+ Projects Delivered",
    description: "Successfully delivered over 50 projects for various clients",
    year: "2023",
  },
  {
    id: 3,
    title: "Open Source Contributor",
    description: "Active contributor to multiple open source projects",
    year: "2023",
  },
];
