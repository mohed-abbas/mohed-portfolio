import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Mohed Abbas - Full Stack Developer",
  description:
    "Passionate Full Stack Developer specializing in PHP, JavaScript, and modern web technologies. Creating dynamic websites and LMS plugins.",
  keywords:
    "Full Stack Developer, PHP, JavaScript, React, Laravel, Moodle, Web Development",
  authors: [{ name: "Mohed Abbas" }],
  openGraph: {
    title: "Mohed Abbas - Full Stack Developer",
    description: "Passionate Full Stack Developer with 2+ years of experience",
    url: "https://mohedabbas.com", // Update with your domain
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="bg-white dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 antialiased transition-colors duration-300">
        <ThemeProvider>
          {/* Theme provider wraps the entire app */}
          <main className="relative min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
