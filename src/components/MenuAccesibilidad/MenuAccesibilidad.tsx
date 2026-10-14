import { useState } from 'react';
import { useAccesibilidad } from '../../hooks/useAccesibilidad';

export const MenuAccesibilidad = () => {
  
  const { ajustes, alternarAjuste } = useAccesibilidad();
  
  const [abierto, setAbierto] = useState(false);

  const opcionesBooleanas: { clave: keyof typeof ajustes; etiqueta: string }[] = [
    { clave: 'altoContraste', etiqueta: 'Alto Contraste' },
    { clave: 'contrastePlus', etiqueta: 'Contraste +' },
    { clave: 'textoGrande', etiqueta: 'Texto Grande' },
    { clave: 'espaciadoTexto', etiqueta: 'Espaciado de Texto' },
    { clave: 'fuenteDislexia', etiqueta: 'Fuente Dislexia' },
    { clave: 'saturacion', etiqueta: 'Saturación de Colores' },
    { clave: 'informacion', etiqueta: 'Información' },
    { clave: 'alturaLinea', etiqueta: 'Altura de Línea' },
    { clave: 'detenerAnimaciones', etiqueta: 'Detener Animaciones' },
  ];

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50 font-sans flex flex-col items-end">
      {abierto && (
        <div className="mb-4 w-72 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden text-black">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h2 className="font-bold text-lg">Accesibilidad</h2>
            <button 
              onClick={() => setAbierto(false)}
              className="text-white hover:text-gray-200 font-bold"
            >
              ✕
            </button>
          </div>

          <div className="p-4 space-y-3">
            
            {opcionesBooleanas.map(({ clave, etiqueta }) => (
              <div key={clave} className="flex justify-between items-center">
                <span className="text-sm font-medium">{etiqueta}</span>
                <button
                  onClick={() => alternarAjuste(clave)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    ajustes[clave] ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                >
                  <span
                    className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform ${
                      ajustes[clave] ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            ))}

            <div className="pt-3 border-t border-gray-200">
              <span className="text-sm font-medium block mb-2">Alineación</span>
              <div className="flex justify-between gap-2">
                {['left', 'center', 'right', 'justify'].map((alineacion) => (
                  <button
                    key={alineacion}
                    onClick={() => alternarAjuste('alineacion', alineacion)}
                    className={`px-2 py-1 rounded text-xs font-bold uppercase transition-colors ${
                      ajustes.alineacion === alineacion 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {alineacion.slice(0, 1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setAbierto(!abierto)}
        className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all flex items-center justify-center text-3xl ml-auto"
        aria-label="Abrir menú de accesibilidad"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-universal-access-circle" viewBox="0 0 16 16">
  <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"/>
</svg>
      </button>
    </div>
  );
};