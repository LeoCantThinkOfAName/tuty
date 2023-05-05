import { Link, LinkProps } from "@chakra-ui/react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

import { FC } from "react";

interface HeaderLinkProps extends LinkProps, Omit<RouterLinkProps, "color"> {}

export const HeaderLink: FC<HeaderLinkProps> = (props) => {
  return (
    <Link
      mr="5"
      _hover={{
        textDecor: "none",
        opacity: 0.8,
      }}
      as={RouterLink}
      {...props}
    />
  );
};
