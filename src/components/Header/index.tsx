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
    <Flex
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      boxShadow="md"
      minH="20"
      px="5"
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
  );
};
