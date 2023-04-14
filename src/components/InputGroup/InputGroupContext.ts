import { InputGroupContext } from "./type";
import { createContext } from "react";

export const InputGroupContextImp = createContext<InputGroupContext>({
  value: [],
  setValue: () => {},
});

InputGroupContextImp.displayName = "InputGroupContext";
