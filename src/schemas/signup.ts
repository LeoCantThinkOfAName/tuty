import { z } from "zod";

export const signupSchema = z
  .object({
    email: z
      .string()
      .email("formErrors.invalidEmail")
      .min(1, "formErrors.required"),
    password: z
      .string()
      .min(1, "formErrors.required")
      .min(8, "formErrors.passwordTooShort")
      .max(20, "formErrors.passwordTooLong")
      .refine((value) => /[A-Z]/.test(value), "formErrors.needUppercase")
      .refine((value) => /[a-z]/.test(value), "formErrors.needLowercase")
      .refine((value) => /[0-9]/.test(value), "formErrors.needNumber")
      .refine(
        (value) => /[!@#$%^&*]/.test(value),
        "formErrors.needSpecialCharacter"
      ),
    passwordValidation: z.string().min(1, "formErrors.required"),
  })
  .refine((data) => data.password === data.passwordValidation, {
    message: "formErrors.passwordsNotMatch",
    path: ["passwordValidation"],
  });

export type SignupForm = z.infer<typeof signupSchema>;
