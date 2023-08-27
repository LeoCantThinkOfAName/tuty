import { Input, InputProps } from "@chakra-ui/react";

import { forwardRef } from "react";

interface InputGroupItemProps extends InputProps {}

export const InputGroupItem = forwardRef<
  HTMLInputElement | null,
  InputGroupItemProps
>((props, ref) => {
  return <Input aria-label="grouped-input" ref={ref} {...props} />;
});

InputGroupItem.displayName = "InputGroup";
