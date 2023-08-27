import { Button, Spinner } from "@chakra-ui/react";
import { FC, FormEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  SignupForm as SignupFormType,
  signupSchema,
} from "../../schemas/signup";

import { AuthService } from "../../services/auth";
import { FormInput } from "./FormInput";
import { OAuthOptions } from "./OAuthOptions";
import { useOTPContext } from "../../contexts/OTPContext";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";

interface SignupFormProps {
  onClose: () => void;
}

const defaultValues = {
  email: "",
  password: "",
  passwordValidation: "",
};

export const SignupForm: FC<SignupFormProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const methods = useForm<SignupFormType>({
    defaultValues,
    mode: "onChange",
    resolver: zodResolver(signupSchema),
  });
  const { toggle } = useOTPContext();
  const isDisabled = methods.formState.isSubmitting;

  const submitHandler = async (event: FormEvent<HTMLFormElement>) =>
    void methods.handleSubmit(async (data) => {
      await AuthService.signup(data)
        .then(() => {
          onClose();
          toggle();
        })
        .catch((err) => err);
    })(event);

  return (
    <FormProvider {...methods}>
      <OAuthOptions mode="signup" isDisabled={isDisabled} />
      <form onSubmit={submitHandler} role="form">
        <FormInput<SignupFormType>
          name="email"
          label={t("auth.signup.email.label")}
          placeholder={t("auth.signup.email.label")}
          type="email"
          isDisabled={isDisabled}
        />
        <FormInput<SignupFormType>
          name="password"
          label={t("auth.signup.password.label")}
          placeholder={t("auth.signup.password.placeholder")}
          type="password"
          isDisabled={isDisabled}
        />
        <FormInput<SignupFormType>
          name="passwordValidation"
          label={t("auth.signup.validatePassword.label")}
          placeholder={t("auth.signup.validatePassword.placeholder")}
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
          {t("common.signup")}
        </Button>
      </form>
    </FormProvider>
  );
};
