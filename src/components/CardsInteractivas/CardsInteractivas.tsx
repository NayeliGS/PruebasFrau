import { useState } from 'react';

// Icono SVG de LinkedIn
const LinkedinIcono = () => (
  <svg
    className="w-5 h-5 fill-current text-gray-400 hover:text-white transition-colors"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Componente unitario de la Card con Giro (Flip Card)
const CardGiro = ({ shadowClase = '' }: { shadowClase?: string }) => {
  const [volteada, setVolteada] = useState(false);

  return (
    <div className="w-80 h-96 [perspective:1000px]">
      <div
        className={`relative w-full h-full rounded-2xl transition-all duration-700 [transform-style:preserve-3d] ${shadowClase} ${
          volteada ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* Cara Frontal */}
        <button
          type="button"
          onClick={() => setVolteada(true)}
          aria-label="Tarjeta interactiva con giro: presiona para alternar y ver más detalles"
          className="absolute inset-0 w-full h-full rounded-2xl bg-black flex flex-col items-center justify-between p-6 [backface-visibility:hidden] cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 text-left"
        >
          <span className="text-xs uppercase tracking-wider text-gray-400 self-start">
            
          </span>

          <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span className="text-black font-semibold text-xs tracking-widest uppercase">
              Lorem
            </span>
          </div>

          <div className="w-full text-center">
            <h4 className="text-lg font-bold text-white">Lorem Ipsum Dolor</h4>
            <p className="text-xs text-gray-400 mt-1"></p>
          </div>
        </button>

        {/* Cara Trasera */}
        <div className="absolute inset-0 w-full h-full bg-black text-white rounded-2xl p-6 flex flex-col justify-between [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visitar perfil de LinkedIn"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-5 right-5 z-20 p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer transition-colors"
          >
            <LinkedinIcono />
          </a>

          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              
            </span>
            <h4 className="text-xl font-bold mt-2 mb-3 text-white pr-10">
              Sed Do Eiusmod
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setVolteada(false)}
            className="text-xs text-gray-400 hover:text-white font-semibold self-end cursor-pointer focus:outline-none"
          >
            Volver al frente ↺
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente unitario de la Card con Slide-up
const CardSlideUp = ({ shadowClase = '' }: { shadowClase?: string }) => {
  const [revelada, setRevelada] = useState(false);

  return (
    <div className="w-80 h-96">
      <div
        className={`group relative w-full h-full rounded-2xl overflow-hidden text-left bg-black transition-all duration-500 ${shadowClase}`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
          <div className="w-28 h-28 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
            <span className="text-black font-semibold text-xs tracking-widest uppercase">
              Ipsum
            </span>
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 p-6 pointer-events-none">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
            
          </span>
          <h4 className="text-xl font-bold text-white mt-1">Magna Aliqua</h4>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 max-h-[85%] bg-neutral-950/95 backdrop-blur-md transition-transform duration-500 ease-out flex flex-col justify-start overflow-hidden ${
            revelada
              ? 'translate-y-0'
              : 'translate-y-[calc(100%-3.5rem)] group-hover:translate-y-0'
          }`}
        >
          <button
            type="button"
            onClick={() => setRevelada(!revelada)}
            aria-label="Tarjeta interactiva deslizable: presiona para desplegar la descripción completa"
            aria-expanded={revelada}
            className="h-14 px-6 flex items-center justify-between shrink-0 cursor-pointer w-full text-left focus:outline-none"
          >
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              Biografía
            </span>
            <span className="text-xs text-gray-400">
              {revelada ? '▲ Ocultar' : '▼ Mostrar'}
            </span>
          </button>

          <div className="relative px-6 pb-6 overflow-y-auto">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar perfil de LinkedIn"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-0 right-6 z-20 p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer transition-colors"
            >
              <LinkedinIcono />
            </a>

            <h5 className="text-lg font-bold text-white mb-2 pr-12">
              Excepteur Sint
            </h5>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CardsInteractivas = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-4 flex flex-col gap-20">
      
      {/* ========================================================= */}
      {/* FILA 1: Original (Giro 3D + Slide-up) sin sombra ni borde */}
      {/* ========================================================= */}
      <div className="flex flex-col items-center mt-40 w-full">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white tracking-wide">
            Presentación  /  Contenido
          </h3>
         
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center w-full max-w-4xl">
          <CardGiro shadowClase="shadow-none" />
          <CardSlideUp shadowClase="shadow-none" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* FILA 2: Tres Cards con Giro (Sin shadow, Con shadow, Hover) */}
      {/* ========================================================= */}
      <div className="flex flex-col items-center mt-80 mb-80 w-full">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-white tracking-wide">
            Sombras 
          </h3>
          <p className="text-xs text-gray-400 mt-1">
           
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center w-full">
          {/* Card 1: Sin sombra */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-500 mb-3 uppercase tracking-wider font-semibold">
              Sin Shadow
            </span>
            <CardGiro shadowClase="shadow-none" />
          </div>

          {/* Card 2: Con sombra permanente */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
              Con Shadow Fijo
            </span>
            <CardGiro shadowClase="shadow-[0_0_30px_rgba(255,255,255,0.12)]" />
          </div>

          {/* Card 3: Con sombra al pasar el cursor */}
          <div className="flex flex-col items-center">
            <span className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
              Shadow en Hover
            </span>
            <CardGiro shadowClase="hover:shadow-[0_0_35px_rgba(255,255,255,0.22)]" />
          </div>
        </div>
      </div>

    </section>
  );
};