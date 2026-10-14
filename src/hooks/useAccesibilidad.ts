import { useState, useEffect } from 'react';
import type { AjustesAccesibilidad } from '../types';

const AJUSTES_INICIALES: AjustesAccesibilidad = {
  altoContraste: false,
  contrastePlus: false,
  textoGrande: false,
  espaciadoTexto: false,
  fuenteDislexia: false,
  saturacion: false,
  alturaLinea: false,
  informacion: false,
  alineacion: 'left',
  detenerAnimaciones: false,
};

export const useAccesibilidad = () => {
  const [ajustes, setAjustes] = useState<AjustesAccesibilidad>(() => {
    const guardado = localStorage.getItem('ajustes_accesibilidad');
    return guardado ? JSON.parse(guardado) : AJUSTES_INICIALES;
  });

  const aplicarEstilos = (config: AjustesAccesibilidad) => {
    const root = document.documentElement;
    root.style.filter = '';
    root.style.fontSize = '';
    root.style.letterSpacing = '';

    let filtros = '';
    if (config.altoContraste) filtros += ' invert(1) hue-rotate(180deg)';
    if (config.contrastePlus) filtros += ' contrast(150%)';
    if (config.saturacion) filtros += ' saturate(200%)';
    root.style.filter = filtros.trim();
    if (config.textoGrande) root.style.fontSize = '120%';
    if (config.espaciadoTexto) root.style.letterSpacing = '0.12em';

    let styleTag = document.getElementById('accesibilidad-dinamica');
    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = 'accesibilidad-dinamica';
      document.head.appendChild(styleTag);
    }

    let cssReglas = '';

    if (config.fuenteDislexia) {
      cssReglas += `* { font-family: 'OpenDyslexic', 'Comic Sans MS', 'Chalkboard SE', sans-serif !important; }\n`;
    }
    if (config.alineacion) {
      cssReglas += `* { text-align: ${config.alineacion} !important; }\n`;
    }
   
    if (config.alturaLinea) {
      cssReglas += `* { line-height: 2 !important; }\n`;
    }
   
    if (config.detenerAnimaciones) {
      cssReglas += `* { animation: none !important; transition: none !important; scroll-behavior: auto !important; }\n`;
    }

    if (config.informacion) {
      cssReglas += `
        *[title]:hover::after, *[aria-label]:hover::after {
          content: attr(title) " " attr(aria-label);
          position: absolute;
          background-color: #1e3a8a !important;
          color: white !important;
          padding: 4px 8px !important;
          border-radius: 4px !important;
          font-size: 14px !important;
          z-index: 999999 !important;
          pointer-events: none !important;
          margin-top: 24px;
        }
        a:hover, button:hover, img:hover, input:hover {
          outline: 3px solid #3b82f6 !important;
          outline-offset: 2px !important;
          cursor: help !important;
        }\n`;
    }

    styleTag.innerHTML = cssReglas;
  };

  useEffect(() => {
    localStorage.setItem('ajustes_accesibilidad', JSON.stringify(ajustes));
    aplicarEstilos(ajustes);
  }, [ajustes]);

  const alternarAjuste = <K extends keyof AjustesAccesibilidad>(
    clave: K,
    valor?: AjustesAccesibilidad[K]
  ) => {
    setAjustes(prev => ({
      ...prev,
      [clave]: valor !== undefined ? valor : !prev[clave],
    }));
  };

  return { ajustes, alternarAjuste };
};