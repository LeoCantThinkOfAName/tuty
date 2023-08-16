import { email, password } from "./shared";

import { z } from "zod";

export const signinSchema = z.object({
  email,
  password,
});

export type SigninForm = z.infer<typeof signinSchema>;
