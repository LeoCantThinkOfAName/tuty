import { FC, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { CreatePostContext } from "..";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";

interface StudyGroupFormProps {}

export const StudyGroupForm: FC<StudyGroupFormProps> = () => {
  const methods = useForm();
  const formType = useContext(CreatePostContext);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  if (formType !== "study_group") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={void methods.handleSubmit(onSubmit)}>
        <InputField name="purpose" />
      </FormWrapper>
    </FormProvider>
  );
};
