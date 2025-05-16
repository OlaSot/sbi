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
      {/* <InformationSection lang={params.lang} />
      <CatalogSection params={params}/>
      <DisplaySection params={params}/>
      <ChoiceSection params={params}/>
      <ImageDecorationSection params={params} />
      <ShowcaseSection params={params}/>
      <ProjectCasesSection params={params} /> 
      <FaqSection params={params}/> */}
      <CallToActionSection/> 
      <FooterSection />
    </div>
  );
}