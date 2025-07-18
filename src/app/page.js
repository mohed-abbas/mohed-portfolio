import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ThemeToggle from "@/components/ui/ThemeToggle";

export default function Home() {
  return (
    <>
      <ThemeToggle />
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />

        {/* Placeholder for contact section */}
        <div className="h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
          <p className="text-2xl text-gray-400">
            Contact Section Coming Next...
          </p>
        </div>
      </main>
    </>
  );
}
