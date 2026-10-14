

// Icono de Check en Future Green (#10F5C4) [cite: 2]
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#10F5C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export const PricingCardsHighlighter = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-12 bg-[#141A21] rounded-3xl grid md:grid-cols-2 gap-8 font-sans">
      
      {/* TARJETA 1: Plan Demo (Match with Real World & Minimalist) [cite: 5] */}
      <div className="bg-[#222E3F]/40 p-10 rounded-3xl border border-gray-800 flex flex-col transition-all hover:border-[#10F5C4]/30 hover:shadow-[0_0_40px_rgba(16,245,196,0.05)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-extrabold text-white">Plan Demo</h3>
          {/* Badge informativo en Neutral White [cite: 2] */}
          <span className="px-3 py-1 bg-[#141A21] border border-gray-700 rounded-full text-xs font-semibold text-[#F9F9F9]/70">Nivel de Entrada</span>
        </div>
        <p className="text-[#F9F9F9]/70 text-base leading-relaxed mb-10 h-16">
          Prueba la potencia de FraudEG. Plan asignado automáticamente al registrar la empresa. Caduca en 30 días.
        </p>

        {/* LÍMITES DESTACADOS (Nielsen H6: Recognition) [cite: 5] */}
        <div className="mb-12 space-y-6">
          {[
            { Icono: '📄', principal: '1 archivo/día', detalle: 'Límite de archivos diarios' },
            { Icono: '💾', principal: '500 MB', detalle: 'Tamaño máximo por archivo' },
            { Icono: '🔢', principal: '5,000 filas/archivo', detalle: 'Máximo volumen de datos' },
            { Icono: '👥', principal: 'Hasta 2 miembros', detalle: 'Usuarios en el equipo' },
          ].map(({ Icono, principal, detalle }) => (
            <div key={principal} className="flex items-center gap-4 bg-[#141A21] p-4 rounded-xl border border-gray-800">
              <span className="text-2xl">{Icono}</span>
              <div>
                <strong className="text-white text-base block font-semibold">{principal}</strong>
                <span className="text-xs text-[#F9F9F9]/50">{detalle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* BENEFICIOS QUE OBTIENES AL REGISTRARTE */}
        <div className="mb-12">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">Beneficios Incluidos:</h4>
            <div className="space-y-4">
              {[
                'Analítica avanzada',
                'Smart Monitor',
                'Reportes de fraude con IA',
                'API de transacciones en tiempo real'
              ].map(beneficio => (
                <div key={beneficio} className="flex items-center gap-3">
                  <CheckIcon />
                  <span className="text-sm text-gray-300">{beneficio}</span>
                </div>
              ))}
            </div>
        </div>

        {/* Botón CTA principal en Future Green (#10F5C4) [cite: 2] */}
        <button className="mt-auto w-full bg-[#10F5C4] text-[#141A21] font-extrabold text-base py-4 rounded-xl shadow-lg transition-transform hover:scale-105">
          Comenzar Gratis ➔
        </button>
      </div>

      {/* TARJETA 2: Plan Enterprise (Enterprise / Real World) [cite: 5] */}
      <div className="bg-[#222E3F]/40 p-10 rounded-3xl border-2 border-[#10F5C4]/40 flex flex-col shadow-[0_0_40px_rgba(16,245,196,0.1)]">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-extrabold text-white">Enterprise</h3>
          <span className="px-3 py-1 bg-[#10F5C4]/20 border border-[#10F5C4]/30 rounded-full text-xs font-semibold text-[#10F5C4]">Personalizado</span>
        </div>
        <p className="text-[#F9F9F9]/70 text-base leading-relaxed mb-10 h-16">
          Diseñado para equipos con alto volumen de transacciones o necesidades específicas de cumplimiento normativo.
        </p>

        {/* LISTA DE BENEFICIOS (Nielsen H8: Minimalist) [cite: 5] */}
        <div className="mb-12 pt-8 border-t border-gray-800 flex-grow">
          <div className="space-y-5">
            {[
              'Archivos y transacciones ilimitados',
              'Límites de tamaño de archivo a medida',
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
        </div>

        {/* Botón CTA secundario en Future Green delineado [cite: 2] */}
        <button className="mt-auto w-full bg-transparent border-2 border-[#10F5C4] text-[#10F5C4] font-extrabold text-base py-4 rounded-xl transition-all hover:bg-[#10F5C4] hover:text-[#141A21]">
          Hablar con Ventas ✉️
        </button>
      </div>

    </div>
  );
};