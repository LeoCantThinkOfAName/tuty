import { FormProvider, useForm } from "react-hook-form";

import { FC } from "react";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";
import { basicDefaultValues } from "./schema";
import { useCreatePostContext } from "../context";
import { useSubmit } from "../useSubmit";

export interface StudyGroupFormProps {
  defaultValues?: {
    location: string;
    label?: string;
    description: string;
    purpose: string;
  };
}

export const StudyGroupForm: FC<StudyGroupFormProps> = ({ defaultValues }) => {
  const methods = useForm({
    defaultValues,
  });
  const formType = useCreatePostContext();
  const submit = useSubmit(methods);

  if (formType !== "STUDY_GROUP") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={submit}>
        <InputField name="purpose" />
      </FormWrapper>
    </FormProvider>
  );
};

StudyGroupForm.defaultProps = {
  defaultValues: {
    ...basicDefaultValues,
    purpose: "",
  },
};
