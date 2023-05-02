import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Button, Flex } from "@chakra-ui/react";

import { FC } from "react";
import { IconType } from "react-icons";
import { useTranslation } from "react-i18next";

interface OAuthOptionsProps {
  mode: "signup" | "login";
}

export const OAuthOptions: FC<OAuthOptionsProps> = ({ mode }) => {
  const { t } = useTranslation();

  const options: { icon: IconType; title: string }[] = [
    {
      icon: BsGoogle,
      title: (t("auth.google") as string) + (t(`common.${mode}`) as string),
    },
    {
      icon: BsFacebook,
      title: (t("auth.facebook") as string) + (t(`common.${mode}`) as string),
    },
    {
      icon: BsGithub,
      title: (t("auth.github") as string) + (t(`common.${mode}`) as string),
    },
  ];

  return (
    <Flex justifyContent="space-between">
      {options.map((option) => (
        <Button flex="1" title={option.title} key={option.title}>
          <option.icon />
        </Button>
      ))}
    </Flex>
  );
};
