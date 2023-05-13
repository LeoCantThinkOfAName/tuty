import { Box, Flex } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

interface StoryLayoutProps extends PropsWithChildren {}

// "html, body": {
//   display: "flex",
//   flexDirection: "column",
//   height: "100%",
// },
// "#root": {
//   display: "flex",
//   minHeight: "100%",
//   alignItems: "stretch",
//   flexDirection: "column",
// },

export const StoryLayout: FC<StoryLayoutProps> = ({ children }) => {
  return (
    <Flex h="100vh" w="100vw" flexDir="column">
      <Flex minH="100%" alignItems="stretch" flexDir="column">
        {children}
      </Flex>
    </Flex>
  );
};
