import { FC, FormEvent, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { CreatePostContext } from "..";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";

interface StudyGroupFormProps {}

export const StudyGroupForm: FC<StudyGroupFormProps> = () => {
  const methods = useForm();
  const formType = useContext(CreatePostContext);

  const submitHandler = (event: FormEvent<HTMLFormElement>) =>
    void methods.handleSubmit((data) => console.log(data))(event);

  if (formType !== "study_group") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={submitHandler}>
        <InputField name="purpose" />
      </FormWrapper>
    </FormProvider>
  );
};
