import { ChakraProviderDecorator } from "@chakra-ui/storybook-addon/dist/feature/decorator/ChakraProviderDecorator";
import type { Preview } from "@storybook/react";
import i18n from "./i18n";
import { theme } from "../src/styles/theme";
import { withRouter } from "storybook-addon-react-router-v6";

const decorators = [ChakraProviderDecorator, withRouter];
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
    reactRouter: {
      routePath: "/",
    },
  },
  decorators,
};

export default preview;
