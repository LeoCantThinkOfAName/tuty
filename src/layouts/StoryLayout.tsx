import { FC, PropsWithChildren } from "react";

import { Flex } from "@chakra-ui/react";

interface StoryLayoutProps extends PropsWithChildren {}

export const StoryLayout: FC<StoryLayoutProps> = ({ children }) => {
  return (
    <Flex h="100vh" w="100vw" flexDir="column">
      <Flex minH="100%" alignItems="stretch" flexDir="column">
        {children}
      </Flex>
    </Flex>
  );
};
