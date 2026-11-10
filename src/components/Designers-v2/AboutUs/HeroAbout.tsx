import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const HeroAbout = () => {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState<number | null>(null);

  const founders = [
    {
      id: 1,
      nameKey: 'about.founders.marlon.name',
      roleKey: 'about.founders.marlon.role',
      descKey: 'about.founders.marlon.desc',
      imgSrc: '/designersV2/AboutUs/founders_Marlon.png',
      linkedin: '#'
    },
    {
      id: 2,
      nameKey: 'about.founders.juan.name',
      roleKey: 'about.founders.juan.role',
      descKey: 'about.founders.juan.desc',
      imgSrc: '/designersV2/AboutUs/founders_Juan.png',
      linkedin: '#'
    },
    {
      id: 3,
      nameKey: 'about.founders.christian.name',
      roleKey: 'about.founders.christian.role',
      descKey: 'about.founders.christian.desc',
      imgSrc: '/designersV2/AboutUs/founders_Christian.png',
      linkedin: '#'
    }
  ];

  return (
    <section className="relative w-full bg-[#0B0E12] flex flex-col gap-32 pt-20 pb-48 font-sans overflow-hidden z-10">
      <div className="absolute top-[5%] right-[-10%] w-[800px] lg:w-[1000px] h-[1200px] bg-[#10F5C4]/15 blur-[150px] rounded-[100%] pointer-events-none z-0 "></div>
      
    

      {/* ========================================================= */}
      {/* PARTE 1: HERO (Texto a la izquierda, Video a la derecha) */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6">
        <div className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="font-medium text-[clamp(12px,5vw,30px)] leading-[1.2] tracking-[-0.01em] text-[#F9F9F9] mb-10 max-w-lg">
            {t('about.heroTitle')}
          </h1>
          <h2 className="font-medium text-[clamp(12px,5vw,21px)] leading-[28px] tracking-[-0.01em] text-[#A1A8B0] mb-10 max-w-lg">
            {t('about.heroTitle1')}
          </h2>
          <button className="w-[258px] h-[44px] bg-[#10F5C4] rounded-lg text-[#10151B] font-semibold text-[16px] leading-[20px] flex items-center justify-center gap-2 transition-transform hover:scale-105 transform-gpu">
            {t('about.heroBtn')}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="w-full lg:w-7/12 flex justify-center lg:justify-end">
          <div className="w-full max-w-[800px] aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#050709] relative">
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/designersV2/videos/fraudeg-intro.mp4" type="video/mp4" />
              Tu navegador no soporta la etiqueta de video.
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E12]/80 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PARTE 2: MISIÓN (Bento Box a la izquierda, Texto a la derecha) */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6">
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#10F5C4]/10 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu"></div>
          
          <div className="flex-1 flex flex-col gap-6 z-10">
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-white/10">
              <img src="/designersV2/AboutUs/bento_izquierda.jpg" alt="Seguridad" className="w-full h-full object-cover" />
            </div>
            <div className="relative w-full h-[240px] bg-gradient-to-br from-white to-gray-200 rounded-3xl p-8 flex items-center shadow-lg">
              <p className="font-semibold text-[clamp(16px,5vw,20px)] leading-[30px] tracking-[-0.01em] text-[#10151B]">
                {t('about.mission.card2')}
              </p>
            </div>
          </div>

          <div className="flex-1 flex flex-col gap-6 z-10">
            <div className="relative w-full h-[240px] bg-gradient-to-br from-white to-gray-200 rounded-3xl p-8 flex items-center shadow-lg ">
              <p className="font-semibold text-[clamp(16px,5vw,20px)] leading-[30px] tracking-[-0.01em] text-[#10151B]">
                {t('about.mission.card1')}
              </p>
            </div>
            <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-white/10">
              <img src="/designersV2/AboutUs/bento_derecha.jpg" alt="Escudo" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="font-semibold text-[clamp(12px,5vw,30px)] leading-[1.1] tracking-[-0.015em] text-[#FFFFFF] mb-6">
            {t('about.mission.title')}
          </h2>
          <p className="font-normal text-[clamp(12px,5vw,21px)] leading-[28px] tracking-[-0.01em] text-[#A1A8B0] mb-10">
            {t('about.mission.subtitle')}
          </p>
          <p className="font-normal text-[clamp(12px,5vw,21px)] leading-[28px] tracking-[-0.01em] text-[#A1A8B0] mb-10">
            {t('about.mission.subtitle1')}
          </p>
          <button className="bg-[#F9F9F9] text-[#10151B] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors transform-gpu">
            {t('about.mission.btn')}
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* PARTE 3: FUNDADORES (Tarjetas con Hover) */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center px-6 mt-16">
        <h2 className="text-[#F9F9F9] text-center font-semibold text-[clamp(32px,4vw,40px)] leading-[1.2] tracking-[-0.01em] mb-20 max-w-2xl">
          {t('about.founders.title')}
        </h2>

        <div className="w-full flex flex-col lg:flex-row gap-6 h-auto lg:h-[550px] mb-32">
          {founders.map((founder) => {
            const isHovered = hovered === founder.id;
            const isAnyHovered = hovered !== null;

            return (
              <div
                  key={founder.id}
                 onMouseEnter={() => setHovered(founder.id)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative h-[430px] w-full cursor-pointer overflow-hidden rounded-[2rem] border border-white/10 transition-[width] duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] lg:h-full ${
                  isHovered
                   ? 'lg:w-[46%]'
                   : isAnyHovered
                   ? 'lg:w-[27%]'
                   : 'lg:w-1/3'
                    }`}
              >
                <img 
                  src={founder.imgSrc} 
                  alt={t(founder.nameKey)}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[700ms] transform-gpu group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#023126] via-[#023126]/60 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-8 left-8 right-8 z-20 flex flex-col justify-end pointer-events-none">
                  <span className="text-[#10F5C4] font-medium text-[14px] leading-[20px] mb-1">
                    {t(founder.roleKey)}
                  </span>
                  
                  <span className="text-[#FFFFFF] font-bold text-[clamp(28px,3vw,32px)] leading-tight">
                    {t(founder.nameKey)}
                  </span>

                  <div 
                    className={`grid transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu ${
                      isHovered ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'
                    }`}
                  >
                    <div className="overflow-hidden pointer-events-auto">
                      <p className="text-[#F9F9F9] font-medium text-[clamp(14px,1.5vw,15px)] leading-relaxed mb-6">
                        {t(founder.descKey)}
                      </p>
                      
                      <a 
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#10F5C4] text-[#10151B] hover:bg-white hover:scale-110 transition-all transform-gpu"
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

        {/* ========================================================= */}
        {/* PARTE 4: NUESTRO EQUIPO */}
        {/* ========================================================= */}
        <h3 className="text-[#F9F9F9] text-center font-semibold text-[clamp(32px,4vw,40px)] leading-[1.2] tracking-[-0.01em] mb-12">
          {t('about.team.title')}
        </h3>

        <div className="w-full max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-16 gap-x-28">
          {(t('about.team.members', { returnObjects: true }) as Array<{name: string, role: string}>).map((member, index) => (
            <div key={index} className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-5 border border-white/10 shadow-lg transition-transform duration-300 transform-gpu group-hover:scale-105 group-hover:border-[#10F5C4]/50">
                <img 
                  src="/designersV2/AboutUs_Team.png" 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="text-[#F9F9F9] font-bold text-lg leading-tight mb-1 text-center">{member.name}</span>
              <span className="text-[#E6FF5B] font-medium text-sm text-center">{member.role}</span>
            </div>
          ))}
        </div>

        {/* ========================================================= */}
        {/* PARTE 5: BOARD OF ADVISORS */}
        {/* ========================================================= */}
        <div className="w-full bg-[#EAF2ED] rounded-[3rem] mt-32 p-10 md:p-24 flex flex-col items-center transform-gpu">
          <h3 className="text-[#10151B] text-center font-bold text-[clamp(32px,4vw,40px)] leading-tight tracking-[-0.01em] mb-2">
            {t('about.advisors.title')}
          </h3>
          <p className="text-[#475467] text-center font-medium text-[clamp(16px,2vw,24px)] leading-tight tracking-[-0.01em] max-w-2xl leading-relaxed mb-14">
            {t('about.advisors.subtitle')}
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="flex flex-col w-full">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 transform-gpu">
                <img 
                  src="/designersV2/AboutUS_Advisors1.png" 
                  alt={t('about.advisors.carlos.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[#10151B] font-bold text-[clamp(24px,2vw,24px)] mb-3">
                {t('about.advisors.carlos.name')}
              </h4>
              <p className="text-[#475467] font-medium text-[clamp(16px,2vw,16px)] leading-[22px]">
                {t('about.advisors.carlos.desc')}
              </p>
            </div>

            <div className="flex flex-col w-full">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 transform-gpu">
                <img 
                  src="/designersV2/AboutUS_Advisors2.png" 
                  alt={t('about.advisors.emily.name')} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-[#10151B] font-bold text-[clamp(24px,2vw,24px)] mb-3">
                {t('about.advisors.emily.name')}
              </h4>
              <p className="text-[#475467] font-medium text-[clamp(16px,2vw,16px)] leading-[22px]">
                {t('about.advisors.emily.desc')}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};