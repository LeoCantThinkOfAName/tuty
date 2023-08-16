import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { HTMLInputTypeAttribute } from "react";

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

export function FormInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  type,
}: FormInputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<T>();

  return (
    <FormControl isInvalid={!!errors[name]}>
      <FormLabel>{label}</FormLabel>
      <Input
        {...register(name)}
        type={type}
        required
        placeholder={placeholder}
      />
      <FormErrorMessage>{errors?.[name]?.message?.toString()}</FormErrorMessage>
    </FormControl>
  );
}
