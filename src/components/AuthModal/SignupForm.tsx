import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";

import { FC } from "react";
import { OAuthOptions } from "./OAuthOptions";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface SignupFormProps {}

const defaultValues = {
  email: "",
  password: "",
  passwordValidation: "",
};
export const SignupForm: FC<SignupFormProps> = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = async (data: typeof defaultValues) => {
    await Promise.resolve(console.log(data));
  };

  return (
    <>
      <OAuthOptions mode="signup" />
      <form onSubmit={handleSubmit(onSubmit)} role="form">
        <FormControl>
          <FormLabel>{t("auth.signup.email.label")}</FormLabel>
          <Input
            {...register("email")}
            type="email"
            required
            placeholder={t("auth.signup.email.label")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>{t("auth.signup.password.label")}</FormLabel>
          <Input
            {...register("password")}
            type="password"
            required
            placeholder={t("auth.signup.password.placeholder")}
          />
        </FormControl>
        <FormControl>
          <FormLabel>{t("auth.signup.validatePassword.label")}</FormLabel>
          <Input
            {...register("passwordValidation")}
            type="password"
            required
            placeholder={t("auth.signup.validatePassword.placeholder")}
          />
        </FormControl>

        <Button w="100%" variant="success" mt="8" type="submit">
          {t("common.signup")}
        </Button>
      </form>
    </>
  );
};
