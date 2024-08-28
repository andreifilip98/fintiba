import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { ar, en } from "./translations";

const resources = {
    en: {
        translation: en,
    },
    ar: {
        translation: ar,
    }
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    debug: true,
    lng: 'en',
    interpolation: {
        escapeValue: false
    },
    resources: resources
})

export default i18next;