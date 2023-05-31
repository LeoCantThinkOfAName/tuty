import { FC, PropsWithChildren } from "react";
import { FormControl, FormLabel, Input, InputProps } from "@chakra-ui/react";
import { RegisterOptions, useFormContext } from "react-hook-form";

interface InputFieldProps extends InputProps, PropsWithChildren {
  name: string;
  options?: RegisterOptions;
}

export const InputField: FC<InputFieldProps> = ({
  children,
  name,
  options,
  isRequired,
  isInvalid,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel>{name}</FormLabel>
      <Input {...register(name, options)} />
      {children}
    </FormControl>
  );
};
