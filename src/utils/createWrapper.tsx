import { BrowserRouter, Route, Routes } from "react-router-dom";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ChakraProvider } from "@chakra-ui/react";
import { ReactElement } from "react";
import en from "../locales/en/translation.json";
import i18next from "i18next";
import { theme } from "../styles/theme";
import zh from "../locales/zh/translation.json";

await i18next.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "zh"],
  react: { useSuspense: false },
  resources: { en: { translation: en }, zh: { translation: zh } },
});

export const createWrapper = () => {
  const testQueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 0,
        retry: false,
      },
    },
  });

  return ({ children }: { children: ReactElement }) => (
    <QueryClientProvider client={testQueryClient}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <I18nextProvider i18n={i18next}>
            <Routes>
              <Route path="/" element={<>{children}</>} />
            </Routes>
          </I18nextProvider>
        </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
