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
    <section className="w-full flex flex-col items-center font-sans bg-[#0B0E12] relative pb-16 px-6">
      <p className="w-full max-w-3xl text-[#10F5C4] text-center text-[18px] font-medium leading-[28px] tracking-[0%] mb-12">
        {t("hero.animationText")}
      </p>

      <div className="w-full max-w-[600px] h-[360px] flex items-center justify-center mb-10 overflow-hidden relative rounded-2xl">
        <FraudEGBackground />
      </div>

      <p className="w-full max-w-3xl text-[#A1A8B0] text-center text-[32px] font-medium leading-[28px] tracking-[0%] mb-8">
        {t("hero.controlText")}
      </p>

      <p className="w-full max-w-3xl text-[#A1A8B0] text-center text-[18px] font-medium leading-[28px] tracking-[0%] mb-12">
        {subtitleText}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <button className="w-[274px] h-[48px] bg-[#10F5C4] rounded-lg text-[#10151B] text-[18px] font-semibold leading-[24px] tracking-[0%] flex items-center justify-center transition-colors hover:bg-[#10F5C4]/90">
          {t("hero.btnPrimary")}
        </button>
        <button className="w-[230px] h-[48px] border border-[#F9F9F9] rounded-lg text-[#F9F9F9] text-[18px] font-semibold leading-[24px] tracking-[0%] flex items-center justify-center transition-colors hover:bg-white/10">
          {t("hero.btnSecondary")}
        </button>
      </div>

      <p className="w-full max-w-3xl text-[#A1A8B0] text-center text-[18px] font-medium leading-[28px] tracking-[0%] mb-12">
        {t("hero.pilotDisclaimer")}
      </p>

      <div className="w-full max-w-4xl h-[4px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-16"></div>

      <p className="w-full max-w-3xl text-[#A1A8B0] text-center text-[18px] font-medium leading-[28px] tracking-[0%] mb-12">
        {t("hero.topText1")}
        <br />
        {t("hero.topText2")}
      </p>

      <div className="sticky top-4 z-50 w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-2 md:gap-4 items-center rounded-2xl shadow-2xl px-4 py-3 border-none bg-[#050709]/80 backdrop-blur-md">
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
    </section>
  );
};
