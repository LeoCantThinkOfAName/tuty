import { baseTheme, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const config = {
  styles: {
    initialColorMode: "dark",
    useSystemColorMode: false,
    global: () => ({
      "html, body": {
        display: "flex",
        flexDirection: "column",
        height: "100%",
      },
      "#root": {
        display: "flex",
        minHeight: "100%",
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
