import { useState } from 'react';

export const Simulador = () => {
  const [panelCentral, setPanelCentral] = useState({
    titulo: 'Centro de Mando ',
    texto: 'Selecciona un nodo para analizar el flujo de datos.'
  });

  return (
    <div className="relative w-full max-w-4xl h-[500px] mx-auto bg-slate-900 flex items-center justify-center overflow-hidden rounded-3xl p-8">
      
      
      <div className="relative z-10 w-64 h-64 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_60px_rgba(59,130,246,0.3)] flex flex-col items-center justify-center text-center p-6 transition-all duration-500">
        <h3 className="text-xl font-bold text-white mb-2">{panelCentral.titulo}</h3>
        <p className="text-sm text-blue-200">{panelCentral.texto}</p>
      </div>

      
      <button 
        onClick={() => setPanelCentral({ titulo: 'Opción1', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mollis rutrum leo, non tincidunt risus maximus id....' })}
        className="absolute top-20 left-32 w-28 h-28 rounded-full bg-gradient-to-br from-cyan-300 to-blue-600 shadow-[inset_-6px_-6px_15px_rgba(0,0,0,0.4),_0_15px_30px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white font-bold text-sm text-center leading-tight drop-shadow-md"
      >
        Opción1<br/>
      </button>

      
      <button 
        onClick={() => setPanelCentral({ titulo: 'Opción2', texto: 'Aliquam erat volutpat. Quisque rhoncus mollis velit ac vehicula..' })}
        className="absolute bottom-24 right-32 w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-indigo-700 shadow-[inset_-8px_-8px_20px_rgba(0,0,0,0.4),_0_20px_40px_rgba(0,0,0,0.5)] hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white font-bold text-base text-center leading-tight drop-shadow-md"
      >
        Opción2<br/>
      </button>
      
      
      <button 
        onClick={() => setPanelCentral({ titulo: 'Opción3', texto: 'Aliquam consequat ante odio, ac cursus ante scelerisque sagittis.' })}
        className="absolute top-1/3 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-emerald-300 to-teal-600 shadow-[inset_-4px_-4px_10px_rgba(0,0,0,0.4),_0_10px_20px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xs text-center leading-tight drop-shadow-md"
      >
        Opción3<br/>
      </button>
    </div>
  );
};