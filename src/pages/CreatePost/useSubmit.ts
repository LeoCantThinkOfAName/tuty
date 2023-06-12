import { FieldValues, UseFormReturn } from "react-hook-form";
import { FormEvent, useCallback } from "react";

export const useSubmit = <T extends FieldValues>(methods: UseFormReturn<T>) => {
  return useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      methods.handleSubmit((data) => {
        console.log(data);
      })(event);
    },
    [methods.handleSubmit],
  );
};
