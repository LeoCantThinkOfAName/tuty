import { Input, InputProps } from "@chakra-ui/react";
import {
  MutableRefObject,
  Ref,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from "react";

import { InputGroupContextImp } from "../contexts/InputGroupContext";

export interface InputGroupItemProps extends InputProps {
  index?: number;
}

const InputGroupItem = forwardRef<
  HTMLInputElement | undefined,
  InputGroupItemProps
>(({ index, ...props }, ref) => {
  const _ref = useRef<HTMLInputElement>();
  const inputRef = (ref || _ref) as MutableRefObject<HTMLInputElement>;
  const { setValue } = useContext(InputGroupContextImp);

  useEffect(() => {
    const setGroupValue = (e: Event | { target: HTMLInputElement }) => {
      setValue((prev) => {
        const newValue = [...prev];
        newValue[index as number] = (e.target as HTMLInputElement).value;
        return newValue;
      });
    };

    // initialize default value
    setGroupValue({ target: inputRef.current });

    inputRef.current?.addEventListener("input", setGroupValue);

    return () => {
      inputRef.current?.removeEventListener("input", setGroupValue);
    };
  }, []);

  return <Input {...props} ref={inputRef} aria-label="grouped-input" />;
});

InputGroupItem.displayName = "InputGroupItem";
export default InputGroupItem;
