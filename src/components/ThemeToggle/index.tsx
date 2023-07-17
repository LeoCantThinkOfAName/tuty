import {
  Box,
  Button,
  ChakraProps,
  ColorMode,
  useColorMode,
} from "@chakra-ui/react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

import { FC } from "react";

export const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const assignProps = (mode: ColorMode): ChakraProps => {
    const sameAsColorMode = mode === colorMode;
    return {
      position: "absolute",
      transform: "auto",
      translateY: sameAsColorMode ? 0 : 3,
      opacity: sameAsColorMode ? 1 : 0,
      transition: "all .3s ease-in-out",
      _groupHover: {
        opacity: sameAsColorMode ? 0 : 1,
        translateY: sameAsColorMode ? 3 : 0,
      },
    };
  };

  return (
    <Button
      mr="5"
      size="sm"
      rounded="full"
      position="relative"
      onClick={toggleColorMode}
      data-group
    >
      <>
        <Box as={BsFillSunFill} {...assignProps("light")} />
        <Box as={BsFillMoonStarsFill} {...assignProps("dark")} />
      </>
    </Button>
  );
};
