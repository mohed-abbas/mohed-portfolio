export const projects = [
  {
    id: 1,
    title: "Advanced Moodle LMS Plugin",
    description:
      "Developed a comprehensive plugin for Moodle that enhances the learning experience with interactive modules, real-time progress tracking, and gamification features.",
    longDescription:
      "This plugin revolutionizes the way students interact with course content by introducing gamification elements, real-time collaboration tools, and advanced analytics for instructors.",
    image: "/projects/moodle-plugin.jpg",
    technologies: ["PHP", "JavaScript", "MySQL", "Moodle API", "AJAX"],
    category: "lms",
    features: [
      "Real-time progress tracking",
      "Gamification badges and rewards",
      "Interactive quiz modules",
      "Student collaboration tools",
    ],
    links: {
      github: "https://github.com/mohed-abbas",
      live: "#",
      demo: "#",
    },
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution built with React and Laravel, featuring secure payment integration, inventory management, and real-time order tracking.",
    longDescription:
      "A modern e-commerce platform with a focus on user experience and performance. Includes admin dashboard, multi-vendor support, and advanced search capabilities.",
    image: "/projects/ecommerce.jpg",
    technologies: ["React", "Laravel", "MySQL", "Stripe API", "Redis"],
    category: "fullstack",
    features: [
      "Secure payment processing",
      "Real-time inventory updates",
      "Advanced search and filters",
      "Admin analytics dashboard",
    ],
    links: {
      github: "https://github.com/mohed-abbas",
      live: "#",
    },
    year: "2024",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Collaborative task management application with real-time updates, team workflows, and project analytics built with Next.js and Node.js.",
    longDescription:
      "A comprehensive project management tool designed for teams. Features include Kanban boards, Gantt charts, time tracking, and team collaboration features.",
    image: "/projects/task-manager.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io", "JWT"],
    category: "fullstack",
    features: [
      "Real-time collaboration",
      "Kanban and Gantt views",
      "Time tracking",
      "Team performance analytics",
    ],
    links: {
      github: "https://github.com/mohed-abbas",
      live: "#",
    },
    year: "2023",
    featured: false,
  },
  {
    id: 4,
    title: "Educational Quiz Platform",
    description:
      "Interactive quiz platform for educators with AI-powered question generation, detailed analytics, and student performance tracking.",
    longDescription:
      "Built specifically for educational institutions, this platform helps teachers create engaging quizzes with various question types and provides detailed insights into student performance.",
    image: "/projects/quiz-platform.jpg",
    technologies: ["React", "PHP", "PostgreSQL", "Chart.js", "AI API"],
    category: "lms",
    features: [
      "AI question generation",
      "Multiple question types",
      "Detailed analytics",
      "Student progress reports",
    ],
    links: {
      github: "https://github.com/mohed-abbas",
      demo: "#",
    },
    year: "2023",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio website with 3D animations, dark mode, and optimized performance built with Next.js and Three.js.",
    longDescription:
      "A showcase of modern web development techniques including 3D graphics, smooth animations, and exceptional performance optimization.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    category: "frontend",
    features: [
      "3D interactive elements",
      "Dark/light theme",
      "Optimized performance",
      "Responsive design",
    ],
    links: {
      github: "https://github.com/mohed-abbas",
      live: "#",
    },
    year: "2024",
    featured: true,
  },
  {
    id: 6,
    title: "Real-time Chat Application",
    description:
      "Secure messaging platform with end-to-end encryption, file sharing, and video calling capabilities.",
    longDescription:
      "A modern chat application focusing on privacy and security while providing a smooth user experience with features like typing indicators, read receipts, and message reactions.",
    image: "/projects/chat-app.jpg",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    category: "fullstack",
    features: [
      "End-to-end encryption",
      "Video/voice calling",
      "File sharing",
      "Message reactions",
    ],
    links: {
      github: "https://github.com/mohed-abbas",
      demo: "#",
    },
    year: "2023",
    featured: false,
  },
];

export const categories = [
  { id: "all", name: "All Projects", count: projects.length },
  {
    id: "fullstack",
    name: "Full Stack",
    count: projects.filter((p) => p.category === "fullstack").length,
  },
  {
    id: "frontend",
    name: "Frontend",
    count: projects.filter((p) => p.category === "frontend").length,
  },
  {
    id: "lms",
    name: "LMS/Education",
    count: projects.filter((p) => p.category === "lms").length,
  },
];
