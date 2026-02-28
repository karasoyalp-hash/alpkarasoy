import { HeroSection } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ServicesSection } from "@/components/home/services";
import { CaseStudiesSection } from "@/components/home/case-studies";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto w-full snap-y snap-mandatory scroll-smooth">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
    </div>
  );
}
