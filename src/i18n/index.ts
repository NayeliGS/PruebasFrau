import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { es } from './es';
import { en } from './en';
import { ptBR } from './pt-BR'; // Importamos portugués

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
      'pt-BR': { translation: ptBR } // Lo agregamos a los recursos
    },
    lng: 'es', // Idioma de arranque
    fallbackLng: 'en', // Si falta un texto, usa inglés por defecto
    interpolation: { escapeValue: false }
  });

export default i18n;