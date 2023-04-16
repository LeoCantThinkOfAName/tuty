import { Dispatch, SetStateAction } from "react";

export interface InputGroupContext {
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
}
