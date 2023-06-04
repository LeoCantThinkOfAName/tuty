import { FC, FormEvent, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { basicDefaultValues, tutorSchema } from "./schema";

import { CreatePostContext } from "..";
import { FormErrorMessage } from "@chakra-ui/react";
import { FormWrapper } from "../FormWrapper";
import { InputField } from "../fields/InputField";
import { RateField } from "../fields/RateField";
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

  const submitHandler = (event: FormEvent<HTMLFormElement>) =>
    void methods.handleSubmit((data) => console.log(data))(event);

  if (formType !== "find_student" && formType !== "find_tutor") return null;
  return (
    <FormProvider {...methods}>
      <FormWrapper onSubmit={submitHandler}>
        <InputField name="subject" />
        <RateField isInvalid={!!methods.formState.errors.rate}>
          <FormErrorMessage>hello</FormErrorMessage>
        </RateField>
      </FormWrapper>
    </FormProvider>
  );
};
