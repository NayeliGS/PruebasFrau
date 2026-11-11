import { useTranslation } from 'react-i18next';

export const HeroPlans = () => {
  const { t } = useTranslation();
  const tiers = ['essential', 'growth', 'pro', 'scale', 'enterprise'];
  const productColors = ['bg-[#10F5C4]', 'bg-orange-400', 'bg-pink-500', 'bg-blue-400'];

  const comparisonSections = [
    {
      title: t('plans.comparison.solutions.title'),
      subtitle: t('plans.comparison.solutions.subtitle'),
      rows: [
        { name: t('plans.comparison.rows.historicalTracker'), values: [true, true, true, true, true] },
        { name: t('plans.comparison.rows.realTimeInspector'), values: [false, true, true, true, true] },
        { name: t('plans.comparison.rows.smartMonitor'), values: [false, false, true, true, true] },
        { name: t('plans.comparison.rows.fraudIntelligence'), values: [false, false, false, true, true] },
      ],
    },
    {
      title: t('plans.comparison.capacity.title'),
      subtitle: t('plans.comparison.capacity.subtitle'),
      rows: [
        { 
          name: t('plans.comparison.rows.transactions'), 
          values: ['50K', '250K', '1M', '5M', t('plans.comparison.values.custom')] 
        },
        { 
          name: t('plans.comparison.rows.users'), 
          values: ['3', '10', '25', t('plans.comparison.values.unlimited'), t('plans.comparison.values.unlimited')] 
        },
        { 
          name: t('plans.comparison.rows.retention'), 
          values: [
            t('plans.comparison.values.6months'),
            t('plans.comparison.values.12months'),
            t('plans.comparison.values.24months'),
            t('plans.comparison.values.36months'),
            t('plans.comparison.values.custom')
          ] 
        },
      ],
    },
    {
      title: t('plans.comparison.features.title'),
      subtitle: t('plans.comparison.features.subtitle'),
      rows: [
        { name: t('plans.comparison.rows.customRules'), values: [false, true, true, true, true] },
        { name: t('plans.comparison.rows.realTimeApi'), values: [false, true, true, true, true] },
        { name: t('plans.comparison.rows.alerts'), values: [false, false, true, true, true] },
        { name: t('plans.comparison.rows.customModels'), values: [false, false, false, true, true] },
        { name: t('plans.comparison.rows.dedicatedDeploy'), values: [false, false, false, false, true] },
      ],
    },
    {
      title: t('plans.comparison.support.title'),
      subtitle: t('plans.comparison.support.subtitle'),
      rows: [
        { 
          name: t('plans.comparison.rows.supportChannel'), 
          values: [
            t('plans.comparison.values.email'),
            t('plans.comparison.values.businessHours'),
            t('plans.comparison.values.priority'),
            '24/7',
            t('plans.comparison.values.dedicated247')
          ] 
        },
        { name: t('plans.comparison.rows.accountManager'), values: [false, false, true, true, true] },
        { 
          name: t('plans.comparison.rows.sla'), 
          values: [false, '99,5%', '99,5%', '99,9%', t('plans.comparison.values.custom')] 
        },
        { name: t('plans.comparison.rows.onboarding'), values: [false, true, true, true, true] },
      ],
    },
  ];

  const renderCellValue = (val: boolean | string) => {
    if (typeof val === 'boolean') {
      return val ? (
        <svg className="w-[18px] h-[18px] text-[#10F5C4] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ) : (
        <span className="text-[#A1A8B0] font-mono text-[14px] select-none">-</span>
      );
    }
    return <span className="text-[#D0D5DD] font-mono text-[13px] md:text-[14px] tracking-tight">{val}</span>;
  };

  return (
    <section className="relative w-full bg-[#0B0E12] flex flex-col items-center pt-32 pb-24 px-6 font-sans overflow-hidden">
      
     
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[1150px] z-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 55% 45% at 42% 45%, rgba(0, 111, 255, 0.14) 0%, rgba(0, 111, 255, 0.04) 45%, transparent 75%),
            radial-gradient(ellipse 65% 45% at 61% 48%, rgba(0, 225, 198, 0.11) 0%, rgba(0, 170, 160, 0.06) 35%, transparent 75%),
            radial-gradient(ellipse 55% 35% at 95% 50%, rgba(0, 125, 125, 0.09) 0%, transparent 70%),
            linear-gradient(180deg, #071115 0%, #0b1b20 45%, #0B0E12 100%)
          `,
          transform: 'translate3d(0, 0, 0)'
        }}
      ></div>

    
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[1150px] z-[1] pointer-events-none opacity-25 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')]"
      ></div>
      
      
      <div 
        className="absolute top-0 left-0 right-0 w-full h-[1150px] z-[2] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, transparent 45%, rgba(11, 14, 18, 0.75) 75%, #0B0E12 100%)'
        }}
      ></div>

      <div className="absolute w-40 inset-0 z-[1] pointer-events-none opacity-40 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-overlay"></div>
      
      

      <div className="relative z-10 w-full flex flex-col items-center">
        
        <div className="flex flex-col items-center w-full max-w-4xl text-center mb-16">
          <h1 className="text-white font-semibold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.01em] mb-6">
            {t('plans.heroTitle')} <span className="text-[#10F5C4]">{t('plans.heroPrice')}</span>
          </h1>
          <p className="text-[#A1A8B0] text-[18px] md:text-[20px] font-medium leading-[28px] max-w-2xl">
            {t('plans.heroSubtitle')}
          </p>
        </div>

        <div className="w-full max-w-[1400px] flex flex-col xl:grid xl:grid-cols-5 gap-6 pb-8">
          {tiers.map((tierKey) => {
            const isPro = tierKey === 'pro';

            return (
              <div 
                key={tierKey} 
                className={`flex flex-col w-full p-8 rounded-[2rem] transition-transform hover:-translate-y-2 border ${
                  isPro 
                    ? 'bg-[#10151B]/95 border-[#10F5C4]/30 shadow-[0_0_30px_rgba(16,245,196,0.05)]' 
                    : 'bg-[#10151B]/95 border-white/5 hover:border-white/10'
                }`}
              >
                <h3 className="text-white text-[24px] font-bold mb-3">
                  {t(`plans.${tierKey}.name`)}
                </h3>
                <p className="text-[#A1A8B0] text-[14px] leading-[22px] min-h-[66px] mb-6">
                  {t(`plans.${tierKey}.desc`)}
                </p>
                
                <div className="text-white font-semibold text-[16px] leading-[24px] mb-6 whitespace-pre-line min-h-[48px]">
                  {t(`plans.${tierKey}.capacity`)}
                </div>

                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#10F5C4] to-transparent opacity-60 mb-6"></div>

                <span className="text-[#475467] text-[12px] uppercase tracking-widest font-semibold mb-6 block">
                  {t('plans.solutionsLabel')}
                </span>

                <ul className="flex flex-col gap-4 mb-8">
                  {(t(`plans.${tierKey}.coreFeatures`, { returnObjects: true }) as string[]).map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-white text-[14px] font-medium">
                      <span className={`w-2 h-2 rounded-full shrink-0 ${productColors[i % productColors.length]}`}></span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-col gap-4 mt-auto pt-4">
                  {(t(`plans.${tierKey}.extraFeatures`, { returnObjects: true }) as string[]).map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#10F5C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#A1A8B0] text-[14px] leading-[22px]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="w-full max-w-[1400px] mt-24 flex flex-col items-start">
          
          <h2 className="text-white font-semibold text-[28px] md:text-[36px] leading-[1.2] tracking-[-0.01em] mb-10 text-left">
            {t('plans.comparison.mainTitle')}
          </h2>

          <div className="w-full overflow-x-auto rounded-2xl border border-white/[0.07] bg-[#0E1318] shadow-2xl">
            <div className="min-w-[900px] w-full flex flex-col">
              
              <div className="grid grid-cols-6 bg-[#1C222B] px-8 py-6 border-b border-white/[0.07] items-center">
                <div className="col-span-1"></div>
                {tiers.map((tierKey) => (
                  <div key={tierKey} className="col-span-1 text-white font-bold text-[18px] text-left">
                    {t(`plans.${tierKey}.name`)}
                  </div>
                ))}
              </div>

              {comparisonSections.map((section, sIdx) => (
                <div key={sIdx} className="flex flex-col">
                  
                  <div className="px-8 pt-8 pb-6 border-b border-white/[0.06] bg-[#0E1318]">
                    <h3 className="text-[#10F5C4] font-bold text-[18px] mb-1.5">
                      {section.title}
                    </h3>
                    <p className="text-[#8E959E] text-[12px] leading-[18px] whitespace-pre-line">
                      {section.subtitle}
                    </p>
                  </div>

                  {section.rows.map((row, rIdx) => (
                    <div 
                      key={rIdx} 
                      className="grid grid-cols-6 px-8 py-5 border-b border-white/[0.06] items-center hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="col-span-1 pr-6 text-[#F9F9F9] font-medium text-[14px] leading-[20px] whitespace-pre-line">
                        {row.name}
                      </div>

                      {row.values.map((val, vIdx) => (
                        <div key={vIdx} className="col-span-1 flex items-center justify-start">
                          {renderCellValue(val)}
                        </div>
                      ))}
                    </div>
                  ))}

                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};