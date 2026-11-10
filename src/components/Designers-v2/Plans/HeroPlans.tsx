import { useTranslation } from 'react-i18next';

export const HeroPlans = () => {
  const { t } = useTranslation();
  const tiers = ['essential', 'growth', 'pro', 'scale', 'enterprise'];
  const productColors = ['bg-[#10F5C4]', 'bg-orange-400', 'bg-pink-500', 'bg-blue-400'];

  return (
    <section className="relative w-full flex flex-col items-center pt-32 pb-16 px-6 font-sans ">
      
      {/* 1. FONDO DEGRADADO V0 (CORRECCIÓN DE BORDES: 'scale-[1.2]' expande el fondo fuera de los bordes para que no se vea el corte, y 'translate3d' arregla el bug de renderizado) */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none scale-[1.2]"
        style={{
          background: `
            radial-gradient(ellipse 50% 50% at 42% 58%, rgba(0, 111, 255, 0.15) 0%, rgba(0, 111, 255, 0.05) 40%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 61% 61%, rgba(0, 225, 198, 0.12) 0%, rgba(0, 170, 160, 0.08) 30%, transparent 75%),
            radial-gradient(ellipse 55% 40% at 100% 62%, rgba(0, 125, 125, 0.10) 0%, transparent 70%),
            linear-gradient(180deg, #071115 0%, #0b1b20 58%, #080c12 100%)
          `,
          transform: 'translate3d(0, 0, 0)' // Hack para forzar el renderizado correcto del blur en Safari/Chrome
        }}
      ></div>

      {/* 2. MALLA GRISÁCEA / RUIDO PARA MATEAR EL BRILLO */}
      <div className="absolute w-40 inset-0 z-[1] pointer-events-none opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay"></div>
      
      {/* Difuminado inferior */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-[#0B0E12]"></div>

      {/* Contenedor de contenido protegido por z-10 */}
      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Encabezado de la sección */}
        <div className="flex flex-col items-center w-full max-w-4xl text-center mb-16">
          <h1 className="text-white font-semibold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.01em] mb-6">
            {t('plans.heroTitle')} <span className="text-[#10F5C4]">{t('plans.heroPrice')}</span>
          </h1>
          <p className="text-[#A1A8B0] text-[18px] md:text-[20px] font-medium leading-[28px] max-w-2xl">
            {t('plans.heroSubtitle')}
          </p>
        </div>

        {/* Contenedor de las Tarjetas */}
        <div className="w-full max-w-[1400px] flex flex-col xl:grid xl:grid-cols-5 gap-6 pb-8">
          {tiers.map((tierKey) => {
            const isPro = tierKey === 'pro';

            return (
              <div 
                key={tierKey} 
                className={`flex flex-col w-full p-8 rounded-[2rem] transition-transform hover:-translate-y-2 border ${
                  isPro 
                    ? 'bg-[#10151B]/95 border-[#10F5C4]/30 shadow-[0_0_30px_rgba(16,245,196,0.05)]' 
                    : 'bg-[#10151B]/95 border-white/5 hover:border-white/10'
                }`}
              >
                <h3 className="text-white text-[24px] font-bold mb-3">
                  {t(`plans.${tierKey}.name`)}
                </h3>
                <p className="text-[#A1A8B0] text-[14px] leading-[22px] min-h-[66px] mb-6">
                  {t(`plans.${tierKey}.desc`)}
                </p>
                
                {/* Capacidad */}
                <div className="text-white font-semibold text-[16px] leading-[24px] mb-6 whitespace-pre-line min-h-[48px]">
                  {t(`plans.${tierKey}.capacity`)}
                </div>

                {/* Línea divisoria degradada */}
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#10F5C4] to-transparent opacity-60 mb-6"></div>

                {/* Etiqueta separadora */}
                <span className="text-[#475467] text-[12px] uppercase tracking-widest font-semibold mb-6 block">
                  {t('plans.solutionsLabel')}
                </span>

                {/* Lista de Soluciones Principales */}
                <ul className="flex flex-col gap-4 mb-8">
                  {(t(`plans.${tierKey}.coreFeatures`, { returnObjects: true }) as string[]).map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-white text-[14px] font-medium">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${productColors[i % productColors.length]}`}></span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {/* Lista de Funciones Extra */}
                <ul className="flex flex-col gap-4 mt-auto pt-4">
                  {(t(`plans.${tierKey}.extraFeatures`, { returnObjects: true }) as string[]).map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#10F5C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#A1A8B0] text-[14px] leading-[22px]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};