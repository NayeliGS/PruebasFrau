import { useState, useEffect, useRef } from 'react';

export const CardFraudeg1 = () => {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (cardRef.current) {
      observador.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observador.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-[150vh] flex flex-col items-center justify-center bg-black px-4">
      
    
      
      <div
        ref={cardRef}
        className={`w-full max-w-5xl p-10 md:p-14 rounded-[2rem] shadow-2xl flex flex-col md:flex-row gap-10 md:gap-20 transition-colors duration-[3500ms] ease-in-out border ${
          visible
            ? 'bg-[#0B3A36] text-white border-[#0B3A36]' 
            : 'bg-[#EBF3F0] text-[#141A21] border-[#EBF3F0]' 
        }`}
      >
      
        <div className="flex-1 flex flex-col justify-between items-start">
          <p className="text-2xl md:text-[28px] font-medium leading-snug mb-12">
            FraudEG es la plataforma de riesgo para detener el fraude{' '}
            <span className={`transition-colors duration-[4500ms] ${visible ? 'text-gray-400' : 'text-gray-500'}`}>
              antes de que ocurra, con inteligencia artificial, automatización y monitoreo de transacciones.
            </span>
          </p>

          <button
            className={`px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors duration-[3500ms] shadow-md ${
              visible
                ? 'bg-white text-black hover:bg-gray-200'
                : 'bg-[#141A21] text-white hover:bg-gray-800'
            }`}
          >
            Conoce más 
          </button>
        </div>

        
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
          
  <div className="text-center py-4 w-full">
    <h4 className={`text-3xl font-bold transition-colors duration-[3500ms] mb-1 tracking-wide ${visible ? 'text-[#10F5C4]' : 'text-[#065F4C]'}`}>
      {`< 400 ms`}
    </h4>
    <p className={`text-xs transition-colors duration-[3500ms] ${visible ? 'text-gray-400' : 'text-gray-500'}`}>
      Decisión antes del cobro
    </p>
  </div>
  
  
  <hr className={`w-full border-t transition-colors duration-[3500ms] ${visible ? 'border-white/10' : 'border-gray-300'}`} />

  <div className="text-center py-4 w-full">
    <h4 className={`text-3xl font-bold transition-colors duration-[3500ms] mb-1 tracking-wide ${visible ? 'text-[#10F5C4]' : 'text-[#065F4C]'}`}>
      -71%
    </h4>
    <p className={`text-xs transition-colors duration-[3500ms] ${visible ? 'text-gray-400' : 'text-gray-500'}`}>
      Falsos positivos
    </p>
  </div>
  
  <hr className={`w-full border-t transition-colors duration-[3500ms] ${visible ? 'border-white/10' : 'border-gray-300'}`} />

  <div className="text-center py-4 w-full">
    <h4 className={`text-3xl font-bold transition-colors duration-[3500ms] mb-1 tracking-wide ${visible ? 'text-[#10F5C4]' : 'text-[#065F4C]'}`}>
      5.8x
    </h4>
    <p className={`text-xs transition-colors duration-[3500ms] ${visible ? 'text-gray-400' : 'text-gray-500'}`}>
      Retorno por control
    </p>
  </div>

</div>
      </div>
    </div>
  );
};