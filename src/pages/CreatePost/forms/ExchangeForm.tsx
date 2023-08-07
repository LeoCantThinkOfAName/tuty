import { FormProvider, useForm } from "react-hook-form";

import { FC } from "react";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";
import { basicDefaultValues } from "./schema";
import { useCreatePostContext } from "../context";
import { useSubmit } from "../useSubmit";

export interface ExchangeFormProps {
  defaultValues?: {
    location: string;
    label?: string;
    description: string;
    provides: string;
    acquires: string;
  };
}

export const ExchangeForm: FC<ExchangeFormProps> = ({ defaultValues }) => {
  const methods = useForm({
    defaultValues,
  });
  const formType = useCreatePostContext();
  const submit = useSubmit(methods);

  if (formType !== "SKILL_EXCHANGE") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={submit}>
        <InputField name="provides" isRequired />
        <InputField name="acquires" isRequired />
      </FormWrapper>
    </FormProvider>
  );
};

ExchangeForm.defaultProps = {
  defaultValues: {
    ...basicDefaultValues,
    provides: "",
    acquires: "",
  },
};
