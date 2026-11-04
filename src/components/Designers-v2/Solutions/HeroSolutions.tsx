import { useTranslation } from "react-i18next";
import FraudEGBackground from "./FraudEGBackground";

export const HeroSolutions = () => {
  const { t } = useTranslation();

  const modules = [
    { id: "tracker", label: t("hero.tab1"), isActive: true },
    { id: "inspector", label: t("hero.tab2"), isActive: false },
    { id: "monitor", label: t("hero.tab3"), isActive: false },
    { id: "intelligence", label: t("hero.tab4"), isActive: false },
  ];

  const subtitleText = t("hero.subtitle").trim();

  return (
    <section className="relative w-full flex flex-col items-center font-sans bg-[#0B0E12] pb-1 px-6 overflow-visible transform-gpu">
      
      {/* ========================================================= */}
      {/* CAPA DE LUCES LATERALES (Emanan desde los costados) */}
      {/* ========================================================= */}
      {/* Luz Izquierda */}
      <div className="absolute top-[20%] -left-[20%] w-[100px] lg:w-[400px] h-[400px] bg-[#10F5C4]/15 blur-[150px] rounded-[100%] pointer-events-none z-0"></div>
      
      {/* Luz Derecha */}
      <div className="absolute top-[20%] -right-[20%] w-[100px] lg:w-[400px] h-[400px] bg-[#10F5C4]/15 blur-[150px] rounded-[100%] pointer-events-none z-0"></div>

      {/* ========================================================= */}
      {/* CONTENIDO PRINCIPAL (Texto y Animación en la capa superior) */}
      {/* ========================================================= */}
      <div className="relative z-10 flex flex-col items-center w-full">
        
        <p className="w-full max-w-2xl text-[#10F5C4] text-center text-[18px] font-medium leading-[28px] tracking-[0%] mt-32 mb-6 ">
          {t("hero.animationText")}
        </p>

        {/* Contenedor de la animación (restaurado) */}
        <div className="w-full max-w-4xl h-[200px] flex items-center justify-center overflow-hidden transform-gpu relative rounded-2xl mb-14">
          <FraudEGBackground />
        </div>

        <p className="w-full max-w-3xl text-[#b8b9ba] text-center text-[clamp(15px,2vw,17px)] font-medium leading-[28px] tracking-[0%] mb-14 drop-shadow-md">
          {subtitleText}
        </p>

        <div className="w-full max-w-4xl h-[4px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-19"></div>

        {/* Sección de textos adicionales */}
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 mb-8 relative z-10 text-center">
             <p className="text-[#A1A8B0] text-[18px] font-medium leading-[28px] tracking-[0%] mb-6 max-w-3xl drop-shadow-md">
              {t("hero.topText1")}
            </p>
        </div>

        {/* 
          Pestañas de navegación modificadas para Stacking Sticky:
          - sticky top-16 (ancla justo debajo de la barra de navegación original, ajusta el valor en rem si la navbar tiene otra altura)
          - z-40 o z-50 para priorizar
        */}
        <div className="sticky top-20 z-[60] w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center rounded-2xl shadow-2xl px-4 py-3 border-none bg-[#050709]/80 backdrop-blur-md">
          {modules.map((mod) => (
            <a
              href={`#${mod.id}`}
              key={mod.id}
              className={`shrink-0 w-full md:w-auto px-6 h-[48px] flex items-center justify-center rounded-lg text-[18px] font-semibold leading-[24px] tracking-[0%] whitespace-nowrap transition-all duration-300 scroll-smooth border-none outline-none ${
                mod.isActive
                  ? "bg-[#10F5C4] text-[#050709] shadow-[0_0_20px_rgba(16,245,196,0.15)]"
                  : "bg-transparent text-gray-400 hover:text-[#F9F9F9] hover:bg-white/5"
              }`}
            >
              {mod.label}
            </a>
          ))}
        </div>
        
      </div>
    </section>
  );
};