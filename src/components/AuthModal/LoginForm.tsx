import { Button, Spinner } from "@chakra-ui/react";
import { FC, FormEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { AuthService } from "../../services/auth";
import { FormInput } from "./FormInput";
import { LoginForm as LoginFormType } from "../../schemas/login";
import { OAuthOptions } from "./OAuthOptions";
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
  const methods = useForm({
    defaultValues,
  });
  const isDisabled = methods.formState.isSubmitting;

  const submitHandler = async (event: FormEvent<HTMLFormElement>) =>
    void methods.handleSubmit(async (data) => {
      await AuthService.login(data)
        .then(() => onClose())
        .catch((err) => err);
    })(event);

  return (
    <>
      <OAuthOptions mode="login" isDisabled={isDisabled} />
      <FormProvider {...methods}>
        <form onSubmit={submitHandler} role="form">
          <FormInput<LoginFormType>
            name="email"
            label={t("auth.signup.email.label")}
            placeholder={t("auth.login.email.placeholder")}
            type="email"
            isDisabled={isDisabled}
          />
          <FormInput<LoginFormType>
            name="password"
            label={t("auth.signup.password.label")}
            placeholder={t("auth.login.password.placeholder")}
            type="password"
            isDisabled={isDisabled}
          />
          <Button
            w="100%"
            variant="success"
            mt="8"
            type="submit"
            isDisabled={isDisabled}
          >
            <Spinner size="sm" mr="3" hidden={!isDisabled} />
            {t("common.login")}
          </Button>
        </form>
      </FormProvider>
    </>
  );
};
