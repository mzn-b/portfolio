import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./assets/i18n/en.json";
import de from "./assets/i18n/de.json";

const resources = {
  en: { translation: en },
  de: { translation: de },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  parseMissingKeyHandler: () => "",
});

export default i18n;
