import { Navbar } from "../components/Designers-v2/Shared/Navbar";
import { Footer } from "../components/Designers-v2/Shared/Footer";
import { AccessibilityMenu } from "../components/Designers-v2/Shared/AccessibilityMenu";


import { HeroHomeScan } from '../components/Designers-v2/Home/HeroHomeScan';
import { HeroHomeRadar } from '../components/Designers-v2/Home/HeroHomeRadar';
import { HeroHomeAuro } from '../components/Designers-v2/Home/HeroHomeAuro';
import { HomePlatform } from "../components/Designers-v2/Home/HomePlatform";



export const HomeV2 = () => {
  return (
    <div className="min-h-screen bg-[#0B0E12] text-[#F9F9F9] flex flex-col font-sans relative">
      <Navbar />

      {/* LA SOLUCIÓN: Usamos un main limpio, sin 'gap-32' ni 'py-20' */}
      <main className="flex-grow flex flex-col w-full">
        <AccessibilityMenu />
        <HeroHomeAuro />
        <HeroHomeRadar />
        <HeroHomeScan />
        <HomePlatform />
      
        
      

        
        
      </main>

      <Footer />
    </div>
  );
};