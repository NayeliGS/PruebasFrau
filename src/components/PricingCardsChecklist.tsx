


const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#10F5C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);


const LimitIcon = () => (
  <svg className="w-5 h-5 text-gray-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

export const PricingCardsChecklist = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-12 bg-[#141A21] rounded-3xl font-sans text-white border border-gray-800 shadow-2xl">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">Planes diseñados para tu crecimiento</h2>
        <p className="text-[#F9F9F9]/70 text-lg leading-relaxed">Simplificamos la estructura de precios para que elijas el plan que mejor se adapte a tu volumen de transacciones</p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-gray-800 rounded-2xl border border-gray-800 overflow-hidden">
        
        <div className="bg-[#141A21] p-10 flex flex-col">
          <div className="mb-12 h-32">
            <h3 className="text-3xl font-extrabold mb-4">Plan Demo</h3>
            <p className="text-[#F9F9F9]/70 text-base leading-relaxed h-16">Acceso automático al registrar la empresa. Caduca en 30 días para evaluar la plataforma.</p>
          </div>

          <div className="space-y-6 flex-grow mb-12">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Volumen y Límites (H6 Recognition) </h4>
            {[
              { label: 'Archivos/día', demo: '1 archivo', ent: 'Ilimitado' },
              { label: 'Tamaño/archivo', demo: '500 MB', ent: 'Ilimitado' },
              { label: 'Filas/archivo', demo: '5,000 filas', ent: 'Ilimitado' },
              { label: 'Miembros', demo: 'Hasta 2', ent: 'Ilimitado' },
            ].map(metric => (
              <div key={metric.label} className="flex justify-between items-center py-3 border-b border-gray-800/50">
                <span className="text-gray-300 text-sm font-medium">{metric.label}</span>
                <span className="text-white text-base font-semibold">{metric.demo}</span>
              </div>
            ))}
          </div>

          <div className="space-y-5 flex-grow mb-16">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Beneficios Incluidos</h4>
            {[
              'Analítica avanzada',
              'Smart Monitor',
              'Reportes de fraude con IA',
              'API de transacciones en tiempo real',
              { label: 'Soporte dedicado y SLA', demo: false },
              { label: 'Onboarding personalizado', demo: false },
            ].map(beneficio => (
              <div key={typeof beneficio === 'string' ? beneficio : beneficio.label} className="flex items-center gap-4">
                {typeof beneficio === 'string' || beneficio.demo ? <CheckIcon /> : <LimitIcon />}
                <span className={`text-base ${typeof beneficio === 'string' ? 'text-gray-200' : 'text-gray-600'}`}>
                  {typeof beneficio === 'string' ? beneficio : beneficio.label}
                </span>
              </div>
            ))}
          </div>

          <button className="mt-auto w-full bg-[#10F5C4] text-[#141A21] font-extrabold text-base py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
            Comenzar Gratis
          </button>
        </div>

       
        <div className="bg-[#141A21] p-10 flex flex-col border-2 border-[#10F5C4]/20 rounded-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-3xl font-extrabold text-[#10F5C4]">Enterprise</h3>
            <span className="px-3 py-1 bg-[#10F5C4]/20 border border-[#10F5C4]/30 rounded-full text-xs font-semibold text-[#10F5C4]">Personalizado</span>
          </div>
          <p className="text-[#F9F9F9]/70 text-base leading-relaxed mb-12 h-16">Diseñado para equipos con alto volumen de transacciones o necesidades específicas de cumplimiento.</p>

          <div className="space-y-6 flex-grow mb-12">
            <h4 className="text-sm font-bold text-[#10F5C4] uppercase tracking-wider">Volumen y Límites (H2 Real World) </h4>
            {[
              { label: 'Archivos/día', ent: 'Ilimitado' },
              { label: 'Tamaño/archivo', ent: 'A medida' },
              { label: 'Filas/archivo', ent: 'A medida' },
              { label: 'Miembros', ent: 'Ilimitado' },
            ].map(metric => (
              <div key={metric.label} className="flex justify-between items-center py-3 border-b border-gray-800/50">
                <span className="text-gray-300 text-sm font-medium">{metric.label}</span>
                <span className="text-[#10F5C4] text-base font-semibold">{metric.ent}</span>
              </div>
            ))}
          </div>

          <div className="space-y-5 flex-grow mb-16 pt-3 border-t border-gray-800">
            <h4 className="text-sm font-bold text-[#10F5C4] uppercase tracking-wider mb-5">Integración y Soporte</h4>
            {[
              'Miembros del equipo ilimitados',
              'Integraciones y acceso a la API a medida',
              'Soporte dedicado y SLA',
              'Onboarding personalizado'
            ].map(beneficio => (
              <div key={beneficio} className="flex items-center gap-4">
                <CheckIcon />
                <span className="text-base text-gray-200">{beneficio}</span>
              </div>
            ))}
          </div>

          <button className="mt-auto w-full bg-transparent border-2 border-[#10F5C4] text-[#10F5C4] font-extrabold text-base py-4 rounded-xl transition-all hover:bg-[#10F5C4] hover:text-[#141A21]">
            Hablar con Ventas
          </button>
        </div>

      </div>
    </div>
  );
};