import { baseTheme, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const config = {
  styles: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    global: () => ({
      "html, body": {
        height: "100%",
      },
      body: {
        display: "flex",
        flexDirection: "column",
      },
      "#root": {
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
      },
    }),
  },
  components: {
    FormLabel: defineStyleConfig({
      baseStyle: {
        marginTop: "5",
      },
    }),
    Button: defineStyleConfig({
      variants: {
        success: {
          bg: baseTheme.colors.green["500"],
          color: baseTheme.colors.white,
          _hover: {
            bg: baseTheme.colors.green["600"],
          },
        },
        error: {
          bg: baseTheme.colors.red["500"],
          color: baseTheme.colors.white,
          _hover: {
            bg: baseTheme.colors.red["600"],
          },
        },
        warn: {
          bg: baseTheme.colors.orange["400"],
          color: baseTheme.colors.white,
          _hover: {
            bg: baseTheme.colors.orange["500"],
          },
        },
      },
    }),
  },
};

export const theme = extendTheme(config);
