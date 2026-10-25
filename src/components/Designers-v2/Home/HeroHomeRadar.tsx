import { useTranslation } from 'react-i18next';

export const HeroHomeRadar = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-full min-h-screen bg-[#0B0E12] overflow-hidden flex flex-col items-center justify-center px-6">
      
      {/* --- CAPA 1: FONDO ANIMADO (Pulsos Radar Multi-Nodo) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          
          {/* Nodo 1: Radar Central (Principal) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            <div className="absolute w-[300px] h-[300px] rounded-full border-[2px] border-[#10F5C4]/30 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
            <div className="absolute w-[500px] h-[500px] rounded-full border-[2px] border-[#10F5C4]/20 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute w-[700px] h-[700px] rounded-full border border-[#10F5C4]/10 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '2.4s' }}></div>
            
            {/* Degradado Central Marcado */}
            <div className="absolute w-[600px] h-[600px] bg-[#10F5C4]/10 blur-[120px] rounded-full"></div>
            <div className="absolute w-[300px] h-[300px] bg-[#10F5C4]/20 blur-[70px] rounded-full"></div>
          </div>

          {/* Nodo 2: Superior Izquierdo */}
          <div className="absolute top-[10%] left-[10%] flex items-center justify-center opacity-60">
            <div className="absolute w-[150px] h-[150px] rounded-full border-[1.5px] border-[#10F5C4]/40 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute w-[300px] h-[300px] rounded-full border-[1px] border-[#10F5C4]/20 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '2.5s' }}></div>
            <div className="absolute w-[200px] h-[200px] bg-[#10F5C4]/5 blur-[60px] rounded-full"></div>
          </div>

          {/* Nodo 3: Inferior Derecho */}
          <div className="absolute bottom-[15%] right-[10%] flex items-center justify-center opacity-50">
            <div className="absolute w-[200px] h-[200px] rounded-full border-[1.5px] border-teal-500/50 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }}></div>
            <div className="absolute w-[400px] h-[400px] rounded-full border-[1px] border-teal-500/20 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '3s' }}></div>
            <div className="absolute w-[250px] h-[250px] bg-teal-500/5 blur-[80px] rounded-full"></div>
          </div>

          {/* Nodo 4: Inferior Izquierdo */}
          <div className="absolute bottom-[20%] left-[25%] flex items-center justify-center opacity-30">
            <div className="absolute w-[100px] h-[100px] rounded-full border-[1px] border-[#10F5C4]/50 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute w-[250px] h-[250px] rounded-full border-[1px] border-[#10F5C4]/20 animate-[ping_7s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Nodo 5: Superior Derecho */}
          <div className="absolute top-[20%] right-[20%] flex items-center justify-center opacity-40">
            <div className="absolute w-[120px] h-[120px] rounded-full border-[1px] border-[#10F5C4]/40 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '2s' }}></div>
            <div className="absolute w-[280px] h-[280px] rounded-full border-[1px] border-[#10F5C4]/15 animate-[ping_5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '4.5s' }}></div>
            <div className="absolute w-[150px] h-[150px] bg-[#10F5C4]/10 blur-[50px] rounded-full"></div>
          </div>

          {/* Nodo 6: Inferior Centro */}
          <div className="absolute bottom-[5%] left-[50%] -translate-x-1/2 flex items-center justify-center opacity-25">
            <div className="absolute w-[350px] h-[350px] rounded-full border-[1px] border-teal-500/30 animate-[ping_8s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.8s' }}></div>
          </div>

        </div>
      </div>
        
      {/* --- CAPA 2: Contenido Principal --- */}
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center mt-32">
        
        {/* Título Principal */}
        <h1 
          className="text-[#F9F9F9] font-bold text-[48px] md:text-[72px] leading-[1.1] tracking-[-0.02em] mb-6" 
          dangerouslySetInnerHTML={{ __html: t('home.hero.title') }}
        >
        </h1>
        
        {/* Subtítulo */}
        <p className="text-gray-400 text-[18px] md:text-[20px] font-medium max-w-3xl leading-[1.6] mb-12">
          {t('home.hero.subtitle')}
        </p>
        
        {/* Botón CTA Principal */}
        <button className="w-[200px] h-[48px] bg-[#10F5C4] rounded-lg text-[#10151B] font-semibold text-[16px] leading-[20px] tracking-wide hover:scale-105 transition-transform duration-300 shadow-[0_0_20px_rgba(16,245,196,0.3)]">
          {t('home.hero.cta')}
        </button>
      </div>

    </section>
  );
};