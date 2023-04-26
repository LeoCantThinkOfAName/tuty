import { ChakraProviderDecorator } from "@chakra-ui/storybook-addon/dist/feature/decorator/ChakraProviderDecorator";
import type { Preview } from "@storybook/react";
import i18n from "../src/stories/i18n";
import { theme } from "../src/styles/theme";

const decorators = [ChakraProviderDecorator];
const preview: Preview = {
  globals: {
    locale: "zh",
    locales: {
      en: { title: "English", left: "🇺🇸" },
      zh: { title: "中文", left: "🇹🇼" },
    },
  },
  parameters: {
    i18n,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    chakra: { theme, resetCSS: true },
  },
  decorators,
};

export default preview;
