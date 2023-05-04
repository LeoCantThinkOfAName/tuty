import { Button, ButtonProps } from "@chakra-ui/react";

import { FC } from "react";
import { IconType } from "react-icons";

interface ActionButtonProps extends ButtonProps {
  icon: IconType;
}

export const ActionButton: FC<ActionButtonProps> = ({
  title,
  icon,
  ...props
}) => {
  return (
    <Button
      variant="unstyled"
      display="flex"
      alignItems="center"
      mr="3"
      leftIcon={icon({})}
      opacity="0.5"
      color="gray.500"
      _dark={{
        color: "gray.300",
      }}
      _hover={{
        opacity: 1,
      }}
      title={title}
      {...props}
    >
      {title}
    </Button>
  );
};
