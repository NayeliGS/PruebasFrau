import { Navbar } from '../components/landing/Navbar';
import { HeroSolutions } from '../components/landing/HeroSolutions';
import { PilotCTA } from '../components/landing/PilotCTA';
import { Footer } from '../components/landing/Footer';
import { AccessibilityMenu } from '../components/AccessibilityMenu';
import { SolutionsCatalog1 } from '../components/landing/SolutionsCatalog1';


export const Solutions = () => {
  return (
    <div className=" bg-[#050709] text-[#F9F9F9] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <HeroSolutions />
       
        <SolutionsCatalog1 />
        <PilotCTA />
        <AccessibilityMenu />
        
      </main>
      <Footer />
    </div>
  );
};