import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { ProjectModal } from '../components/modal/ProjectModal';

export function Home({ theme, toggleTheme }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects onSelectProject={(proj) => setSelectedProject(proj)} />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
