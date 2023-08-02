import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ma from './ma.json'
import fr from './fr.json'


i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'fr',
    resources:{
        ma:ma,
        fr:fr
    },
    react:{
        useSuspense:false
    },
    interpolation:{
        escapeValue: false,
    }
})

export default i18n;