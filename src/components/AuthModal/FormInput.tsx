import { FieldValues, Path, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { HTMLInputTypeAttribute } from "react";
import { useTranslation } from "react-i18next";

interface FormInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  isDisabled: boolean;
}

export function FormInput<T extends FieldValues>({
  label,
  name,
  placeholder,
  type,
  isDisabled,
}: FormInputProps<T>) {
  const { t } = useTranslation();
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
        isDisabled={isDisabled}
      />
      <FormErrorMessage>
        {t(errors?.[name]?.message as string)}
      </FormErrorMessage>
    </FormControl>
  );
}
