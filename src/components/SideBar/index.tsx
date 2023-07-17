import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionProps,
  Flex,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import { BaseUnit, HeaderHeight, PATHS } from "../../constants";
import { NavLink, Link as RouterLink, generatePath } from "react-router-dom";

import { FC } from "react";
import { useTranslation } from "react-i18next";

interface SideBarProps extends Pick<AccordionProps, "defaultIndex"> {
  menu?: {
    category: string;
    items: { path: string; title: string }[];
  }[];
}

const headerH = HeaderHeight[HeaderHeight.length - 1] * BaseUnit + "px";

export const SideBar: FC<SideBarProps> = ({ menu, defaultIndex }) => {
  const { t } = useTranslation();

  return (
    <Flex
      flexDir="column"
      p="5"
      position="sticky"
      w="20rem"
      boxShadow="md"
      top={headerH}
      h={`calc(100vh - ${headerH})`}
    >
      <Input
        type="text"
        placeholder={t("sideBar.searchInput.placeholder")}
        mb="5"
      />

      <Flex flex="1" flexDir="column">
        <Accordion defaultIndex={defaultIndex}>
          {menu?.map((item) => (
            <AccordionItem
              key={item.category}
              borderTop="none"
              borderBottom="none"
            >
              <AccordionButton _hover={{ bg: "initial" }}>
                <Text fontWeight="bold" w="100%" textAlign="left" fontSize="lg">
                  {t(item.category)}
                </Text>
                <AccordionIcon />
              </AccordionButton>

              <AccordionPanel p="0">
                {item.items.map((link) => (
                  <Link
                    key={link.title}
                    _activeLink={{
                      bg: "blackAlpha.100",
                    }}
                    _hover={{ textDecor: "none", bg: "blackAlpha.100" }}
                    _dark={{
                      _hover: {
                        bg: "whiteAlpha.100",
                      },
                      _activeLink: {
                        bg: "whiteAlpha.100",
                      },
                    }}
                    display="block"
                    as={NavLink}
                    p="2"
                    pl="8"
                    to={generatePath(PATHS.SEARCH, { term: t(link.path) })}
                  >
                    {t(link.title)}
                  </Link>
                ))}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Flex>

      <Link as={RouterLink} to="" color="gray.500">
        {t("routes.privacyPolicy")}
      </Link>
    </Flex>
  );
};

SideBar.defaultProps = {
  menu: [],
  defaultIndex: [0],
};
