import { FormProvider, useForm } from "react-hook-form";
import { basicDefaultValues, rateTypes, tutorSchema } from "./schema";

import { FC } from "react";
import { FormErrorMessage } from "@chakra-ui/react";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";
import { RateField } from "../fields/RateField";
import { useCreatePostContext } from "../context";
import { useSubmit } from "../useSubmit";
import { zodResolver } from "@hookform/resolvers/zod";

export interface TutorFormProps {
  defaultValues?: {
    location: string;
    label?: string;
    description: string;
    subject: string;
    rate: number;
    rateType: (typeof rateTypes)[number];
  };
}

export const TutorForm: FC<TutorFormProps> = ({ defaultValues }) => {
  const methods = useForm({
    defaultValues,
    resolver: zodResolver(tutorSchema),
  });
  const formType = useCreatePostContext();
  const submit = useSubmit(methods);

  if (formType !== "find_student" && formType !== "find_tutor") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={submit}>
        <InputField name="subject" />
        <RateField isInvalid={!!methods.formState.errors.rate}>
          <FormErrorMessage>hello</FormErrorMessage>
        </RateField>
      </FormWrapper>
    </FormProvider>
  );
};

TutorForm.defaultProps = {
  defaultValues: {
    ...basicDefaultValues,
    subject: "",
    rate: 0,
    rateType: "hour",
  },
};
