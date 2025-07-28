import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SkillsGalaxy from "./components/SkillsGalaxy";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <HeroSection />
        <ExperienceSection />
        <SkillsGalaxy />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
