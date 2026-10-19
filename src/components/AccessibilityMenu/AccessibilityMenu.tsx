import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAccessibility } from '../../hooks/useAccessibility';
import type { AccessibilitySettings } from '../../hooks/useAccessibility';

export const AccessibilityMenu = () => {
  const { t } = useTranslation();
  const { settings, toggleSetting } = useAccessibility();
  const [isOpen, setIsOpen] = useState(false);

  const booleanOptions: { key: keyof AccessibilitySettings; label: string }[] = [
    { key: 'highContrast', label: t('accessibility.highContrast') },
    { key: 'contrastPlus', label: t('accessibility.contrastPlus') },
    { key: 'largeText', label: t('accessibility.largeText') },
    { key: 'textSpacing', label: t('accessibility.textSpacing') },
    { key: 'dyslexiaFont', label: t('accessibility.dyslexiaFont') },
    { key: 'colorSaturation', label: t('accessibility.colorSaturation') },
    { key: 'tooltips', label: t('accessibility.tooltips') },
    { key: 'lineHeight', label: t('accessibility.lineHeight') },
    { key: 'stopAnimations', label: t('accessibility.stopAnimations') },
  ];

  return (
    <div className="fixed bottom-10 right-6 z-[9999] font-sans flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-72 bg-[#050709] rounded-xl shadow-2xl border border-white/10 overflow-hidden text-[#F9F9F9]">
          <div className="bg-[#10F5C4] text-[#050709] p-4 flex justify-between items-center">
            <h2 className="font-bold text-lg">{t('accessibility.title')}</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#050709] hover:text-gray-800 font-bold"
            >
              
            </button>
          </div>
          
          <div className="p-2 space-y-1">
            
            {booleanOptions.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => toggleSetting(key as keyof AccessibilitySettings)}
                className={`w-full text-left px-3 py-2.5 rounded text-sm font-medium transition-colors ${
                  settings[key]
                    ? 'bg-[#10F5C4] text-[#050709]'
                    : 'text-[#F9F9F9] hover:bg-white/10'
                }`}
              >
                {label}
              </button>
            ))}
            
            <div className="pt-3 pb-2 px-2 border-t border-white/10 mt-2">
              <span className="text-sm font-medium block mb-3 px-1">{t('accessibility.alignment')}</span>
              <div className="flex justify-between gap-2">
                {['left', 'center', 'right', 'justify'].map((align) => (
                  <button
                    key={align}
                    onClick={() => toggleSetting('alignment', align)}
                    className={`px-3 py-1.5 rounded text-xs font-bold uppercase transition-colors flex-1 ${
                      settings.alignment === align
                        ? 'bg-[#10F5C4] text-[#050709]'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {t(`accessibility.align_${align}`, align.charAt(0).toUpperCase())}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl transition-all flex items-center justify-center ml-auto border border-[#050709] ${
          isOpen 
            ? 'bg-[#10F5C4] text-[#050709] hover:bg-[#10F5C4]/90' 
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
        aria-label={t('accessibility.openMenu')}
      >
        
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-universal-access-circle" viewBox="0 0 16 16">
  <path d="M8 4.143A1.071 1.071 0 1 0 8 2a1.071 1.071 0 0 0 0 2.143m-4.668 1.47 3.24.316v2.5l-.323 4.585A.383.383 0 0 0 7 13.14l.826-4.017c.045-.18.301-.18.346 0L9 13.139a.383.383 0 0 0 .752-.125L9.43 8.43v-2.5l3.239-.316a.38.38 0 0 0-.047-.756H3.379a.38.38 0 0 0-.047.756Z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"/>
</svg>
      </button>
    </div>
  );
};