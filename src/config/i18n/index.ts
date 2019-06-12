import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Page not found': 'Sorry, page not found',
        'Field is required': 'Field is required',
        'Field is not valid email': 'Field is not valid email',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})
