import { useTranslation } from 'react-i18next';

export const PilotCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex justify-center py-16 px-6 font-sans">
      <div 
        className="w-full max-w-[1300px] relative overflow-hidden rounded-[2.5rem] py-24 px-6 md:px-12 flex flex-col items-center shadow-2xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/CTA Section.png')"
        }}
      >
        <div className="relative z-10 w-full max-w-5xl flex flex-col items-center">
          
          {/* Contenedor individual para el Título */}
          <div className="w-full flex justify-center mb-6">
            <h2 className="text-[48px] font-semibold leading-[56px] tracking-[-0.015em] text-[#FFFFFF] font-sans text-center">
              {t('pilotCta.title')}
            </h2>
          </div>
          
          {/* Contenedor individual para la PRIMERA oración del Subtítulo */}
          <div className="w-full flex justify-center">
            <p className="text-[18px] font-medium leading-[28px] tracking-normal text-[#FFFFFF] font-sans text-center">
              {t('pilotCta.subtitle1')}
            </p>
          </div>

          {/* Contenedor individual para la SEGUNDA oración del Subtítulo */}
          <div className="w-full flex justify-center mb-16">
            <p className="text-[18px] font-medium leading-[28px] tracking-normal text-[#FFFFFF] font-sans text-center">
              {t('pilotCta.subtitle2')}
            </p>
          </div>

          {/* Contenedor individual para los Botones */}
          <div className="w-full flex justify-center mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="w-[174px] h-[48px] flex items-center justify-center rounded-lg bg-[#10F5C4] text-[#10151B] text-[18px] font-semibold leading-[24px] tracking-normal hover:bg-[#10F5C4]/90 transition-transform hover:scale-105 font-sans">
                {t('pilotCta.buttonPilot')}
              </button>
              <button className="w-[230px] h-[48px] flex items-center justify-center rounded-lg bg-transparent border border-[#F9F9F9] text-[#F9F9F9] text-[18px] font-semibold leading-[24px] tracking-normal hover:bg-white/10 transition-colors whitespace-nowrap font-sans">
                {t('pilotCta.buttonSales')}
              </button>
            </div>
          </div>

          {/* Contenedor individual para el Disclaimer */}
          <div className="w-full flex justify-center">
            <p className="text-[18px] font-medium leading-[28px] tracking-normal text-[#A1A8B0] font-sans text-center">
              {t('pilotCta.disclaimer')}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};