import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const supportedLngs = ["en", "zh"];

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    lng: "zh",
    fallbackLng: "zh",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
  });

export default i18n;
