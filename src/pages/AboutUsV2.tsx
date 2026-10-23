import { Navbar } from "../components/Designers-v2/Shared/Navbar";
import { Footer } from "../components/Designers-v2/Shared/Footer";
import { AccessibilityMenu } from "../components/Designers-v2/Shared/AccessibilityMenu";
import { useTranslation } from 'react-i18next';

export const AboutUsV2 = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#0B0E12] text-[#F9F9F9] flex flex-col font-sans relative overflow-hidden">
      
      <Navbar />
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#10F5C4]/15 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <main className="flex-grow flex flex-col items-center w-full relative z-10 px-6 py-20">
        
        {/* 👇 Expandimos el contenedor principal a max-w-7xl para dar más espacio a ambos lados */}
        <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* 👇 COLUMNA TEXTO: Centrado en móvil y a la izquierda en PC. Le damos 5/12 del ancho disponible. */}
          <div className="w-full lg:w-5/12 flex flex-col items-center text-center lg:items-start lg:text-left z-10">
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

          {/* 👇 COLUMNA VIDEO: Le damos 7/12 del ancho para que el video crezca sin aplastar el texto */}
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end z-10">
            {/* Ahora el video tiene permiso de crecer hasta 800px */}
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

        <AccessibilityMenu />
      </main>

      <Footer />
    </div>
  );
};