import { Flex, Text } from "@chakra-ui/react";
import { HeaderHeight, PATHS } from "../../constants";

import { FC } from "react";
import { HeaderLink } from "./HeaderLink";
import { Link as RouterLink } from "react-router-dom";
import { ThemeToggle } from "../ThemeToggle";
import { UserMenu } from "./UserMenu";
import { useTranslation } from "react-i18next";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { t } = useTranslation();

  return (
    <Flex
      position="sticky"
      top="0"
      boxShadow="md"
      zIndex="999"
      bg="chakra-body-bg"
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        minH={HeaderHeight}
        px="5"
        maxW="container.lg"
        width="full"
        mx="auto"
      >
        <Text as="h1" fontSize="2xl" fontWeight="bold">
          <RouterLink to="/">TUTY</RouterLink>
        </Text>
        <Flex alignItems="center">
          <HeaderLink to={PATHS.CREATE_POST}>
            {t("headerMenu.createPost")}
          </HeaderLink>
          <HeaderLink to={PATHS.MESSAGES}>{t("headerMenu.message")}</HeaderLink>
          <ThemeToggle />
          <UserMenu />
        </Flex>
      </Flex>
    </Flex>
  );
};
