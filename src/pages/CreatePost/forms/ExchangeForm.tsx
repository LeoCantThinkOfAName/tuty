import { FC, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { CreatePostContext } from "..";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";

interface ExchangeFormProps {}

export const ExchangeForm: FC<ExchangeFormProps> = () => {
  const methods = useForm();
  const formType = useContext(CreatePostContext);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  if (formType !== "skill_exchange") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={void methods.handleSubmit(onSubmit)}>
        <InputField name="provides" />
        <InputField name="acquires" />
      </FormWrapper>
    </FormProvider>
  );
};
