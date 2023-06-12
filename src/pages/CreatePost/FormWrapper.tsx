import { Button, FormErrorMessage } from "@chakra-ui/react";
import { FC, FormHTMLAttributes } from "react";

import { InputField } from "./fields/InputField";
import { LabelField } from "./fields/LabelField";
import { TextareaField } from "./fields/TextareaField";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface FormWrapperProps extends FormHTMLAttributes<HTMLFormElement> {}

export const FormWrapper: FC<FormWrapperProps> = ({ children, ...props }) => {
  const { t } = useTranslation();
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <form {...props}>
      <InputField name="location" isRequired isInvalid={!!errors.location}>
        <FormErrorMessage>
          {t(errors.location?.message as string)}
        </FormErrorMessage>
      </InputField>
      {children}
      <TextareaField name="description" isInvalid={!!errors.description}>
        <FormErrorMessage>
          {t(errors.description?.message as string)}
        </FormErrorMessage>
      </TextareaField>

      <LabelField name="label" isInvalid={!!errors.label}>
        <FormErrorMessage>
          {t(errors.label?.message as string)}
        </FormErrorMessage>
      </LabelField>
      <Button mt="8" w="100%" variant="success" size="lg" type="submit">
        Submit
      </Button>
    </form>
  );
};
