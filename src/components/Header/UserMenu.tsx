import {
  Avatar,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

import { AuthService } from "../../services/auth";
import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useTranslation } from "react-i18next";

interface UserMenuProps {}

export const UserMenu: FC<UserMenuProps> = () => {
  const { session, toggle } = useAuthContext();
  const { t } = useTranslation();

  if (session) {
    return (
      <Menu>
        <MenuButton type="button">
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

          <MenuItem as={Link} to="/">
            {t("userMenu.myAccount")}
          </MenuItem>

          <MenuItem as={Link} to="/">
            {t("userMenu.myPosts")}
          </MenuItem>

          <MenuItem as={Link} to="/">
            {t("userMenu.bookmarked")}
          </MenuItem>

          <MenuItem onClick={() => AuthService.signout()}>
            {t("userMenu.logout")}
          </MenuItem>
        </MenuList>
      </Menu>
    );
  } else {
    return <Avatar size="sm" p="0" minW="unset" as={Button} onClick={toggle} />;
  }
};
