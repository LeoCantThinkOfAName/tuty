import { FC, FormEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  SignupForm as SignupFormType,
  signupSchema,
} from "../../schemas/signup";

import { Button } from "@chakra-ui/react";
import { FormInput } from "./FormInput";
import { OAuthOptions } from "./OAuthOptions";
import { useAuth } from "../../services/useAuth";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";

interface SignupFormProps {}

const defaultValues = {
  email: "",
  password: "",
  passwordValidation: "",
};

export const SignupForm: FC<SignupFormProps> = () => {
  const { t } = useTranslation();
  const { signup } = useAuth();
  const methods = useForm<SignupFormType>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });

  const submitHandler = (event: FormEvent<HTMLFormElement>) =>
    void methods.handleSubmit((data) => {
      signup(data)
        .then((res) => console.log("res: ", res))
        .catch(() => methods.reset());
    })(event);

  return (
    <FormProvider {...methods}>
      <OAuthOptions mode="signup" />
      <form onSubmit={submitHandler} role="form">
        <FormInput<SignupFormType>
          name="email"
          label={t("auth.signup.email.label")}
          placeholder={t("auth.signup.email.label")}
          type="email"
        />
        <FormInput<SignupFormType>
          name="password"
          label={t("auth.signup.password.label")}
          placeholder={t("auth.signup.password.placeholder")}
          type="password"
        />
        <FormInput<SignupFormType>
          name="passwordValidation"
          label={t("auth.signup.validatePassword.label")}
          placeholder={t("auth.signup.validatePassword.placeholder")}
          type="password"
        />

        <Button w="100%" variant="success" mt="8" type="submit">
          {t("common.signup")}
        </Button>
      </form>
    </FormProvider>
  );
};
