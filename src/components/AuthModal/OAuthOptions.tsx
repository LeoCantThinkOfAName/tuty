import { BsFacebook, BsGithub, BsGoogle } from "react-icons/bs";
import { Button, Flex } from "@chakra-ui/react";

import { FC } from "react";
import { IconType } from "react-icons";
import { useTranslation } from "react-i18next";

interface OAuthOptionsProps {
  mode: "signup" | "login";
  isDisabled: boolean;
}

export const OAuthOptions: FC<OAuthOptionsProps> = ({ mode, isDisabled }) => {
  const { t } = useTranslation();

  const options: { icon: IconType; title: string }[] = [
    {
      icon: BsGoogle,
      title: t("auth.google") + t(`common.${mode}`),
    },
    {
      icon: BsFacebook,
      title: t("auth.facebook") + t(`common.${mode}`),
    },
    {
      icon: BsGithub,
      title: t("auth.github") + t(`common.${mode}`),
    },
  ];

  return (
    <Flex justifyContent="space-between">
      {options.map((option) => (
        <Button
          flex="1"
          maxWidth={`${Math.floor(10 / options.length) * 10}%`}
          title={option.title}
          key={option.title}
          isDisabled={isDisabled}
        >
          <option.icon />
        </Button>
      ))}
    </Flex>
  );
};

OAuthOptions.defaultProps = {
  mode: "login",
};
