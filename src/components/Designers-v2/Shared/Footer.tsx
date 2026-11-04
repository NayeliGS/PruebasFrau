import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex justify-center p-6 mt-10 font-sans overflow-hidden">
      
      <div className="w-full max-w-[1300px] relative">
      
        {/* --- NUEVO: Degradado central superior para resaltar los círculos --- */}
        <div className="absolute -top- left-1/2 -translate-x-1/2 w-[350px] h-[350px] bg-[#10F5C4]/20 blur-[120px] rounded-full pointer-events-none z-0"></div>

        {/* Degradados existentes */}
        <div className="absolute -bottom-1 -left-26 w-90 h-80 bg-[#10F5C4]/25 blur-[100px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute -bottom-16 -right-17 w-90 h-80 bg-[#10F5C4]/25 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        <footer className="relative z-10 w-full bg-[#050709] border border-white/5 rounded-3xl py-12 px-8 md:px-16 flex flex-col shadow-2xl mt-8">
          
          {/* --- Círculos sobresaliendo del footer con Redes Sociales --- */}
          <div className="absolute -top-[36px] left-1/2 -translate-x-1/2 flex gap-6 z-20">
            {/* Círculo 1: LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/fraudeg/home/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn de FraudEG"
              className="group w-[72px] h-[72px] bg-black rounded-full border-[10px] border-[#050709] flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <svg className="w-7 h-7 text-[#cccdcf] group-hover:text-[#0A66C2] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Círculo 2: WhatsApp */}
            <a 
              href="https://wa.me/573175803562" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp de FraudEG"
              className="group w-[72px] h-[72px] bg-black rounded-full border-[10px] border-[#050709] flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <svg className="w-7 h-7 text-[#cccdcf] group-hover:text-[#25D366] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 mb-16 pt-4">
            
            <div className="md:col-span-2 flex flex-col gap-6 md:pr-16">
              <div className="flex items-center gap-2 cursor-pointer mb-1">
                {/* Logo en SVG */}
                <img 
                  src="/designersV2/LogoFraudeg.svg" 
                  alt="FraudEG Logo" 
                  className="h-9 md:h-10 w-auto"
                />
              </div>
             
              <p className="text-base font-normal leading-6 text-[#F9F9F9] max-w-sm">
                {t('footer.description')}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className="text-lg font-bold leading-7 text-[#A1A8B0] tracking-wider">{t('footer.product')}</h4>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.solutions')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.integrations')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.plans')}</a>
              <a href="#" className="text-base font-normal leading-6 text-[#9CA3AF] hover:text-[#10F5C4] transition-colors">{t('footer.pilot')}</a>

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