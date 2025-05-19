import  HeroSection  from "@/components/sections/HeroSection";
import FooterSection from '@/components/sections/FooterSection';
import AutomationFeaturesSection from "@/components/sections/AutomationFeaturesSection";
import ApplicationGallery from "@/components/sections/ApplicationGallery";
import SolutionsSection from "@/components/sections/SolutionsSection";
import {CallToActionSection} from "@/components/sections/CallToActionSection";

// Loading fallback component
// const SectionLoading = () => <div className="min-h-[50px]" />;

// Update the Home component to accept params
export default async function Home() {
  return (
    <div>
      <HeroSection  />
      <AutomationFeaturesSection />
      <ApplicationGallery />
      <SolutionsSection />
      <CallToActionSection/> 
      <FooterSection />
    </div>
  );
}