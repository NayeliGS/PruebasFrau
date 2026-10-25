import { useTranslation } from 'react-i18next';

export const HeroHomeScan = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[#0B0E12] overflow-hidden">
      
      {/* --- ESTILOS DE ANIMACIÓN SINCRONIZADOS --- */}
      <style>{`
        /* Movimiento de la barra física de luz */
        @keyframes scanMove {
          0% { transform: translateY(-25vh); }
          50% { transform: translateY(100vh); }
          100% { transform: translateY(-25vh); }
        }
        /* Movimiento idéntico de la máscara del texto */
        @keyframes maskMove {
          0% { -webkit-mask-position: 0 -25vh; mask-position: 0 -25vh; }
          50% { -webkit-mask-position: 0 100vh; mask-position: 0 100vh; }
          100% { -webkit-mask-position: 0 -25vh; mask-position: 0 -25vh; }
        }
      `}</style>

      {/* --- CAPA 1: FONDO Y BARRA FÍSICA --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Grilla cuadriculada estática */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,245,196,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,245,196,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60"></div>
        {/* Barra de escáner animada */}
        <div 
          className="absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-b from-transparent via-[#10F5C4]/15 to-transparent"
          style={{ animation: 'scanMove 8s ease-in-out infinite' }}
        ></div>
      </div>

      {/* --- CAPA 2: TEXTO BASE (GRIS APAGADO) --- */}
      {/* Usamos absolute inset-0 y flex para centrar perfectamente en toda la pantalla */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-4xl mx-auto text-center mt-20">
          <h1 
            className="font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6 text-[#F9F9F9]/10" 
            dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
          ></h1>
          <p className="text-[18px] md:text-[20px] font-medium max-w-3xl mx-auto leading-[1.6] mb-12 text-gray-700">
            {t('home.hero.subtitle')}
          </p>
          <button className="w-[200px] h-[48px] bg-[#10F5C4] rounded-lg text-[#10151B] font-semibold text-[16px] leading-[20px] tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(16,245,196,0.3)]">
            {t('home.hero.cta')}
          </button>
        </div>
      </div>

      {/* --- CAPA 3: TEXTO NEÓN SUPERPUESTO (MÁSCARA ANIMADA) --- */}
      {/* CLAVE: Usamos exactamente el mismo contenedor absoluto (inset-0 + flex) que la Capa 2 para forzar un empalme perfecto */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none flex flex-col items-center justify-center px-6"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
          maskImage: 'linear-gradient(to bottom, transparent 10%, black 50%, transparent 90%)',
          WebkitMaskSize: '100% 25vh',
          maskSize: '100% 25vh',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          animation: 'maskMove 8s ease-in-out infinite'
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
          {/* Espacio invisible idéntico al botón para mantener la estructura simétrica sin duplicar el botón real */}
          <div className="w-[200px] h-[48px] mx-auto opacity-0"></div>
        </div>
      </div>

    </section>
  );
}; 