import HeroSection from "@/app/components/HeroSection";
import ServicesSection from "@/app/components/ServicesSection";
import ProjectsSection from "@/app/components/ProjectsSection";
import MissionSection from "@/app/components/MissionSection";
import TechnologyStackSection from "@/app/components/TechnologyStackSection";
import ContactFormSection from "@/app/components/ContactFormSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <MissionSection />
      <TechnologyStackSection />
      <ContactFormSection />
    </>
  );
}
