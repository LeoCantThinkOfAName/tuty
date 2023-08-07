import { rate_type } from "@prisma/client";
import { z } from "zod";

export const basicDefaultValues = {
  location: "",
  label: "",
  description: "",
};

export const rateTypes = ["HOUR", "DAY", "WEEK", "MONTH", "YEAR"] as const;
export const currency = ["USD", "TWD"] as const;

export const locationSchema = z.string().min(1).max(100);
export const subjectSchema = z.string().min(1).max(100);
export const rateSchema = z.number().min(0).max(10000000);
export const descriptionSchema = z
  .string()
  .min(30, { message: "hello 30 min" })
  .max(1000);
export const rateTypeSchema = z.enum(rateTypes, {
  errorMap: (issue, ctx) => {
    console.log(issue, ctx);
    return { message: "hello" };
  },
});
export const lableSchema = z.string();

export const basicSchema = {
  location: locationSchema,
  label: lableSchema,
  description: descriptionSchema,
};

export const tutorSchema = z.object({
  ...basicSchema,
  subject: subjectSchema,
  rate: rateSchema,
  rateType: rateTypeSchema,
  currency: z.enum(currency),
});
