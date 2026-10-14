import { useTranslation } from 'react-i18next';

export const HeroSolutions = () => {
  const { t } = useTranslation();

  const modules = [
    { id: 'tracker', label: t('hero.tab1'), isActive: true },
    { id: 'inspector', label: t('hero.tab2'), isActive: false },
    { id: 'monitor', label: t('hero.tab3'), isActive: false },
    { id: 'intelligence', label: t('hero.tab4'), isActive: false },
  ];

  return (
    <section className="w-full flex flex-col items-center mt-20 px-6 font-sans relative pb-16">
      
     
      <div className="w-[300px] md:w-[500px] h-[120px] border-2  border-[#10F5C4]/30 bg-[#10F5C4]/5 rounded-2xl flex items-center justify-center mb-10">
        <span className="text-[#10F5C4] font-semibold tracking-widest uppercase text-sm">
          [ Animación ]
        </span>
      </div>

      <p className="text-gray-400 text-center max-w-3xl text-xl font-medium leading-7 mb-12">
        {t('hero.subtitle')}
      </p>

      <div className="w-full max-w-4xl h-[4px] bg-gradient-to-r from-transparent via-white/15 to-transparent mb-16"></div>

      <div className="sticky top-4 z-50 w-full max-w-5xl mx-auto flex items-center max-sm:flex-col justify-start md:justify-center gap-2 md:gap-4 rounded-2xl shadow-2xl px-4 py-3 border-none ">
        {modules.map((mod) => (
          <a
            href={`#${mod.id}`}
            key={mod.id}
            
            className={`shrink-0 w-auto px-6 h-[48px] flex items-center justify-center rounded-lg text-lg font-semibold leading-6 whitespace-nowrap transition-all duration-300 scroll-smooth border-none outline-none ${
              mod.isActive
                ? 'bg-[#10F5C4] text-[#050709] shadow-[0_0_20px_rgba(16,245,196,0.15)]'
                : 'bg-transparent text-gray-400 hover:text-[#F9F9F9]'
            }`}
          >
            {mod.label}
          </a>
        ))}
      </div>
      
    </section>
  );
};