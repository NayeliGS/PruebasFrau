import { Navbar } from "../components/Designers-v2/Shared/Navbar";
import { Footer } from "../components/Designers-v2/Shared/Footer";
import { AccessibilityMenu } from "../components/Designers-v2/Shared/AccessibilityMenu";
// Importamos nuestro nuevo componente modular
import { HeroAbout } from "../components/Designers-v2/AboutUs/HeroAbout";

export const AboutUsV2 = () => {
  return (
    <div className="min-h-screen bg-[#0B0E12] text-[#F9F9F9] flex flex-col font-sans relative overflow-hidden">
      
      <Navbar />
      
      {/* CAPA DE LUCES DE FONDO (Degradado verde neón general de la página) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10F5C4]/15 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <main className="flex-grow flex flex-col items-center w-full relative z-10 px-6 py-20 gap-32">
        
        {/* Aquí inyectamos el primer bloque */}
        <HeroAbout />
        
        {/* Aquí irán los siguientes componentes (ej. Misión, Equipo, Valores) */}

        <AccessibilityMenu />
      </main>

      <Footer />
    </div>
  );
};