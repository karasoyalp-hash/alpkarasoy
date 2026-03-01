import { HeroSection } from "@/components/home/hero";
import { AboutSection } from "@/components/home/about";
import { ServicesSection } from "@/components/home/services";
import { CaseStudiesSection } from "@/components/home/case-studies";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
    </div>
  );
}
