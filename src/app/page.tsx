import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { getProjects } from '@/services/projects';

// Generate metadata for SEO
export async function generateMetadata() {
  const projects = await getProjects();

  return {
    title: 'Portfolio - Desenvolvedor Full Stack',
    description: `Portfolio profissional com ${projects.length} projetos em destaque. Especializado em desenvolvimento web moderno com React, Next.js e TypeScript.`,
    keywords: projects
      .map((p) => p.technologies)
      .flat()
      .join(', '),
    openGraph: {
      title: 'Portfolio - Desenvolvedor Full Stack',
      description:
        'Conheça meus projetos e experiências em desenvolvimento web',
      images: projects.filter((p) => p.image).map((p) => p.image!),
    },
  };
}

export default async function Home() {
  // Fetch projects on server-side for SEO
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero />

      <AboutSection id="about" />

      <ProjectsSection id="projects" projects={projects} />

      <ContactSection id="contact" />

      <Footer />
    </div>
  );
}
