import { useState, useEffect } from 'react';

export interface AccessibilitySettings {
  highContrast: boolean;
  contrastPlus: boolean;
  largeText: boolean;
  textSpacing: boolean;
  dyslexiaFont: boolean;
  colorSaturation: boolean;
  lineHeight: boolean;
  tooltips: boolean;
  alignment: string;
  stopAnimations: boolean;
}

const INITIAL_SETTINGS: AccessibilitySettings = {
  highContrast: false,
  contrastPlus: false,
  largeText: false,
  textSpacing: false,
  dyslexiaFont: false,
  colorSaturation: false,
  lineHeight: false,
  tooltips: false,
  alignment: 'left',
  stopAnimations: false,
};

export const useAccessibility = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    const saved = localStorage.getItem('accessibility_settings');
    return saved ? JSON.parse(saved) : INITIAL_SETTINGS;
  });

  const applyStyles = (config: AccessibilitySettings) => {
    const root = document.documentElement;
    root.style.filter = '';
    root.style.fontSize = '';
    root.style.letterSpacing = '';

    let filters = "";
    if (config.highContrast) filters += ' invert(1) hue-rotate(180deg)';
    if (config.contrastPlus) filters += ' contrast(150%)';
    if (config.colorSaturation) filters += ' saturate(200%)';
    root.style.filter = filters.trim();

    if (config.largeText) root.style.fontSize = '120%';
    if (config.textSpacing) root.style.letterSpacing = '0.12em';

    let styleTag = document.getElementById('dynamic-accessibility');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'dynamic-accessibility';
      document.head.appendChild(styleTag);
    }

    let cssRules = "";
    if (config.dyslexiaFont) {
      cssRules += `* { font-family: 'OpenDyslexic', 'Comic Sans MS', 'Chalkboard SE', sans-serif !important; }\n`;
    }
    if (config.alignment) {
      cssRules += `* { text-align: ${config.alignment} !important; }\n`;
    }
    if (config.lineHeight) {
      cssRules += `* { line-height: 2 !important; }\n`;
    }
    if (config.stopAnimations) {
      cssRules += `* { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n`;
    }
    if (config.tooltips) {
      cssRules += `
        *[title]:hover::after, *[aria-label]:hover::after {
          content: attr(title) " " attr(aria-label);
          position: absolute;
          background-color: #10F5C4 !important;
          color: #050709 !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          font-size: 14px !important;
          z-index: 999999 !important;
          pointer-events: none !important;
          margin-top: 24px;
        }
        a:hover, button:hover, img:hover, input:hover {
          outline: 3px solid #10F5C4 !important;
          outline-offset: 2px !important;
          cursor: help !important;
        }
      `;
    }
    styleTag.innerHTML = cssRules;
  };

  useEffect(() => {
    localStorage.setItem('accessibility_settings', JSON.stringify(settings));
    applyStyles(settings);
  }, [settings]);

  const toggleSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value?: AccessibilitySettings[K]
  ) => {
    setSettings(prev => ({
      ...prev,
      [key]: value !== undefined ? value : !prev[key],
    }));
  };

  return { settings, toggleSetting };
};