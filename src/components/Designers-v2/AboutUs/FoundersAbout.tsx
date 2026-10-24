import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const FoundersAbout = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<number | null>(null);

  const founders = [
    {
      id: 1,
      nameKey: 'about.founders.marlon.name',
      roleKey: 'about.founders.marlon.role',
      descKey: 'about.founders.marlon.desc',
      imgSrc: '/designersV2/Marlon.png',
      linkedin: '#'
    },
    {
      id: 2,
      nameKey: 'about.founders.juan.name',
      roleKey: 'about.founders.juan.role',
      descKey: 'about.founders.juan.desc',
      imgSrc: '/designersV2/Juan.png',
      linkedin: '#'
    },
    {
      id: 3,
      nameKey: 'about.founders.christian.name',
      roleKey: 'about.founders.christian.role',
      descKey: 'about.founders.christian.desc',
      imgSrc: '/designersV2/Christian.png',
      linkedin: '#'
    }
  ];

  return (
    <section className="relative w-full bg-[#0B0E12] font-sans  pb-4 px-6 overflow-hidden">
      
      {/* Fondo con la imagen de puntos */}
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-no-repeat"
        style={{ 
          backgroundImage: "url('/designersV2/FondoWe.png')",
          backgroundPosition: "center -1000px" 
        }}
      ></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* --- SECCIÓN 1: FUNDADORES --- */}
        <h2 className="text-[#F9F9F9] text-center font-semibold text-[32px] md:text-[40px] leading-[48px] tracking-[-0.01em] mb-28 max-w-2xl">
          {t('about.founders.title')}
        </h2>

        {/* Tarjetas interactivas de los fundadores */}
        <div className="w-full flex flex-col lg:flex-row gap-6 h-auto lg:h-[550px] mb-32">
          {founders.map((founder) => {
            const isHovered = hovered === founder.id;
            const isAnyHovered = hovered !== null;

            return (
              <div
                key={founder.id}
                onMouseEnter={() => setHovered(founder.id)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-[2rem] overflow-hidden cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isHovered 
                    ? 'lg:flex-[1.5]' 
                    : isAnyHovered 
                      ? 'lg:flex-[0.98]' 
                      : 'lg:flex-1'
                } h-[430px] lg:h-full group border border-white/10`}
              >
                <img 
                  src={founder.imgSrc} 
                  alt={t(founder.nameKey)}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[700ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#023126] via-[#023126]/60 to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col justify-end">
                  <span className="text-[#10F5C4] font-medium text-[14px] leading-[20px] mb-1">
                    {t(founder.roleKey)}
                  </span>
                  
                  <span className="text-[#FFFFFF] font-bold text-[28px] md:text-[32px] leading-tight">
                    {t(founder.nameKey)}
                  </span>

                  <div 
                    className={`grid transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${
                      isHovered ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[#F9F9F9] font-medium text-[14px] md:text-[15px] leading-relaxed mb-6">
                        {t(founder.descKey)}
                      </p>
                      
                      <a 
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#10F5C4] text-[#10151B] hover:bg-white hover:scale-110 transition-all"
                        aria-label="LinkedIn"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- SECCIÓN 2: NUESTRO EQUIPO --- */}
        <h3 className="text-[#F9F9F9] text-center font-semibold text-[32px] md:text-[40px] leading-[48px] tracking-[-0.01em] mb-6">
          {t('about.team.title')}
        </h3>

        {/* Grilla dinámica de 5 columnas en PC, 3 en tablet y 2 en móvil */}
        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-6 gap-y-16 gap-x-28">
          {(t('about.team.members', { returnObjects: true }) as Array<{name: string, role: string}>).map((member, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-5 border border-white/10 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:border-[#10F5C4]/50">
                <img 
                  src="/designersV2/AboutUs_Team.png" 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              <span className="text-[#F9F9F9] font-bold text-lg leading-tight mb-1">{member.name}</span>
              <span className="text-[#E6FF5B] font-medium text-sm">{member.role}</span>
              
            </div>
          ))}
        </div>

        {/* --- SECCIÓN 3: BOARD OF ADVISORS --- */}
        <div className="w-full bg-[#EAF2ED] rounded-[3rem] mt-37 p-10 md:p-30 flex flex-col items-center">
          
          <h3 className="text-[#10151B] text-center font-bold text-[36px] md:text-[44px] leading-tight tracking-[-0.01em] mb-2">
            {t('about.advisors.title')}
          </h3>
          <p className="text-[#475467] text-center font-medium text-[16px] md:text-[18px] max-w-2xl leading-relaxed mb-14">
            {t('about.advisors.subtitle')}
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            
            {/* Advisor 1: Carlos */}
            <div className="flex flex-col w-full">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src="/designersV2/AboutUS_Advisors1.png" 
                  alt={t('about.advisors.carlos.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[#10151B] font-bold text-[24px] mb-3">
                {t('about.advisors.carlos.name')}
              </h4>
              <p className="text-[#475467] font-medium text-[14px] leading-[22px]">
                {t('about.advisors.carlos.desc')}
              </p>
            </div>

            {/* Advisor 2: Emily */}
            <div className="flex flex-col w-full">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img 
                  src="/designersV2/AboutUS_Advisors2.png" 
                  alt={t('about.advisors.emily.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[#10151B] font-bold text-[24px] mb-3">
                {t('about.advisors.emily.name')}
              </h4>
              <p className="text-[#475467] font-medium text-[14px] leading-[22px]">
                {t('about.advisors.emily.desc')}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};