import { z } from "zod";

export const basicDefaultValues = {
  location: "",
  label: "",
  description: "",
};

export const locationSchema = z.string().min(1).max(100);
export const subjectSchema = z.string().min(1).max(100);
export const rateSchema = z.number().min(0).max(10000000);
export const descriptionSchema = z
  .string()
  .min(30, { message: "hello 30 min" })
  .max(1000);
export const rateTypeSchema = z.enum(["hour", "day", "week", "month", "year"], {
  errorMap: (issue, ctx) => ({ message: "hello" }),
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
});
