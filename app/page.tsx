import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import MissionSection from "./components/MissionSection";
import TechnologyStackSection from "./components/TechnologyStackSection";
import ContactFormSection from "./components/ContactFormSection";
import FooterSection from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <MissionSection />
      <TechnologyStackSection />
      <ContactFormSection />
      <FooterSection />
    </>
  );
}
