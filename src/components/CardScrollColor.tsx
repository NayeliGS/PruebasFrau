import { useState, useEffect, useRef } from 'react';

export const CardScrollColor = () => {
  const [visible, setVisible] = useState(false);
  
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entry]) => {
        
        setVisible(entry.isIntersecting);
      },
      { 
      
        threshold: 0.5 
      }
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
    <div className="flex flex-col items-center py-20 w-full">
      <div
        ref={cardRef}
        className={`w-80 h-96 rounded-2xl shadow-xl flex items-center justify-center border transition-colors duration-3000 ease-in-out ${
          visible 
            ? 'bg-blue-600 text-white border-blue-700' 
            : 'bg-white text-gray-800 border-gray-200'
        }`}
      >
        <h2 className="text-2xl font-bold text-center">
          {visible ? '¡Hola soy un ejemplo!' : 'Color Original'}
        </h2>
      </div>
    </div>
  );
};