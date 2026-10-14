export const CardRealTimeInspectorV2 = () => {
  return (
   
    <div className="w-full max-w-5xl mx-auto p-8 bg-[#141A21] rounded-2xl shadow-xl border border-[#222E3F]">
      
      
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#222E3F]">
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

      
      <div className="flex flex-col md:flex-row gap-8">
        
        
        <div className="w-full md:w-2/3 space-y-5">
          <p className="text-gray-300 leading-relaxed font-medium">
            El borde sensible a la latencia: puntúa y decide al llegar a tu stack, protegiendo inventario y capital antes de que se procesen.
          </p>
          
         
          <ul className="list-disc list-outside pl-5 space-y-2 text-sm text-gray-400">
            <li>Combina reglas con scores de ML.</li>
            <li>Enruta resultados (aprobar, retener, bloquear).</li>
            <li>Reglas componibles mapeadas a pagos o checkout.</li>
            <li>Resultados automatizados conectados a tu orquestación.</li>
          </ul>
        </div>

        
        <div className="w-full md:w-1/3 bg-[#222E3F] rounded-xl p-5 border border-gray-700">
          <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Métricas Técnicas</h4>
          
          <div className="space-y-4">
            {[
              { label: 'Latencia Esperada', value: '< 100ms' },
              { label: 'Bandas de Riesgo', value: '0 – 100' },
              { label: 'Integración', value: 'Síncrona' },
            ].map(({ label, value }) => (
              <div key={label} className="pb-3 border-b border-gray-700 last:border-0 last:pb-0">
                <span className="text-xs text-gray-400">{label}</span>
                <p className="text-xl font-bold text-[#10F5C4] mt-0.5">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};