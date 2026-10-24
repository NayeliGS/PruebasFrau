import { Navbar } from "../components/Designers-v2/Shared/Navbar";
import { HeroSolutions } from "../components/Designers-v2/Solutions/HeroSolutions";
import { Footer } from "../components/Designers-v2/Shared/Footer";
import { TypographyCatalog } from "../components/Designers-v2/FontsPrueba/TypographyCatalog";


export const PruebaFonts = () => {
  return (
    <div className=" bg-[#050709] text-[#F9F9F9] flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
       
        <TypographyCatalog />
      </main>
      <Footer />
    </div>
  );
};
