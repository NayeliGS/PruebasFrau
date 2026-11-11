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
      imgSrc: '/designersV2/AboutUs/founders_Marlon.jpg',
      linkedin: 'https://www.linkedin.com/in/marlon-yepes-ceballos-7508981a0/'
    },
    {
      id: 2,
      nameKey: 'about.founders.juan.name',
      roleKey: 'about.founders.juan.role',
      descKey: 'about.founders.juan.desc',
      imgSrc: '/designersV2/AboutUs/founders_Juan.PNG',
      linkedin: 'https://www.linkedin.com/in/juanfranco-resiliente/'
    },
    {
      id: 3,
      nameKey: 'about.founders.christian.name',
      roleKey: 'about.founders.christian.role',
      descKey: 'about.founders.christian.desc',
      imgSrc: '/designersV2/AboutUs/founders_Christian.jpeg',
      linkedin: '#'
    },
    {
      id: 4,
      nameKey: 'about.founders.jhon.name',
      roleKey: 'about.founders.jhon.role',
      descKey: 'about.founders.jhon.desc',
      imgSrc: '/designersV2/AboutUs/founders_Jhon.jpg',
      linkedin: '#'
    }
  ];

  return (
    <section className="relative w-full bg-[#0B0E12] flex flex-col gap-32 pt-40 pb-8 font-sans overflow-hidden z-10">
      <div className="absolute top-[5%] right-[-10%] w-[800px] lg:w-[1000px] h-[1200px] bg-[#10F5C4]/15 blur-[150px] rounded-[100%] pointer-events-none z-0 "></div>
       {/* PARTE 1 */}
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
      {/* PARTE 2 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-6">      
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6 relative md:h-[640px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#10F5C4]/10 blur-[120px] rounded-full pointer-events-none z-0 transform-gpu"></div>
          <div className="flex-1 flex flex-col gap-6 z-10 h-full">
            <div className="relative flex-1 w-full overflow-hidden rounded-3xl border border-white/10 min-h-[300px] md:min-h-0">
              <img src="/designersV2/AboutUs/bento_izquierda.webp" alt="Seguridad" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="relative w-full h-[240px] shrink-0 bg-gradient-to-br from-white to-gray-200 rounded-3xl p-8 flex items-center shadow-lg">
              <p className="font-semibold text-[clamp(16px,5vw,20px)] leading-[30px] tracking-[-0.01em] text-[#10151B]">
                {t('about.mission.card2')}
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6 z-10 h-full">
            <div className="relative w-full h-[240px] shrink-0 bg-gradient-to-br from-white to-gray-200 rounded-3xl p-8 flex items-center shadow-lg">
              <p className="font-semibold text-[clamp(16px,5vw,20px)] leading-[30px] tracking-[-0.01em] text-[#10151B]">
                {t('about.mission.card1')}
              </p>
            </div>
            <div className="relative flex-1 w-full overflow-hidden rounded-3xl border border-white/10 min-h-[300px] md:min-h-0">
              <img src="/designersV2/AboutUs/bento_derecha.webp" alt="Escudo" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-10">
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

      {/* PARTE 3 */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center px-6 ">
        <h2 className="text-[#F9F9F9] text-center font-semibold text-[clamp(32px,4vw,40px)] leading-[1.2] tracking-[-0.01em] mb-18 max-w-2xl">
          {t('about.founders.title')}
        </h2>

        <div className="w-full flex flex-col lg:flex-row gap-4 h-auto lg:h-[550px] mb-32">
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

        {/* PARTE 4 */}
        <div className="w-full flex flex-col items-center mt-3 mb-20">
          <h3 className="text-[#10F5C4] text-center font-semibold text-[clamp(32px,4vw,40px)] leading-[1.2] tracking-[-0.01em] mb-4">
            {t('about.team.title')}
          </h3>
          <h3 className="text-[#F9F9F9 ] text-center font-semibold text-[clamp(20px,4vw,26px)] leading-[1.2] tracking-[-0.01em] mb-21 max-w-3xl">
            {t('about.team.title1')}
          </h3>
          <div className="w-full max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 px-4">
            {(t('about.team.members', { returnObjects: true }) as Array<{name: string, role: string, image: string, linkedin: string}>).map((member, index) => (
              <a 
                key={index} 
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-start group cursor-pointer w-full"
                aria-label={`Perfil de LinkedIn de ${member.name}`}
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-white/10 shadow-lg transition-transform duration-300 transform-gpu group-hover:scale-105 group-hover:border-[#10F5C4]/50 relative">
                  <img 
                    src={`/designersV2/AboutUs/Colaboradores/${member.image}`} 
                    alt={member.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-[#10F5C4]/0 group-hover:bg-[#10F5C4]/10 transition-colors duration-300"></div>
                </div>
                
                <div className="flex items-start gap-2 mb-1 w-full">
                  <span className="text-[#F9F9F9] font-bold text-sm md:text-base leading-tight text-left group-hover:text-[#10F5C4] transition-colors duration-300 flex-1">
                    {member.name}
                  </span>
                  <svg 
                    className="w-[16px] h-[16px] text-[#A1A8B0] group-hover:text-[#0A66C2] transition-colors duration-300 shrink-0 mt-[2px]" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <span className="text-[#10F5C4] font-medium text-[11px] md:text-xs text-left leading-snug group-hover:text-[#d8d8d8] transition-colors duration-300 w-full line-clamp-2">
                  {member.role}
                </span>
              </a>
            ))}
          </div>
        </div>

       
        {/* PARTE 5 */}
        
        <div className="w-full bg-[#EAF2ED] rounded-[3rem] mt-32 p-10 md:p-18 flex flex-col items-center transform-gpu">
  <h3 className="text-[#10151B] text-center font-bold text-[clamp(32px,4vw,40px)] leading-tight tracking-[-0.01em] mb-2">
    {t('about.advisors.title')}
  </h3>
  <p className="text-[#475467] text-center font-medium text-[clamp(16px,2vw,24px)] leading-tight tracking-[-0.01em] max-w-2xl leading-relaxed mb-14">
    {t('about.advisors.subtitle')}
  </p>

  <div className="w-full flex justify-center">
    <div className="flex flex-col md:flex-row items-center w-full max-w-5xl gap-10 lg:gap-16">
      <div className="w-full md:w-1/2 aspect-[4/3] rounded-3xl overflow-hidden transform-gpu shrink-0 shadow-lg">
        <img 
          src="/designersV2/AboutUs/AboutUS_Advisors1.jpg" 
          alt={t('about.advisors.jaime.name')} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center text-left items-start">
        <h4 className="text-[#10151B] font-bold text-[clamp(24px,2vw,24px)] ">
          {t('about.advisors.jaime.name')}
        </h4>
        <span className="block text-[#096b56] font-bold text-[clamp(18px,2vw,18px)] mb-4">
          {t('about.advisors.jaime.name1')}
        </span>
        <p className="text-[#475467] font-medium text-[clamp(16px,2vw,16px)] leading-[22px] mb-6">
          {t('about.advisors.jaime.desc')}
        </p>
        <a 
          href="#" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#10151B] text-white hover:bg-[#0A66C2] hover:scale-110 transition-all transform-gpu shadow-md" 
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
</div>
    </section>
  );
};