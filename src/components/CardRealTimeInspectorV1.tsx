export const CardRealTimeInspectorV1 = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 bg-[#141A21] rounded-2xl shadow-xl border border-[#222E3F]">
      
      
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#222E3F] border border-gray-700 flex items-center justify-center p-2 text-sky-400">
            
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12m-1 0a1 1 0 102 0 1 1 0 10-2 0m2-7c-2.76 0-5 2.24-5 5" /></svg>
          </div>
          <div>
            <span className="text-xs uppercase font-mono tracking-wider text-sky-400">TRÁFICO EN VIVO</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">EG Real Time Inspector</h2>
          </div>
        </div>
        
       
        <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#222E3F] bg-[#141A21]">
          <span className="w-2 h-2 rounded-full bg-[#10F5C4]"></span>
          <span className="text-xs font-semibold text-[#F9F9F9]">Operativo</span>
        </div>
      </div>

    
      <div className="space-y-6">
        <p className="text-gray-300 leading-relaxed max-w-4xl">
          El borde sensible a la latencia: puntúa y decide sobre cada transacción al instante, antes de que se mueva el dinero o el inventario.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 pt-4 border-t border-[#222E3F]">
          {[
            { Icono: '⚡', highlight: 'Respuesta sub-100ms:', desc: 'Soporta picos de tráfico mediante comprobaciones síncronas.' },
            { Icono: '🧠', highlight: 'Scoring Híbrido:', desc: 'Combina reglas de checkout con modelos de ML (0-100).' },
            { Icono: '⚖️', highlight: 'Decisiones Modulares:', desc: 'Asigna políticas componibles mapeadas a pagos específicos.' },
            { Icono: '⚙️', highlight: 'Integración Directa:', desc: 'Enruta resultados automatizados a tu orquestación de casos.' },
          ].map(({ Icono, highlight, desc }) => (
            <div key={highlight} className="flex gap-3 items-start">
              
              <div className="text-xl text-[#10F5C4] mt-0.5">{Icono}</div>
              <p className="text-sm text-gray-300">
                <strong className="text-white font-semibold">{highlight}</strong> {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};