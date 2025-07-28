import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsGalaxy from "./components/SkillsGalaxy";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-white dark:bg-gray-950 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ExperienceSection />
        <SkillsGalaxy />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
