import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import FraudEGBackground from "./FraudEGBackground";

export const HeroSolutions = () => {
  const { t } = useTranslation();
  
  const [activeTab, setActiveTab] = useState("tracker");

  const modules = [
    { id: "tracker", label: t("hero.tab1") },
    { id: "inspector", label: t("hero.tab2") },
    { id: "monitor", label: t("hero.tab3") },
    { id: "intelligence", label: t("hero.tab4") },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } 
    );

    const sectionIds = ["tracker", "inspector", "monitor", "intelligence"];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const subtitleText = t("hero.subtitle").trim();

  return (
    <section className="relative w-full flex flex-col items-center font-sans bg-[#0B0E12] pb-1 px-6 overflow-hidden transform-gpu">
      <div className="absolute top-[20%] -left-[20%] w-[100px] lg:w-[400px] h-[400px] bg-[#10F5C4]/15 blur-[150px] rounded-[100%] pointer-events-none z-0"></div>
      
      <div className="absolute top-[20%] -right-[20%] w-[100px] lg:w-[400px] h-[400px] bg-[#10F5C4]/15 blur-[150px] rounded-[100%] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center w-full">
        
        <p className="w-full max-w-2xl text-[#10F5C4] text-center text-[18px] font-medium leading-[28px] tracking-[0%] mt-32 mb-6 ">
          {t("hero.animationText")}
        </p>

        <div className="w-full max-w-4xl h-[200px] flex items-center justify-center overflow-hidden transform-gpu relative rounded-2xl mb-14">
          <FraudEGBackground />
        </div>

        <p className="w-full max-w-3xl text-[#ededed] text-center text-[clamp(15px,2vw,19px)] font-medium leading-[28px] tracking-[0%] mb-14 drop-shadow-md">
          {subtitleText}
        </p>

        <div className="w-full max-w-4xl h-[4px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-19"></div>
        
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-12 mb-8 relative z-10 text-center">
             <p className="text-[#ededed] text-[18px] font-medium leading-[28px] tracking-[0%] mb-6 max-w-3xl drop-shadow-md">
              {t("hero.topText1")}
            </p>
        </div>
        
        <div className="sticky top-20 z-[60] w-full max-w-[850px] mx-auto flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center rounded-2xl shadow-2xl px-4 py-3 border-none bg-[#050709]/80 backdrop-blur-md">
          {modules.map((mod) => (
            <a
              href={`#${mod.id}`}
              key={mod.id}
              onClick={() => setActiveTab(mod.id)}
              className={`shrink-0 w-full md:w-auto px-6 h-[48px] flex items-center justify-center rounded-lg text-[18px] font-semibold leading-[24px] tracking-[0%] whitespace-nowrap transition-all duration-300 scroll-smooth border-none outline-none ${
                activeTab === mod.id 
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