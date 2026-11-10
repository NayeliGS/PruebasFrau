import { Navbar } from "../components/Designers-v2/Shared/Navbar";
import { Footer } from "../components/Designers-v2/Shared/Footer";
import { AccessibilityMenu } from "../components/Designers-v2/Shared/AccessibilityMenu";


import { HeroPlans } from "../components/Designers-v2/Plans/HeroPlans"; 

export const PlansV2 = () => {
  return (
    <div className="min-h-screen bg-[#0B0E12] text-[#F9F9F9] flex flex-col font-sans relative overflow-hidden transform-gpu">
      
      <Navbar />

      <main className="flex-grow flex flex-col items-center w-full relative z-10 px-0 lg:px-6 pb-20 gap-32">
        
        <HeroPlans />
        
        <AccessibilityMenu />
      </main>

      <Footer />
      
    </div>
  );
};