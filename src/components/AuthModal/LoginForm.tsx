import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { FC } from "react";
import { OAuthOptions } from "./OAuthOptions";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface LoginFormProps {}

const defaultValues = {
  email: "",
  password: "",
};
export const LoginForm: FC<LoginFormProps> = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
    await Promise.resolve(console.log(data));
  };

  return (
    <>
      <OAuthOptions mode="login" />
      <form onSubmit={handleSubmit(onSubmit)} role="form">
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
