import { useTranslation } from 'react-i18next';

export const PilotCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center py-16 px-6 font-sans">
      <div 
        className="w-full max-w-[1300px] relative overflow-hidden rounded-[2.5rem] border border-white/5 py-24 px-6 md:px-12 flex flex-col items-center text-center shadow-2xl"
        style={{
          backgroundColor: '#121212',
          backgroundImage: 'linear-gradient(45deg,rgba(18, 18, 18, 0.9) 7%, rgba(33, 62, 70, 1) 22%, rgba(30, 133, 120, 1) 69%, rgba(18, 18, 18, 1) 100%)'
        }}
      >
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          
          <h2 className="text-[48px] font-semibold leading-[56px] tracking-[-0.015em] text-[#FFFFFF] mb-6">
            {t('pilotCta.title')}
          </h2>
          
          <p className="text-lg font-medium leading-7 text-[#FFFFFF] mb-16 max-w-3xl">
            {t('pilotCta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="w-[174px] h-[48px] flex items-center justify-center rounded-lg bg-[#10F5C4] text-[#050709] text-lg font-semibold hover:bg-[#10F5C4]/90 transition-transform hover:scale-105">
              {t('pilotCta.buttonPilot')}
            </button>
            <button className="w-auto px-8 h-[48px] flex items-center justify-center rounded-lg bg-transparent border border-white text-white text-lg font-semibold hover:bg-white/10 transition-colors whitespace-nowrap">
              {t('pilotCta.buttonSales')}
            </button>
          </div>

          <p className="text-lg font-medium leading-7 text-[#A1A8B0]">
            {t('pilotCta.disclaimer')}
          </p>
          
        </div>
      </div>
    </section>
  );
};