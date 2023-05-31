import { FC, PropsWithChildren } from "react";
import {
  FormControl,
  FormLabel,
  Textarea,
  TextareaProps,
} from "@chakra-ui/react";

import { useFormContext } from "react-hook-form";

interface TextareaFieldProps extends TextareaProps, PropsWithChildren {
  name: string;
}

export const TextareaField: FC<TextareaFieldProps> = ({
  children,
  name,
  isInvalid,
}) => {
  const { register } = useFormContext();

  return (
    <FormControl isRequired isInvalid={isInvalid}>
      <FormLabel>{name}</FormLabel>
      <Textarea minH="300px" {...register(name)} />
      {children}
    </FormControl>
  );
};
