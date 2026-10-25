import { useTranslation } from 'react-i18next';

export const HeroHomeScan = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[#0B0E12] overflow-hidden">
      
      {/* --- ESTILOS DE ANIMACIÓN 100% SINCRONIZADOS --- */}
      <style>{`
        @keyframes syncScan {
          0% { 
            background-position: 0 -25vh; 
            -webkit-mask-position: 0 -25vh; 
            mask-position: 0 -25vh; 
          }
          50% { 
            background-position: 0 100vh; 
            -webkit-mask-position: 0 100vh; 
            mask-position: 0 100vh; 
          }
          100% { 
            background-position: 0 -25vh; 
            -webkit-mask-position: 0 -25vh; 
            mask-position: 0 -25vh; 
          }
        }
      `}</style>

      {/* --- CAPA 1: FONDO Y BARRA FÍSICA --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* 👇 Cuadrícula Base: La oscurecemos un poco (opacity-30 y color sutil) para que el contraste sea mayor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,245,196,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,245,196,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
        
        {/* Barra Lenta de 14s */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(to bottom, transparent 10%, rgba(16,245,196,0.15) 50%, transparent 90%)',
            backgroundSize: '100% 25vh',
            backgroundRepeat: 'no-repeat',
            animation: 'syncScan 14s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* --- CAPA 1.5: PUNTOS ESCONDIDOS Y CUADRÍCULA ILUMINADA --- */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
          maskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
          WebkitMaskSize: '100% 25vh',
          maskSize: '100% 25vh',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          animation: 'syncScan 14s ease-in-out infinite'
        }}
      >
        {/* 👇 NUEVO: Cuadrícula Brillante que solo aparece con la máscara del escáner */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,245,196,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(16,245,196,0.25)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        {/* Sparks Originales */}
        <div className="absolute top-[15%] left-[15%] w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_3s_infinite]"></div>
          <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
        </div>
        <div className="absolute top-[25%] right-[20%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-[6px] rounded-full animate-[ping_2s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[45%] left-[5%] w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-lg rounded-full animate-[ping_4s_infinite]"></div>
          <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_12px_white]"></div>
        </div>
        <div className="absolute top-[60%] right-[10%] w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_3.5s_infinite]"></div>
          <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
        </div>
        <div className="absolute bottom-[20%] left-[25%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-400 blur-sm rounded-full animate-[ping_2.5s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>

        {/* Sparks Añadidos */}
        <div className="absolute top-[10%] right-[40%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-sm rounded-full animate-[ping_4s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_5px_white]"></div>
        </div>
        <div className="absolute top-[35%] left-[30%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_5s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute bottom-[35%] right-[25%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-400 blur-sm rounded-full animate-[ping_3s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_5px_white]"></div>
        </div>
        <div className="absolute bottom-[15%] right-[45%] w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_4.5s_infinite]"></div>
          <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
        </div>
        <div className="absolute top-[70%] left-[15%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-sm rounded-full animate-[ping_2.8s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[80%] right-[15%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-300 blur-sm rounded-full animate-[ping_3.2s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_6px_white]"></div>
        </div>
        <div className="absolute top-[50%] right-[35%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_3.8s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
      </div>

      {/* --- CAPA 2: TEXTO BASE --- */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-4xl mx-auto text-center mt-20">
          <h1 
            className="font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6 text-[#F9F9F9]/50" 
            dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
          ></h1>
          <p className="text-[18px] md:text-[20px] font-medium max-w-3xl mx-auto leading-[1.6] mb-12 text-gray-400">
            {t('home.hero.subtitle')}
          </p>
          <button className="w-[200px] h-[48px] bg-[#10F5C4] rounded-lg text-[#10151B] font-semibold text-[16px] leading-[20px] tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(16,245,196,0.3)]">
            {t('home.hero.cta')}
          </button>
        </div>
      </div>

      {/* --- CAPA 3: TEXTO NEÓN SUPERPUESTO (MÁSCARA ANIMADA EN 14S) --- */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center px-6"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
          maskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
          WebkitMaskSize: '100% 25vh',
          maskSize: '100% 25vh',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          animation: 'syncScan 14s ease-in-out infinite'
        }}
      >
        <div className="w-full max-w-4xl mx-auto text-center mt-20">
          <h1 
            className="font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6 text-[#10F5C4] drop-shadow-[0_0_15px_rgba(16,245,196,0.6)]" 
            dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
          ></h1>
          <p className="text-[18px] md:text-[20px] font-medium max-w-3xl mx-auto leading-[1.6] mb-12 text-[#10F5C4] drop-shadow-[0_0_10px_rgba(16,245,196,0.5)]">
            {t('home.hero.subtitle')}
          </p>
          <div className="w-[200px] h-[48px] mx-auto opacity-0"></div>
        </div>
      </div>

    </section>
  );
};