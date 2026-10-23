import { Navbar } from "../components/Designers-v2/Shared/Navbar";
import { HeroSolutions } from "../components/Designers-v2/Solutions/HeroSolutions";
import { PilotCTA } from "../components/Designers-v2/Shared/PilotCTA";
import { Footer } from "../components/Designers-v2/Shared/Footer";
import { AccessibilityMenu } from "../components/Designers-v2/Shared/AccessibilityMenu";
import { SolutionsCatalog1 } from "../components/Designers-v2/Solutions/SolutionsCatalog1";

export const SolutionsV2 = () => {
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
