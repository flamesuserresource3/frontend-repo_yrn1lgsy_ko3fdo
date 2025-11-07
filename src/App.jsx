import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { AboutSection, SkillsSection, ProjectsSection, ContactSection, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation - sticky */}
      <Navbar />

      {/* Hero with Spline 3D and avatar */}
      <Hero />

      {/* About Me */}
      <AboutSection />

      {/* Skills grid with icons */}
      <SkillsSection />

      {/* Projects list */}
      <ProjectsSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
