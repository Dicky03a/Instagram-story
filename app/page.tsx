import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ViewsSection from './components/ViewsSection';
import ProjectsSection from './components/ProjectsSection';
import GameSection from './components/GameSection';
import ClientScrollManager from './components/ClientScrollManager';
import prisma from '@/lib/prisma';

export default async function Page() {
  const [skills, projects, experiences, views] = await Promise.all([
    prisma.skill.findMany({ orderBy: { createdAt: 'asc' } }),
    prisma.project.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.experience.findMany({ orderBy: { startDate: 'desc' } }),
    prisma.view.findMany({ orderBy: { createdAt: 'desc' } }),
  ]);

  return (
    <main className="min-h-screen bg-white relative flex flex-col items-center overflow-x-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 pointer-events-none bg-grid-pattern opacity-50"></div>

      {/* Sections */}
      <HeroSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <ViewsSection views={views} />
      <ProjectsSection projects={projects} />
      <GameSection />

      {/* Client-side Scroll Logic & Floating Nav */}
      <ClientScrollManager />
    </main>
  );
}
