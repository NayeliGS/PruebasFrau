import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'; 

export const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', name: t('navbar.home'), href: '/' },
    { id: 'solutions', name: t('navbar.solutions'), href: '/soluciones' },
    { id: 'plans', name: t('navbar.plans'), href: '/planes' },
    { id: 'about', name: t('navbar.aboutUs'), href: '/sobre-nosotros' },
    { id: 'blog', name: t('navbar.blog'), href: '/blog' },
    { id: 'fonts', name: 'Fonts', href: '/fonts' },
  ];

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-center p-6 pointer-events-none">
      
      <nav className="pointer-events-auto w-full max-w-[1300px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col md:flex-row md:items-center justify-between px-6 md:px-8 font-sans shadow-lg">
        
        <div className="flex items-center justify-between w-full md:w-auto h-[64px]">
          <div className="flex items-center gap-2 cursor-pointer">
            {/* CORRECCIÓN 1: Reemplazo del texto por el logo SVG */}
            <Link to="/" className="hover:opacity-80 transition-opacity flex items-center">
              <img src="/designersV2/LogoFraudeg.svg" alt="FraudEG" className="h-6 md:h-7 w-auto" />
            </Link>
          </div>

          <button 
            className="md:hidden text-[#F9F9F9] hover:text-[#10F5C4] transition-colors focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            {/* CORRECCIÓN 2: Eliminamos la regla doble y dejamos coincidencia exacta */}
            const isActive = location.pathname === link.href;
            
            return (
              <Link
                key={link.id}
                to={link.href}
                className={`text-lg font-medium transition-colors ${
                  isActive 
                    ? 'text-[#10F5C4]' 
                    : 'text-[#F9F9F9] hover:text-[#10F5C4]'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
        
        <div className="hidden md:flex items-center gap-6 h-[64px]">
          <button className="flex items-center gap-2 text-[#F9F9F9] hover:text-[#10F5C4] transition-colors text-lg font-medium">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            ES
          </button>
        
          <button className="bg-[#10F5C4] text-black px-5 py-2 rounded-lg text-lg font-medium flex items-center gap-2 hover:bg-[#10F5C4]/90 transition-transform hover:scale-105">
            {t('navbar.requestPilot')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </button>
        </div>

        {/* Menú Desplegable para Móvil */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-6 pt-4 border-t border-white/10 w-full animate-fade-in">
            {navLinks.map((link) => {
              {/* También aplicamos la corrección aquí para móvil */}
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.id}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium transition-colors ${
                    isActive ? 'text-[#10F5C4]' : 'text-[#F9F9F9]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="flex flex-col gap-4 mt-2 border-t border-white/10 pt-4">
              <button className="flex items-center gap-2 text-[#F9F9F9] transition-colors text-lg font-medium">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                ES
              </button>
              <button className="bg-[#10F5C4] text-black px-5 py-3 rounded-lg text-lg font-medium flex items-center justify-center gap-2">
                {t('navbar.requestPilot')}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>
        )}

      </nav>
    </div>
  );
};