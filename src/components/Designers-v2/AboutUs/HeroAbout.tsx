import { useTranslation } from 'react-i18next';

export const HeroAbout = () => {
  const { t } = useTranslation();

  return (
    <div className="relative w-full flex flex-col gap-32 py-10 z-10">
      
      {/* CAPA DE LUZ COMPARTIDA */}
      <div className="absolute top-[5%] right-[-10%] w-[800px] lg:w-[1000px] h-[1200px] bg-[#10F5C4]/15 blur-[150px] rounded-[100%] pointer-events-none z-0"></div>

      {/* ========================================================= */}
      {/* PARTE 1: HERO (Texto a la izquierda, Video a la derecha) */}
      {/* ========================================================= */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6">
        
        <div className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="font-medium text-[32px] leading-[46px] tracking-[-0.01em] text-[#F9F9F9] mb-10 max-w-lg">
            {t('about.heroTitle')}
          </h1>
          
          <button className="w-[258px] h-[44px] bg-[#10F5C4] rounded-lg text-[#10151B] font-semibold text-[16px] leading-[20px] tracking-[0%] flex items-center justify-center gap-2 transition-transform hover:scale-105">
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
        
        {/* COLUMNA IZQUIERDA: Bento Box Asimétrico */}
        <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-6 relative">
          
          {/* Luz de fondo exclusiva del Bento Box */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#10F5C4]/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

          {/* Sub-columna Izquierda */}
          <div className="flex-1 flex flex-col gap-6 z-10">
            {/* Tarjeta 1: Imagen Candado (Alta) */}
            <div className="relative w-full h-[320px] rounded-3xl overflow-hidden border border-white/10">
              <img src="/designersV2/AboutUsCandado.png" alt="Seguridad" className="w-full h-full object-cover" />
            </div>

            {/* Tarjeta 2: Texto Inferior (Corta) */}
            <div className="relative w-full h-[240px] bg-gradient-to-br from-white to-gray-200 rounded-3xl p-8 flex items-center shadow-lg">
              {/* 👇 Redujimos text-[32px] a [24px] y leading-[46px] a [34px] */}
              <p className="font-semibold text-[24px] leading-[34px] tracking-[-0.01em] text-[#10151B]">
                {t('about.mission.card2')}
              </p>
            </div>
          </div>

          {/* Sub-columna Derecha */}
          <div className="flex-1 flex flex-col gap-6 z-10">
            {/* Tarjeta 3: Texto Superior (Corta) */}
            {/* Tarjeta 3: Texto Superior (Corta) */}
            <div className="relative w-full h-[240px] bg-gradient-to-br from-white to-gray-200 rounded-3xl p-8 flex items-center shadow-lg">
              {/* 👇 Misma reducción para mantener simetría */}
              <p className="font-semibold text-[24px] leading-[34px] tracking-[-0.01em] text-[#10151B]">
                {t('about.mission.card1')}
              </p>
            </div>

            {/* Tarjeta 4: Imagen Escudo (Alta) */}
            <div className="relative w-full h-[320px] rounded-3xl overflow-hidden border border-white/10">
              <img src="/designersV2/AboutUsSeguridad.png" alt="Escudo" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA: Textos Descriptivos */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="font-semibold text-[38px] leading-[56px] tracking-[-0.015em] text-[#FFFFFF] mb-6">
            {t('about.mission.title')}
          </h2>
          
          <p className="font-normal text-[24px] leading-[34px] tracking-[-0.01em] text-[#A1A8B0] mb-10">
            {t('about.mission.subtitle')}
          </p>
          
          <button className="bg-[#F9F9F9] text-[#10151B] px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors">
            {t('about.mission.btn')}
          </button>
        </div>
        
      </div>
      
    </div>
  );
};