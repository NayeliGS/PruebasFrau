import { useTranslation } from 'react-i18next';

export const PartnersAbout = () => {
  const { t } = useTranslation();

  const partners = [
    {
      id: 1,
      nameKey: 'about.partners.partner1.name',
      descKey: 'about.partners.partner1.desc',
      imgSrc: '/designersV2/AboutUs/Aliados1.jpg',
      linkedin: 'https://www.linkedin.com/company/startup-finance-partner/' 
    },
    {
      id: 2,
      nameKey: 'about.partners.partner2.name',
      descKey: 'about.partners.partner2.desc',
      imgSrc: '/designersV2/AboutUs/Aliados2.webp',
      linkedin: 'https://www.linkedin.com/company/dentons-cadenas-cadenas/'
    },
    {
      id: 3,
      nameKey: 'about.partners.partner3.name',
      descKey: 'about.partners.partner3.desc',
      imgSrc: '/designersV2/AboutUs/Aliados3.webp',
      linkedin: 'https://www.linkedin.com/school/the-founder-institute/'
    },
  ];

  return (
    <section className="relative w-full px-6 overflow-hidden transform-gpu z-10">
      
      <div className="absolute top-[55%] left-[-22%] -translate-y-[85%] w-[400px] md:w-[300px] h-[300px] bg-[#10F5C4]/25 blur-[380px] rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/3 flex flex-col items-start text-left mt-0 lg:mt-10">
          <h2 className="font-semibold text-[clamp(32px,4vw,40px)] leading-[1.2] tracking-[-0.015em] text-[#FFFFFF] mb-6 whitespace-pre-line">
            {t('about.partners.title')}
          </h2>
          <p className="font-medium text-[clamp(20px,2.5vw,28px)] leading-[1.2] tracking-[-0.02em] text-[#F9F9F9] whitespace-pre-line">
            {t('about.partners.subtitle')}
          </p>
        </div>

        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {partners.map((partner) => (
            <div key={partner.id} className="flex flex-col w-full group items-start">
              <div className="w-full h-[200px] bg-[#EAF2ED] rounded-2xl flex items-center justify-center p-8 mb-6 transition-transform duration-300 group-hover:scale-[1.02] shadow-lg">
                <img 
                  src={partner.imgSrc} 
                  alt={t(partner.nameKey)} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-[#F9F9F9] font-bold text-[clamp(16px,2vw,18px)] leading-[1.4] mb-2">
                {t(partner.nameKey)}
              </h3>
              
              <p className="text-[#A1A8B0] font-normal text-[clamp(16px,1.5vw,16px)] leading-[1.6] mb-3">
                {t(partner.descKey)}
              </p>
              
              <a 
                href={partner.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#10151B] text-white hover:bg-[#0A66C2] hover:scale-110 transition-all transform-gpu shadow-md mt-auto" 
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};