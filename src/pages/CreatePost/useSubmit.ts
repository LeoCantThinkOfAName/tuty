import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormEvent, useCallback } from "react";

export const useSubmit = <T extends FieldValues>(methods: UseFormReturn<T>) => {
  return useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      console.log("event: ", event);
      methods.handleSubmit((data) => {
        console.log(data);
      })(event);
    },
    [methods.handleSubmit]
  );
};
