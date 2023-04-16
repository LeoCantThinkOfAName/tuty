import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

export default i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(backend)
  .init({
    lng: "zh",
    fallbackLng: "zh",
    supportedLngs: ["en", "zh"],
    keySeparator: ".",
  });
