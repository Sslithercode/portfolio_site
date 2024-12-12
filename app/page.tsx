"use client";

import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { EducationSection } from "@/components/sections/education";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { Timeline } from "@/components/timeline";
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <Timeline/>
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}