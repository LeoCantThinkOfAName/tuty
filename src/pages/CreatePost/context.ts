import { createContext, useContext } from "react";

export type FormType =
  | "find_tutor"
  | "find_student"
  | "skill_exchange"
  | "study_group";

export const CreatePostContext = createContext<FormType>("find_student");

export const useCreatePostContext = () => useContext(CreatePostContext);
