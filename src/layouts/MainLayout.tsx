import { Box, Flex, Hide } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Flex h="100%" w="100%" maxW="container.lg" mx="auto">
        <Hide below="md">
          <SideBar />
        </Hide>
        <Box p="5" overflow="auto" flex="1">
          {children}
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};
