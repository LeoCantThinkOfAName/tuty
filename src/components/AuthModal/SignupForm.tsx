import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FC, FormEvent } from "react";

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

  const submitHandler = (event: FormEvent<HTMLFormElement>) =>
    void handleSubmit((data) => console.log(data))(event);

  return (
    <>
      <OAuthOptions mode="signup" />
      <form onSubmit={submitHandler} role="form">
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
