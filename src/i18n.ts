import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const supportedLngs = ["en", "zh"];
const initObj = {
  lng: "zh",
  fallbackLng: "zh",
  supportedLngs,
  keySeparator: ".",
  backend: {
    loadPath:
      import.meta.env.MODE === "development"
        ? "src/locales/{{lng}}/translation.json"
        : "public/locales/{{lng}}/translation.json",
  },
};
export default i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(backend)
  .init(initObj);
