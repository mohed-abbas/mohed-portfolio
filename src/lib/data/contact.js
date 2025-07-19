import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const contactInfo = {
  email: "mohed332@gmail.com",
  phone: "+33 123 456 789", // Update with your actual phone
  location: "Versailles, Île-de-France, France",
  availability: "Available for freelance projects",
  responseTime: "Usually responds within 24 hours",
};

export const contactMethods = [
  {
    id: 1,
    icon: Mail,
    title: "Email",
    value: contactInfo.email,
    link: `mailto:${contactInfo.email}`,
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
    description: "Best way to reach me",
  },
  {
    id: 2,
    icon: Phone,
    title: "Phone",
    value: contactInfo.phone,
    link: `tel:${contactInfo.phone}`,
    color: "text-green-600 dark:text-green-400",
    bgColor: "bg-green-100 dark:bg-green-900/30",
    description: "Available Mon-Fri",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Location",
    value: contactInfo.location,
    link: "#",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
    description: "Open to remote work",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: Github,
    name: "GitHub",
    username: "@mohed-abbas",
    link: "https://github.com/mohed-abbas",
    color: "hover:text-gray-900 dark:hover:text-white",
  },
  {
    id: 2,
    icon: Linkedin,
    name: "LinkedIn",
    username: "Mohed Abbas",
    link: "#", // Update with your LinkedIn URL
    color: "hover:text-blue-700 dark:hover:text-blue-400",
  },
  {
    id: 3,
    icon: Twitter,
    name: "Twitter",
    username: "@mohedabbas",
    link: "#", // Update with your Twitter URL
    color: "hover:text-blue-500 dark:hover:text-blue-400",
  },
];

export const formFields = [
  {
    id: "name",
    label: "Your Name",
    type: "text",
    placeholder: "John Doe",
    required: true,
    validation: {
      minLength: 2,
      maxLength: 50,
    },
  },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    placeholder: "john@example.com",
    required: true,
    validation: {
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
  },
  {
    id: "subject",
    label: "Subject",
    type: "text",
    placeholder: "Project inquiry",
    required: true,
    validation: {
      minLength: 5,
      maxLength: 100,
    },
  },
  {
    id: "message",
    label: "Message",
    type: "textarea",
    placeholder: "Tell me about your project...",
    required: true,
    rows: 5,
    validation: {
      minLength: 10,
      maxLength: 1000,
    },
  },
];
