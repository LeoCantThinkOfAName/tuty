import { Box, Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";
import { SideBar } from "../components/SideBar";

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <Flex h="100%" w="100%" overflow="hidden">
        <SideBar />
        <Box p="5" overflow="auto" flex="1">
          {children}
          <Outlet />
        </Box>
      </Flex>
    </>
  );
};
