import { FC, PropsWithChildren } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

import { ChakraProvider } from "@chakra-ui/react";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import i18next from "i18next";
import { theme } from "../styles/theme";

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .use(backend)
  .init({
    lng: "zh",
    fallbackLng: "zh",
    supportedLngs: ["en", "zh"],
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });

export const TestProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </ChakraProvider>
  );
};
