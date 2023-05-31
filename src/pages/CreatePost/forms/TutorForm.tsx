import { FC, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { basicDefaultValues, tutorSchema } from "./schema";

import { CreatePostContext } from "..";
import { FormErrorMessage } from "@chakra-ui/react";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";
import { RateField } from "../fields/RateField";
import { TextareaField } from "../fields/TextareaField";
import { zodResolver } from "@hookform/resolvers/zod";

export const TutorForm: FC = () => {
  const methods = useForm({
    defaultValues: {
      ...basicDefaultValues,
      subject: "",
      rate: 0,
      rateType: "per_hour",
    },
    resolver: zodResolver(tutorSchema),
  });
  const formType = useContext(CreatePostContext);

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  if (formType !== "find_student" && formType !== "find_tutor") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
        <InputField name="subject" />
        <RateField isInvalid={!!methods.formState.errors.rate}>
          <FormErrorMessage>hello</FormErrorMessage>
        </RateField>
      </FormWrapper>
    </FormProvider>
  );
};
