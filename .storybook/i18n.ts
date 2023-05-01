import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const supportedLngs = ["en", "zh"];
const mode = import.meta.env.STORYBOOK_MODE;
const backendOption =
  mode === "PRODUCTION"
    ? {
        loadPath: "./locales/{{lng}}/translation.json",
      }
    : {};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    supportedLngs,
    backend: backendOption,
  });

export default i18n;
