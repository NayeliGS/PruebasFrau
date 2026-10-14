import { Navbar } from '../components/landing/Navbar';
import { HeroSolutions } from '../components/landing/HeroSolutions';
import { SolutionsCatalog } from '../components/landing/SolutionsCatalog';
import { PilotCTA } from '../components/landing/PilotCTA';
import { Footer } from '../components/landing/Footer';

export const Solutions = () => {
  return (
    <div className="min-h-screen bg-[#050709] text-[#F9F9F9] flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      <main className="flex-grow flex flex-col items-center w-full">
        <HeroSolutions />
        <SolutionsCatalog />
        {/* Renderizamos las tarjetas directamente */}
        <PilotCTA />
      </main>
      <Footer />
    </div>
  );
};