import { Flex, Text } from "@chakra-ui/react";

import { FC } from "react";
import { HeaderLink } from "./HeaderLink";
import { Link as RouterLink } from "react-router-dom";
import { UserMenu } from "./UserMenu";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation();

  return (
    <Flex position="sticky" boxShadow="md" zIndex="999">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        minH={["16", "20"]}
        px="5"
        maxW="container.lg"
        width="full"
        mx="auto"
      >
        <Text as="h1" fontSize="2xl" fontWeight="bold">
          <RouterLink to="/">TUTY</RouterLink>
        </Text>
        <Flex alignItems="center">
          <HeaderLink to="/">{t("headerMenu.createPost")}</HeaderLink>
          <HeaderLink to="/">{t("headerMenu.message")}</HeaderLink>
          <UserMenu />
        </Flex>
      </Flex>
    </Flex>
  );
};
