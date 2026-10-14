import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center p-6 mt-10 font-sans">
    
      <div className="w-full max-w-[1300px] relative">
      
        <div className="absolute -top-16 -left-16 w-80 h-80 bg-[#10F5C4]/25 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-[#10F5C4]/25 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <footer className="relative z-10 w-full bg-[#050709] border border-white/5 rounded-3xl py-12 px-8 md:px-16 flex flex-col shadow-2xl">
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-16">
            
            <div className="md:col-span-2 flex flex-col gap-6 md:pr-16">
              <div className="flex items-center gap-2 cursor-pointer">
                <span className="text-[#F9F9F9] font-bold text-2xl tracking-wide">
                  Fraud<span className="text-[#10F5C4]">EG</span>
                </span>
              </div>
             
              <p className="text-base font-normal leading-6 text-[#F9F9F9] max-w-sm">
                {t('footer.description')}
              </p>
            </div>

            <div className="flex flex-col gap-5">
             
              <h4 className="text-lg font-bold leading-7 text-[#A1A8B0] tracking-wider">{t('footer.product')}</h4>
          
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.solutions')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.integrations')}</a>
            </div>

            <div className="flex flex-col gap-5">
            
              <h4 className="text-lg font-bold leading-7 text-[#A1A8B0] tracking-wider">{t('footer.company')}</h4>
              
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.aboutUs')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.investors')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.contact')}</a>
            </div>

            <div className="flex flex-col gap-5">
          
              <h4 className="text-lg font-bold leading-7 text-[#A1A8B0] tracking-wider">{t('footer.legal')}</h4>
              
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.cookies')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.security')}</a>
            </div>
            
          </div>

          <div className="pt-8 border-t border-white/10 flex items-center">
            <p className="text-xs text-gray-500">
              {t('footer.copyright')}
            </p>
          </div>
          
        </footer>

      </div>
    </div>
  );
};