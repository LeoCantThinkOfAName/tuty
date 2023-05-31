import { Box, Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

interface SimpleLayoutProps extends PropsWithChildren {}

export const SimpleLayout: FC<SimpleLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Flex overflow="auto" px="5">
        <Box flex="1" maxW="container.sm" mx="auto">
          {children}
          <Outlet />
          <Box h="10" />
        </Box>
      </Flex>
    </>
  );
};
