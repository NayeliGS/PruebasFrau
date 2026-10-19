import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export const SolutionsCatalog1 = () => {
  return (
    // Se elimina px-6 para permitir que el fondo de las cards toque los bordes de la pantalla
    <section className="w-full flex flex-col items-center gap-3 py-16 font-sans overflow-hidden">
      <BatchCard />
      <LiveCard />
      <MonitorCard />
      <PatternsCard />
    </section>
  );
};

const BatchCard = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.4 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <div
      id="tracker"
      ref={cardRef}
      // Contenedor externo: w-full sin max-w para abarcar toda la pantalla
      className={`w-full p-10 md:p-14 rounded-none rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl transition-colors duration-[5000ms] ease-in-out border scroll-mt-40 ${
        isVisible ? 'bg-[#141A21] text-white border-[#222E3F]' : 'bg-[#EBF3F0] text-[#141A21] border-[#EBF3F0]'
      }`}
    >
      {/* Contenedor interno: max-w-6xl mx-auto para centrar el contenido */}
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[32px] font-bold leading-[46px] tracking-[-0.01em] mb-4">
            {t('solutionsCatalog.batch.title')}
          </h2>
          <p className={`mb-8 text-lg font-medium leading-7 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-300' : 'text-gray-800'}`}>
            {t('solutionsCatalog.batch.description')}
          </p>
          <ul className="space-y-4">
            {(t('solutionsCatalog.batch.bullets', { returnObjects: true }) as string[]).map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 shrink-0 transition-colors duration-[5000ms] ${isVisible ? 'text-[#10F5C4]' : 'text-[#065F4C]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`text-base font-normal leading-6 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-400' : 'text-gray-700'}`}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-green-300 via-teal-400 to-cyan-300 shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

const LiveCard = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.4 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <div
      id="inspector"
      ref={cardRef}
      className={`w-full p-10 md:p-14 rounded-none rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl transition-colors duration-[5000ms] ease-in-out border scroll-mt-40 ${
        isVisible ? 'bg-[#EBF3F0] text-[#141A21] border-[#EBF3F0]' : 'bg-[#141A21] text-white border-[#222E3F]'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[32px] font-bold leading-[46px] tracking-[-0.01em] mb-4">
            {t('solutionsCatalog.live.title')}
          </h2>
          <p className={`mb-8 text-lg font-medium leading-7 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-800' : 'text-gray-300'}`}>
            {t('solutionsCatalog.live.description')}
          </p>
          <ul className="space-y-4">
            {(t('solutionsCatalog.live.bullets', { returnObjects: true }) as string[]).map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 shrink-0 transition-colors duration-[5000ms] ${isVisible ? 'text-[#065F4C]' : 'text-[#10F5C4]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`text-base font-normal leading-6 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-700' : 'text-gray-400'}`}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-cyan-300 to-blue-500 shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

const MonitorCard = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.4 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <div
      id="monitor"
      ref={cardRef}
      className={`w-full p-10 md:p-14 rounded-none rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl transition-colors duration-[5000ms] ease-in-out border scroll-mt-40 ${
        isVisible ? 'bg-[#141A21] text-white border-[#222E3F]' : 'bg-[#EBF3F0] text-[#141A21] border-[#EBF3F0]'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[32px] font-bold leading-[46px] tracking-[-0.01em] mb-4">
            {t('solutionsCatalog.monitor.title')}
          </h2>
          <p className={`mb-8 text-lg font-medium leading-7 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-300' : 'text-gray-800'}`}>
            {t('solutionsCatalog.monitor.description')}
          </p>
          <ul className="space-y-4">
            {(t('solutionsCatalog.monitor.bullets', { returnObjects: true }) as string[]).map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 shrink-0 transition-colors duration-[5000ms] ${isVisible ? 'text-[#10F5C4]' : 'text-[#065F4C]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`text-base font-normal leading-6 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-400' : 'text-gray-700'}`}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};

const PatternsCard = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.4 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => { if (cardRef.current) observer.unobserve(cardRef.current); };
  }, []);

  return (
    <div
      id="intelligence"
      ref={cardRef}
      className={`w-full p-10 md:p-14 rounded-none rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl transition-colors duration-[5000ms] ease-in-out border scroll-mt-40 ${
        isVisible ? 'bg-[#EBF3F0] text-[#141A21] border-[#EBF3F0]' : 'bg-[#141A21] text-white border-[#222E3F]'
      }`}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-10">
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-[32px] font-bold leading-[46px] tracking-[-0.01em] mb-4">
            {t('solutionsCatalog.patterns.title')}
          </h2>
          <p className={`mb-8 text-lg font-medium leading-7 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-800' : 'text-gray-300'}`}>
            {t('solutionsCatalog.patterns.description')}
          </p>
          <ul className="space-y-4">
            {(t('solutionsCatalog.patterns.bullets', { returnObjects: true }) as string[]).map((text, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 shrink-0 transition-colors duration-[5000ms] ${isVisible ? 'text-[#065F4C]' : 'text-[#10F5C4]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className={`text-base font-normal leading-6 transition-colors duration-[5000ms] ${isVisible ? 'text-gray-700' : 'text-gray-400'}`}>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-72 rounded-2xl bg-gradient-to-br from-orange-300 to-amber-500 shadow-inner"></div>
        </div>
      </div>
    </div>
  );
};