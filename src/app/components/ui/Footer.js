"use client";

import { Heart, Code2 } from "lucide-react";
import { siteConfig } from "@/config/site";
import { socialLinks } from "@/lib/data/contact";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-width section-padding py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">MA</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer crafting digital experiences with modern
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md hover:scale-110 transition-all duration-200"
                >
                  <social.icon
                    size={20}
                    className="text-gray-600 dark:text-gray-400"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <p className="flex items-center gap-2">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Made with{" "}
              <Heart size={16} className="text-red-500" fill="currentColor" />{" "}
              and <Code2 size={16} />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
