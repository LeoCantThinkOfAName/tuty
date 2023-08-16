import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("invalidEmail").min(1, "required"),
    password: z
      .string()
      .min(1, "required")
      .min(8, "passwordTooShort")
      .max(20, "passwordTooLong")
      .refine((value) => /[A-Z]/.test(value), "needUppercase")
      .refine((value) => /[a-z]/.test(value), "needLowercase")
      .refine((value) => /[0-9]/.test(value), "needNumber")
      .refine((value) => /[!@#$%^&*]/.test(value), "needSpecialCharacter"),
    passwordValidation: z.string().min(1, "required"),
  })
  .refine((data) => data.password === data.passwordValidation, {
    message: "passwordsDontMatch",
    path: ["passwordValidation"],
  });

export type SignupForm = z.infer<typeof signupSchema>;
