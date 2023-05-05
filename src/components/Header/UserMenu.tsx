import {
  Avatar,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { FC } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface UserMenuProps {}

export const UserMenu: FC<UserMenuProps> = () => {
  const { t } = useTranslation();

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" />
      </MenuButton>
      <MenuList>
        <Flex alignItems="center" justifyContent="space-between" px="5">
          <Flex flexDir="column">
            <Text fontWeight="bold">User Name</Text>
            <Text color="gray.500">User Email</Text>
          </Flex>
          <Avatar size="lg" />
        </Flex>
        <MenuDivider />
        <Link to="/">
          <MenuItem>{t("userMenu.myAccount")}</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>{t("userMenu.myPosts")}</MenuItem>
        </Link>
        <Link to="/">
          <MenuItem>{t("userMenu.bookmarked")}</MenuItem>
        </Link>
        <MenuItem>{t("userMenu.logout")}</MenuItem>
      </MenuList>
    </Menu>
  );
};
