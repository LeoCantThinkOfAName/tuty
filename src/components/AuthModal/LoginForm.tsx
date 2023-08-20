import {
  Button,
  FormControl,
  FormLabel,
  Input,
  ModalProps,
} from "@chakra-ui/react";
import { FC, FormEvent } from "react";

import { OAuthOptions } from "./OAuthOptions";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface LoginFormProps {
  onClose: () => void;
}

const defaultValues = {
  email: "",
  password: "",
};
export const LoginForm: FC<LoginFormProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState } = useForm({
    defaultValues,
  });
  const isDisabled = formState.isSubmitting;

  const submitHandler = (event: FormEvent<HTMLFormElement>) =>
    void handleSubmit((data: typeof defaultValues) => console.log(data))(event);

  return (
    <>
      <OAuthOptions mode="login" isDisabled={isDisabled} />
      <form onSubmit={submitHandler} role="form">
        <FormControl>
          <FormLabel>{t("auth.signup.email.label")}</FormLabel>
          <Input
            {...register("email")}
            type="email"
            required
            placeholder={t("auth.login.email.placeholder")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>{t("auth.signup.password.label")}</FormLabel>
          <Input
            {...register("password")}
            type="password"
            required
            placeholder={t("auth.login.password.placeholder")}
          />
        </FormControl>

        <Button w="100%" variant="success" mt="8" type="submit">
          {t("common.login")}
        </Button>
      </form>
    </>
  );
};
