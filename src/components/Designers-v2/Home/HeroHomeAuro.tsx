import { useTranslation } from 'react-i18next';

export const HeroHomeAuro = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[#0B0E12] overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* --- CAPA 1: FONDO ANIMADO (Aurora Giratoria) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        {/* ELIMINAMOS 'mix-blend-screen' de ambas luces para evitar el bug del cuadro cortado */}
        <div 
          className="absolute w-[120vw] md:w-[80vw] h-[120vw] md:h-[80vw] bg-[#10F5C4]/15 blur-[100px] md:blur-[150px] rounded-full animate-[spin_20s_linear_infinite]" 
          style={{ transformOrigin: 'top left' }}
        ></div>
        <div 
          className="absolute w-[100vw] md:w-[60vw] h-[100vw] md:h-[60vw] bg-[#023126]/40 blur-[100px] md:blur-[150px] rounded-full animate-[spin_25s_linear_infinite_reverse]" 
          style={{ transformOrigin: 'bottom right' }}
        ></div>
      </div>

      {/* --- CAPA 2: Contenido Principal --- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center mt-32">
        
        <h1 
          className="text-[#F9F9F9] font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6" 
          dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
        >
        </h1>
        
        <p className="text-gray-400 text-[18px] md:text-[20px] font-medium max-w-3xl leading-[1.6] mb-12">
          {t('home.hero.subtitle')}
        </p>
        
        <button className="w-[200px] h-[48px] bg-[#10F5C4] rounded-lg text-[#10151B] font-semibold text-[16px] leading-[20px] tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(16,245,196,0.3)]">
          {t('home.hero.cta')}
        </button>
      </div>

    </section>
  );
};