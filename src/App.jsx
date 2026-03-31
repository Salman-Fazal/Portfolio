import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CTASection from './components/CTASection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import TestimonialsSection from './components/TestimonialsSection';
import TrustSection from './components/TrustSection';

function App() {

  return (
    <div className="min-h-screen bg-white font-body text-ink transition-colors dark:bg-slate-950">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
