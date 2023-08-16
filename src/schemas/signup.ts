import { email, password } from "./shared";

import { z } from "zod";

export const signupSchema = z
  .object({
    email,
    password,
    passwordValidation: z.string().min(1, "formErrors.required"),
  })
  .refine((data) => data.password === data.passwordValidation, {
    message: "formErrors.passwordsNotMatch",
    path: ["passwordValidation"],
  });

export type SignupForm = z.infer<typeof signupSchema>;
