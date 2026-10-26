import { useTranslation } from 'react-i18next';

export const HeroHomeAuro = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[#0B0E12] overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* --- ESTILOS DE LA LINTERNA (TRAYECTORIA PERIMETRAL VELOZ EN COSTADOS) --- */}
      <style>{`
        @keyframes perimeterFlashlight {
          0% {
            /* 1. Inicia en Esquina Superior Izquierda */
            -webkit-mask-position: -20% -20%;
            mask-position: -20% -20%;
          }
          10% {
            /* 2. Baja a la Esquina Inferior Izquierda (Solo 10% del tiempo = Súper rápido) */
            -webkit-mask-position: -20% 120%;
            mask-position: -20% 120%;
          }
          50% {
            /* 3. Avanza a la Esquina Inferior Derecha (40% del tiempo) */
            -webkit-mask-position: 120% 120%;
            mask-position: 120% 120%;
          }
          60% {
            /* 4. Sube a la Esquina Superior Derecha (Solo 10% del tiempo = Súper rápido) */
            -webkit-mask-position: 120% -20%;
            mask-position: 120% -20%;
          }
          100% {
            /* 5. Regresa a la Esquina Superior Izquierda (40% del tiempo) */
            -webkit-mask-position: -20% -20%;
            mask-position: -20% -20%;
          }
        }

        .aurora-flashlight {
          -webkit-mask-image: radial-gradient(circle, black 0%, transparent 60%);
          mask-image: radial-gradient(circle, black 0%, transparent 60%);
          
          /* Tamaño actual: 40vmax */
          -webkit-mask-size: 40vmax 40vmax;
          mask-size: 40vmax 40vmax;
          
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          
          /* Mantenemos la velocidad global de 17s */
          animation: perimeterFlashlight 17s linear infinite;
        }
      `}</style>

      {/* ========================================== */}
      {/* CAPA 1: FONDO NEGRO Y TEXTOS APAGADOS      */}
      {/* ========================================== */}
      
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,245,196,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,245,196,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pointer-events-none">
        <div className="w-full max-w-4xl mx-auto text-center mt-32 pointer-events-auto flex flex-col items-center">
          <h1
            className="font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6 text-[#F9F9F9]/30"
            dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
          ></h1>
          <p className="text-[18px] md:text-[20px] font-medium max-w-3xl mx-auto leading-[1.6] mb-12 text-gray-500">
            {t('home.hero.subtitle')}
          </p>
          <div className="w-[200px] h-[48px] opacity-0"></div>
        </div>
      </div>

      {/* ========================================== */}
      {/* CAPA 2: LA LUZ REVELADORA (MÁSCARA ANIMADA)*/}
      {/* ========================================== */}
      <div className="absolute inset-0 z-20 pointer-events-none aurora-flashlight">
        
        <div className="absolute inset-0 bg-[#10F5C4]/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,245,196,0.30)_1px,transparent_1px),linear-gradient(90deg,rgba(16,245,196,0.30)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Los 16 Core Sparks originales */}
        <div className="absolute top-[25%] left-[25%] w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_3s_infinite]"></div>
          <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
        </div>
        <div className="absolute top-[60%] right-[30%] w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-lg rounded-full animate-[ping_4s_infinite]"></div>
          <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_12px_white]"></div>
        </div>
        <div className="absolute bottom-[20%] left-[40%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-400 blur-sm rounded-full animate-[ping_2.5s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[15%] right-[15%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-sm rounded-full animate-[ping_3.5s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_6px_white]"></div>
        </div>
        <div className="absolute top-[10%] left-[60%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_4s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute bottom-[30%] right-[15%] w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-400 blur-md rounded-full animate-[ping_3s_infinite]"></div>
          <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
        </div>
        <div className="absolute top-[75%] left-[10%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-sm rounded-full animate-[ping_5s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[40%] left-[15%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-400 blur-sm rounded-full animate-[ping_2.5s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_5px_white]"></div>
        </div>
        <div className="absolute bottom-[10%] right-[45%] w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-lg rounded-full animate-[ping_6s_infinite]"></div>
          <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_12px_white]"></div>
        </div>
        <div className="absolute top-[5%] right-[35%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_3.2s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[80%] left-[20%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-sm rounded-full animate-[ping_4.5s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_5px_white]"></div>
        </div>
        <div className="absolute top-[20%] right-[45%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-400 blur-md rounded-full animate-[ping_3.8s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute bottom-[40%] left-[10%] w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-lg rounded-full animate-[ping_5.5s_infinite]"></div>
          <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
        </div>
        <div className="absolute top-[55%] right-[15%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-300 blur-sm rounded-full animate-[ping_2.8s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_6px_white]"></div>
        </div>
        <div className="absolute top-[85%] right-[60%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_4.2s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[30%] left-[5%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-500 blur-sm rounded-full animate-[ping_3.1s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_5px_white]"></div>
        </div>

        {/* 7 Destellos Lado Derecho */}
        <div className="absolute top-[18%] right-[8%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-400 blur-sm rounded-full animate-[ping_4.1s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[48%] right-[4%] w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_3.3s_infinite]"></div>
          <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
        </div>
        <div className="absolute bottom-[15%] right-[12%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-sm rounded-full animate-[ping_2.7s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_6px_white]"></div>
        </div>
        <div className="absolute bottom-[35%] right-[3%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-300 blur-sm rounded-full animate-[ping_5.2s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>
        <div className="absolute top-[35%] right-[18%] w-12 h-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-lg rounded-full animate-[ping_4.6s_infinite]"></div>
          <div className="w-4 h-4 bg-white rounded-full z-10 shadow-[0_0_12px_white]"></div>
        </div>
        <div className="absolute top-[65%] right-[8%] w-6 h-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-teal-500 blur-sm rounded-full animate-[ping_3.9s_infinite]"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full z-10 shadow-[0_0_5px_white]"></div>
        </div>
        <div className="absolute bottom-[5%] right-[22%] w-8 h-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-[#10F5C4] blur-sm rounded-full animate-[ping_2.9s_infinite]"></div>
          <div className="w-2 h-2 bg-white rounded-full z-10 shadow-[0_0_8px_white]"></div>
        </div>

        {/* Textos Neón Brillantes */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-4xl mx-auto text-center mt-32 pointer-events-auto flex flex-col items-center">
            <h1
              className="font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6 text-[#10F5C4] drop-shadow-[0_0_15px_rgba(16,245,196,0.6)]"
              dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
            ></h1>
            <p className="text-[18px] md:text-[20px] font-medium max-w-3xl mx-auto leading-[1.6] mb-12 text-[#10F5C4] drop-shadow-[0_0_10px_rgba(16,245,196,0.5)]">
              {t('home.hero.subtitle')}
            </p>
            <div className="w-[200px] h-[48px] opacity-0"></div>
          </div>
        </div>

      </div>

      {/* ========================================== */}
      {/* CAPA 3: BOTÓN SIEMPRE VISIBLE (FUERA DE LA MÁSCARA) */}
      {/* ========================================== */}
      <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pointer-events-none">
        <div className="w-full max-w-4xl mx-auto text-center mt-32 flex flex-col items-center">
          
          <h1 className="font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6 opacity-0" dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}></h1>
          <p className="text-[18px] md:text-[20px] font-medium max-w-3xl mx-auto leading-[1.6] mb-12 opacity-0">{t('home.hero.subtitle')}</p>
          
          {/* BOTÓN REAL */}
          <button className="w-[200px] h-[48px] mx-auto bg-[#10F5C4] rounded-lg text-[#10151B] font-semibold text-[16px] leading-[20px] tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(16,245,196,0.4)] pointer-events-auto cursor-pointer">
            {t('home.hero.cta')}
          </button>
          
        </div>
      </div>

    </section>
  );
};