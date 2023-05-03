import { FC, PropsWithChildren } from "react";
import { I18nextProvider, initReactI18next } from "react-i18next";

import { ChakraProvider } from "@chakra-ui/react";
import en from "../locales/en/translation.json";
import i18next from "i18next";
import { theme } from "../styles/theme";
import zh from "../locales/zh/translation.json";

i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "zh"],
  react: { useSuspense: false },
  resources: { en: { translation: en }, zh: { translation: zh } },
});

export const TestProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </ChakraProvider>
  );
};
