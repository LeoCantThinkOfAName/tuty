import { ChakraProviderDecorator } from "@chakra-ui/storybook-addon/dist/feature/decorator/ChakraProviderDecorator";
import type { Preview } from "@storybook/react";
import { theme } from "@chakra-ui/react";

const decorators = [ChakraProviderDecorator];
const preview: Preview = {
  parameters: {
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
