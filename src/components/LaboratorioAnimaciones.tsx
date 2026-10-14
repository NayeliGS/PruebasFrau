import { useState } from 'react';

export const LaboratorioAnimaciones = () => {
  
  const [moduloActivo, setModuloActivo] = useState(false);

  return (
    <div className="w-full max-w-6xl mx-auto p-12 bg-[#141A21] rounded-3xl border border-gray-800 my-10 font-sans">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 flex flex-col gap-12 border-r border-gray-800 pr-8">
          
          <div>
            
            <div className="flex text-4xl font-bold text-white transition-all duration-700 ease-in-out h-10 items-center">
              <span className={`overflow-hidden transition-all duration-700 ${moduloActivo ? 'w-0 opacity-0' : 'w-[110px] opacity-100'}`}>
                Fraud
              </span>
              <span className={moduloActivo ? 'text-[#10F5C4]' : ''}>E</span>
              <span className={`overflow-hidden whitespace-nowrap transition-all duration-700 text-white ${moduloActivo ? 'w-[155px] opacity-100 ml-1' : 'w-0 opacity-0 ml-0'}`}>
                xchange 
              </span>
              <span className={moduloActivo ? 'text-[#10F5C4] ml-1' : ''}>G</span>
              <span className={`overflow-hidden transition-all duration-700 text-white ${moduloActivo ? 'w-[90px] opacity-100' : 'w-0 opacity-0'}`}>
                uard
              </span>
            </div>
          </div>
          <div>
            <div className={`text-4xl font-bold w-fit transition-all duration-500 relative ${moduloActivo ? 'text-[#10F5C4] drop-shadow-[0_0_15px_rgba(16,245,196,0.6)]' : 'text-white'}`}>
              Exchange Guard
              <div className={`absolute -bottom-2 left-0 h-[2px] bg-[#10F5C4] shadow-[0_0_8px_#10F5C4] transition-all duration-700 ease-out ${moduloActivo ? 'w-full' : 'w-0'}`} />
            </div>
          </div>

        
          <div>
            <div className="text-4xl font-bold text-white relative overflow-hidden inline-block py-1">
              <span className={`transition-all duration-300 ${moduloActivo ? 'text-gray-300' : 'text-white'}`}>
                Exchange Guard
              </span>
              <div className={`absolute left-0 w-full h-[3px] bg-[#10F5C4] shadow-[0_0_12px_#10F5C4] transition-all duration-[1500ms] ease-in-out ${moduloActivo ? 'top-full opacity-0' : '-top-2 opacity-100'}`} />
            </div>
          </div>

          <div>
            <div className="text-4xl font-bold text-white">
              <span className={`transition-all duration-300 ${moduloActivo ? 'text-[#10F5C4] drop-shadow-[0_0_12px_rgba(16,245,196,0.9)] scale-110 inline-block' : ''}`}>
                E
              </span>
              xchange{' '}
              <span className={`transition-all duration-300 ${moduloActivo ? 'text-[#10F5C4] drop-shadow-[0_0_12px_rgba(16,245,196,0.9)] scale-110 inline-block' : ''}`}>
                G
              </span>
              uard
            </div>
          </div>

        </div>

        
        <div className="w-full md:w-1/2 flex justify-center">
          <div 
            onMouseEnter={() => setModuloActivo(true)}
            onMouseLeave={() => setModuloActivo(false)}
            className={`w-80 h-32 rounded-xl border-2 cursor-pointer flex flex-col justify-center items-center transition-all duration-300 ${moduloActivo ? 'border-[#10F5C4] bg-[#10F5C4]/10 shadow-[0_0_30px_rgba(16,245,196,0.15)]' : 'border-gray-700 bg-transparent'}`}
          >
            <p className={`font-bold transition-colors ${moduloActivo ? 'text-[#10F5C4]' : 'text-white'}`}>
            Ratón por aquí
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};