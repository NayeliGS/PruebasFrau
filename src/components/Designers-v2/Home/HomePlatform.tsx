import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export const HomePlatform = () => {
  const { t } = useTranslation();
  
  const [isCardVisible, setIsCardVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCardVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <section className="relative w-full bg-[#0B0E12] py-20 flex flex-col items-center overflow-hidden">
      
      {/* Luz de Fondo */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#10F5C4]/5 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
        
        {/* ================= PARTE 1: EL VIDEO ================= */}
        <div className="w-full aspect-video md:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-[#050709] relative mb-24 flex items-center justify-center">
          <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
            <source src="/designersV2/videos/fraudeg-intro.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E12]/80 via-transparent to-transparent pointer-events-none"></div>
        </div>

        {/* ================= PARTE 2: CARRUSEL ================= */}
        <div className="w-full flex flex-col items-center mb-32">
          <p className="text-[#F9F9F9] font-medium text-[16px] md:text-[18px] mb-10 text-center">
            {t('home.platform.trustedBy')}
          </p>
          <div className="w-full overflow-hidden relative flex items-center h-16">
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0B0E12] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0B0E12] to-transparent z-10 pointer-events-none"></div>
            <div className="flex w-max animate-marquee gap-16 items-center">
              {[1, 2].map((group) => (
                <div key={group} className="flex gap-16 items-center shrink-0">
                  {[...Array(6)].map((_, i) => (
                    <img key={i} src="/LogoFraudeg.svg" alt="Company Logo" className="h-6 md:h-8 w-auto shrink-0 object-contain opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= PARTE 3: CARD CON COLORES ANTIGUOS ================= */}
        <div 
          ref={cardRef}
          className={`w-full max-w-5xl mx-auto rounded-[2rem] p-10 md:p-14 flex flex-col lg:flex-row gap-10 md:gap-20 transition-colors duration-[3500ms] ease-in-out border shadow-2xl ${
            isCardVisible 
              ? 'bg-[#0B3A36] text-white border-[#0B3A36]' 
              : 'bg-[#EBF3F0] text-[#141A21] border-[#EBF3F0]' 
          }`}
        >
          {/* Lado Izquierdo (Texto y Botón) */}
          <div className="flex-1 flex flex-col justify-between items-start">
            <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-[1.3] tracking-[-0.01em] mb-12">
              {t('home.platform.cardDesc')}
            </h3>
            <button
              className={`px-6 py-3 rounded-lg text-[16px] font-semibold flex items-center gap-2 transition-colors duration-[3500ms] shadow-md ${
                isCardVisible
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-[#141A21] text-white hover:bg-gray-800'
              }`}
            >
              {t('home.platform.cardBtn')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Lado Derecho (Estadísticas Centradas con Separadores) */}
          <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
            {['stat1', 'stat2', 'stat3'].map((stat, i) => (
              <div key={stat} className="w-full">
                <div className="text-center py-4 w-full">
                  <h4 className={`text-[32px] md:text-[40px] font-bold transition-colors duration-[3500ms] mb-1 tracking-tight font-mono ${isCardVisible ? 'text-[#10F5C4]' : 'text-[#065F4C]'}`}>
                    {t(`home.platform.${stat}Value`)}
                  </h4>
                  <p className={`text-[15px] md:text-[16px] transition-colors duration-[3500ms] font-medium ${isCardVisible ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t(`home.platform.${stat}Label`)}
                  </p>
                </div>
                {i !== 2 && (
                  <hr className={`w-full border-t transition-colors duration-[3500ms] ${isCardVisible ? 'border-white/10' : 'border-gray-300'}`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ================= PARTE 4: BENTO BOX ================= */}
        <div className="w-full mt-40 flex flex-col">
          
          <div className="flex flex-col items-start mb-12">
            <span className="text-[#10F5C4] text-sm font-semibold tracking-widest flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></span> {t('home.platform.bentoSectionSub')}
            </span>
            <h2 className="text-white font-medium text-[36px] md:text-[48px] leading-[1.1] tracking-[-0.01em] whitespace-pre-line">
              {t('home.platform.bentoSectionTitle')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full">
            
            <div className="md:col-span-3 bg-[#10151B] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col">
              {/* Degradado restaurado */}
              <div className="h-[220px] w-full bg-gradient-to-br from-[#A5C8F7] to-[#7B9FE9]"></div>
              <div className="p-8 flex flex-col items-start flex-grow">
                <span className="text-xs font-semibold text-[#10F5C4] uppercase flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></span> {t('home.platform.bentoTag1')}
                </span>
                <h3 className="text-white text-[24px] font-semibold mb-3">{t('home.platform.bentoTitle1')}</h3>
                <p className="text-[#A1A8B0] text-[15px] leading-relaxed mb-8 flex-grow">{t('home.platform.bentoDesc1')}</p>
                <button className="px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                  {t('home.platform.bentoBtn1')}
                </button>
              </div>
            </div>

            <div className="md:col-span-3 bg-[#10151B] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col">
              {/* Degradado restaurado */}
              <div className="h-[220px] w-full bg-gradient-to-br from-[#9BE69A] to-[#4595E7]"></div>
              <div className="p-8 flex flex-col items-start flex-grow">
                <span className="text-xs font-semibold text-[#10F5C4] uppercase flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></span> {t('home.platform.bentoTag2')}
                </span>
                <h3 className="text-white text-[24px] font-semibold mb-3">{t('home.platform.bentoTitle2')}</h3>
                <p className="text-[#A1A8B0] text-[15px] leading-relaxed mb-8 flex-grow">{t('home.platform.bentoDesc2')}</p>
                <button className="px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                  {t('home.platform.bentoBtn2')}
                </button>
              </div>
            </div>

            <div className="md:col-span-4 bg-[#10151B] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col">
              {/* Degradado restaurado */}
              <div className="h-[220px] w-full bg-gradient-to-br from-[#6CF4F5] to-[#2563EB]"></div>
              <div className="p-8 flex flex-col items-start flex-grow">
                <span className="text-xs font-semibold text-[#10F5C4] uppercase flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></span> {t('home.platform.bentoTag3')}
                </span>
                <h3 className="text-white text-[24px] font-semibold mb-3">{t('home.platform.bentoTitle3')}</h3>
                <p className="text-[#A1A8B0] text-[15px] leading-relaxed mb-8 flex-grow">{t('home.platform.bentoDesc3')}</p>
                <button className="px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                  {t('home.platform.bentoBtn3')}
                </button>
              </div>
            </div>

            <div className="md:col-span-2 bg-[#10151B] border border-white/5 rounded-[2rem] overflow-hidden flex flex-col">
              {/* Degradado restaurado */}
              <div className="h-[220px] w-full bg-gradient-to-br from-[#77C1F2] to-[#214CCB]"></div>
              <div className="p-8 flex flex-col items-start flex-grow">
                <span className="text-xs font-semibold text-[#10F5C4] uppercase flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></span> {t('home.platform.bentoTag4')}
                </span>
                <h3 className="text-white text-[24px] font-semibold mb-3">{t('home.platform.bentoTitle4')}</h3>
                <p className="text-[#A1A8B0] text-[15px] leading-relaxed mb-8 flex-grow">{t('home.platform.bentoDesc4')}</p>
                <button className="px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm font-medium hover:bg-white/10 transition-colors">
                  {t('home.platform.bentoBtn4')}
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};