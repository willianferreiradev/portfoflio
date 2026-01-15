import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <Hero />

      <AboutSection id="about" />

      <ProjectsSection id="projects" />

      <ContactSection id="contact" />

      <Footer />
    </div>
  );
}
