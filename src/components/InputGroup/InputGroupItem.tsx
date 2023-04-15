import { Input, InputProps } from "@chakra-ui/react";
import {
  MutableRefObject,
  forwardRef,
  useContext,
  useEffect,
  useRef,
} from "react";

import { InputGroupContextImp } from "./InputGroupContext";

export interface InputGroupItemProps extends InputProps {
  index?: number;
}

const InputGroupItem = forwardRef<HTMLInputElement, InputGroupItemProps>(
  ({ index, ...props }, ref) => {
    const _ref = useRef<HTMLInputElement>();
    const inputRef = (ref as MutableRefObject<HTMLInputElement>) || _ref;
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

    return <Input {...props} ref={inputRef} />;
  },
);

InputGroupItem.displayName = "InputGroupItem";
export default InputGroupItem;
