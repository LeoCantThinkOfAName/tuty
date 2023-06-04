import { FC, FormEvent, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { CreatePostContext } from "..";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";

interface ExchangeFormProps {}

export const ExchangeForm: FC<ExchangeFormProps> = () => {
  const methods = useForm();
  const formType = useContext(CreatePostContext);

  const submitHandler = (event: FormEvent<HTMLFormElement>) =>
    void methods.handleSubmit((data) => console.log(data))(event);

  if (formType !== "skill_exchange") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={submitHandler}>
        <InputField name="provides" />
        <InputField name="acquires" />
      </FormWrapper>
    </FormProvider>
  );
};
