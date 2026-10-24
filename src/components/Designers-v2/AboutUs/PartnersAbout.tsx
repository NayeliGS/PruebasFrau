import { useTranslation } from 'react-i18next';

export const PartnersAbout = () => {
  const { t } = useTranslation();

  const partners = [
    {
      id: 1,
      nameKey: 'about.partners.partner1.name',
      descKey: 'about.partners.partner1.desc',
      imgSrc: '/designersV2/AboutUs_Aliados1.png'
    },
    {
      id: 2,
      nameKey: 'about.partners.partner2.name',
      descKey: 'about.partners.partner2.desc',
      imgSrc: '/designersV2/AboutUs_Aliados2.png'
    },
    {
      id: 3,
      nameKey: 'about.partners.partner3.name',
      descKey: 'about.partners.partner3.desc',
      imgSrc: '/designersV2/AboutUs_Aliados3.png'
    },
    {
      id: 4,
      nameKey: 'about.partners.partner4.name',
      descKey: 'about.partners.partner4.desc',
      imgSrc: '/designersV2/AboutUs_Aliados4.png'
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 overflow-hidden z-10">
      
      {/* CAPA DE LUZ: Degradado verde intenso alineado a la izquierda */}
      <div className="absolute top-1/2 left-[-15%] -translate-y-1/2 w-[500px] md:w-[700px] h-[800px] bg-[#10F5C4]/25 blur-[160px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
        
        {/* COLUMNA IZQUIERDA: Textos */}
        <div className="w-full lg:w-1/3 flex flex-col items-start text-left mt-0 lg:mt-10">
          <h2 className="font-semibold text-[40px] md:text-[48px] leading-[48px] md:leading-[56px] tracking-[-0.015em] text-[#FFFFFF] mb-6 whitespace-pre-line">
            {t('about.partners.title')}
          </h2>
          <p className="font-medium text-[20px] md:text-[24px] leading-[32px] md:leading-[34px] tracking-[-0.01em] text-[#F9F9F9] whitespace-pre-line">
            {t('about.partners.subtitle')}
          </p>
        </div>

        {/* COLUMNA DERECHA: Cuadrícula de Aliados */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col w-full group">
              
              {/* Contenedor de la Imagen (Caja clara) */}
              <div className="w-full h-[200px] bg-[#EAF2ED] rounded-2xl flex items-center justify-center p-8 mb-6 transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img 
                  src={partner.imgSrc} 
                  alt={t(partner.nameKey)} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
              {/* Textos descriptivos */}
              <h3 className="text-[#F9F9F9] font-bold text-[18px] leading-[28px] mb-2">
                {t(partner.nameKey)}
              </h3>
              <p className="text-[#A1A8B0] font-normal text-[14px] leading-[22px]">
                {t(partner.descKey)}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};