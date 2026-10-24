import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom'; 

export const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const navLinks = [
    { id: 'home', name: t('navbar.home'), href: '/' },
    { id: 'solutions', name: t('navbar.solutions'), href: '/soluciones' },
    { id: 'plans', name: t('navbar.plans'), href: '/planes' },
    { id: 'about', name: t('navbar.aboutUs'), href: '/sobre-nosotros' },
    { id: 'blog', name: t('navbar.blog'), href: '/blog' },
    { id: 'fonts', name: 'Fonts', href: '/fonts' }, // Enlace agregado para el catálogo tipográfico
  ];

  return (
    <div className="sticky top-0 z-50 bg-[#0B0E12] w-full flex justify-center p-6">
      <nav className="w-full max-w-[1300px] h-[64px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-between px-6 md:px-8 font-sans">
        
        <div className="flex items-center gap-2 cursor-pointer">
          <Link to="/" className="text-[#F9F9F9] font-bold text-xl tracking-wide hover:opacity-80 transition-opacity">
            Fraud<span className="text-[#10F5C4]">EG</span>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href || (location.pathname === '/' && link.href === '/soluciones');
            
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
        
        <div className="flex items-center gap-6">
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
      </nav>
    </div>
  );
};