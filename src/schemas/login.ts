import { email, password } from "./shared";

import { z } from "zod";

export const loginSchema = z.object({
  email,
  password,
});

export type LoginForm = z.infer<typeof loginSchema>;
