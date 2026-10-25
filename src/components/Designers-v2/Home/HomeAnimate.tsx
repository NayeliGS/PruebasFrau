

export const HomeAnimate = () => {
  return (
    <section className="min-h-screen bg-[#0B0E12] p-10 font-sans text-[#F9F9F9]">
      
      {/* Estilos personalizados para animaciones complejas */}
      <style>{`
        @keyframes scanX {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes dataStream {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes glitch {
          0%, 100% { transform: translate(0); opacity: 1; }
          20% { transform: translate(-2px, 2px); opacity: 0.8; }
          40% { transform: translate(-2px, -2px); opacity: 0.9; }
          60% { transform: translate(2px, 2px); opacity: 1; }
          80% { transform: translate(2px, -2px); opacity: 0.8; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#10F5C4] mb-12 uppercase tracking-widest">
          Librería de Micro-Animaciones
        </h2>

        {/* Cuadrícula de 15 Animaciones */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {/* 1. Pulso de Estado (Live) */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="relative flex items-center justify-center w-8 h-8 mb-4">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#10F5C4] opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10F5C4]"></span>
            </div>
            <span className="text-xs text-gray-400">Live Pulse</span>
          </div>

          {/* 2. Anillo de Radar Mini */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 mb-4 border-2 border-[#10F5C4]/20 border-t-[#10F5C4] rounded-full animate-spin"></div>
            <span className="text-xs text-gray-400">Radar Ring</span>
          </div>

          {/* 3. Escáner Horizontal */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
            <div className="relative w-16 h-8 border border-[#10F5C4]/30 rounded mb-4 overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#10F5C4]/60 shadow-[0_0_8px_#10F5C4]" style={{ animation: 'scanX 2s ease-in-out infinite' }}></div>
            </div>
            <span className="text-xs text-gray-400">Box Scanner</span>
          </div>

          {/* 4. Flujo de Datos (Data Stream) */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
            <div className="flex gap-2 mb-4 h-10 overflow-hidden">
              <div className="w-1 h-full bg-[#10F5C4]/80 rounded-full" style={{ animation: 'dataStream 1s linear infinite' }}></div>
              <div className="w-1 h-full bg-[#10F5C4]/40 rounded-full" style={{ animation: 'dataStream 1.5s linear infinite 0.2s' }}></div>
              <div className="w-1 h-full bg-[#10F5C4]/60 rounded-full" style={{ animation: 'dataStream 1.2s linear infinite 0.5s' }}></div>
            </div>
            <span className="text-xs text-gray-400">Data Stream</span>
          </div>

          {/* 5. Órbita Cíber */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="relative w-10 h-10 mb-4 animate-[spin_3s_linear_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#10F5C4] rounded-full shadow-[0_0_5px_#10F5C4]"></div>
              <div className="absolute inset-2 border border-dashed border-[#10F5C4]/40 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">Cyber Orbit</span>
          </div>

          {/* 6. Hexágono Flotante */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 mb-4 animate-[bounce_3s_infinite]">
              <svg viewBox="0 0 24 24" className="w-full h-full text-[#10F5C4] drop-shadow-[0_0_5px_rgba(16,245,196,0.5)]" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
              </svg>
            </div>
            <span className="text-xs text-gray-400">Float Hex</span>
          </div>

          {/* 7. Texto Glitch */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="mb-4 text-[#10F5C4] font-bold tracking-widest" style={{ animation: 'glitch 3s infinite' }}>
              SECURE
            </div>
            <span className="text-xs text-gray-400">Glitch Text</span>
          </div>

          {/* 8. Ondas de Señal (WiFi tech) */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex flex-col items-center justify-end h-10 gap-1 mb-4">
              <div className="w-8 h-1 bg-[#10F5C4] rounded-full animate-pulse"></div>
              <div className="w-5 h-1 bg-[#10F5C4] rounded-full animate-[pulse_2s_infinite]"></div>
              <div className="w-2 h-1 bg-[#10F5C4] rounded-full animate-[pulse_1.5s_infinite]"></div>
            </div>
            <span className="text-xs text-gray-400">Signal Waves</span>
          </div>

          {/* 9. Puntos de Conexión */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center justify-center w-full h-10 mb-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-[#10F5C4] animate-[bounce_1.4s_infinite]"></div>
              <div className="w-2 h-2 rounded-full bg-[#10F5C4] animate-[bounce_1.4s_infinite_0.2s]"></div>
              <div className="w-2 h-2 rounded-full bg-[#10F5C4] animate-[bounce_1.4s_infinite_0.4s]"></div>
            </div>
            <span className="text-xs text-gray-400">Loading Dots</span>
          </div>

          {/* 10. Cursor de Terminal */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="flex items-center mb-4 h-10 text-[#10F5C4] font-mono text-xl">
              <span>&gt;_</span>
              <span className="w-3 h-5 bg-[#10F5C4] ml-1 animate-[ping_1s_steps(2,start)_infinite]"></span>
            </div>
            <span className="text-xs text-gray-400">Terminal</span>
          </div>

          {/* 11. Escudo Latiendo */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-10 h-10 mb-4 text-[#10F5C4] animate-[pulse_2s_ease-in-out_infinite] drop-shadow-[0_0_8px_rgba(16,245,196,0.6)]">
              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xs text-gray-400">Breathing Shield</span>
          </div>

          {/* 12. Marco Parpadeante */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-12 h-10 mb-4 border border-[#10F5C4] rounded bg-[#10F5C4]/10 animate-[pulse_1s_infinite]"></div>
            <span className="text-xs text-gray-400">Pulse Frame</span>
          </div>

          {/* 13. Nodos en Red */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="relative w-12 h-12 mb-4 animate-[spin_8s_linear_infinite]">
              <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></div>
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></div>
              <div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-[#10F5C4] rounded-full"></div>
              <div className="absolute inset-1/2 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border border-[#10F5C4]/30 rounded-full"></div>
            </div>
            <span className="text-xs text-gray-400">Mesh Nodes</span>
          </div>

          {/* 14. Línea de Carga */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="w-16 h-1 bg-white/10 rounded-full mb-4 overflow-hidden">
              <div className="h-full bg-[#10F5C4] w-1/2 rounded-full animate-[bounce_2s_infinite_alternate]" style={{ transformOrigin: 'left' }}></div>
            </div>
            <span className="text-xs text-gray-400">Load Line</span>
          </div>

          {/* 15. Destello Central (Core Spark) */}
          <div className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors">
            <div className="relative w-10 h-10 mb-4 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#10F5C4] blur-md rounded-full animate-[ping_3s_infinite]"></div>
              <div className="w-3 h-3 bg-white rounded-full z-10 shadow-[0_0_10px_white]"></div>
            </div>
            <span className="text-xs text-gray-400">Core Spark</span>
          </div>

        </div>
      </div>
    </section>
  );
};