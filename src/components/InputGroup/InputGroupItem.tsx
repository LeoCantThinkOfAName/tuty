import { FC, useCallback, useContext, useEffect, useRef } from "react";
import { Input, InputProps } from "@chakra-ui/react";

import { InputGroupContextImp } from "./InputGroupContext";

export interface InputGroupItemProps extends InputProps {
  index?: number;
}

const InputGroupItem: FC<InputGroupItemProps> = ({ index, ...props }) => {
  const ref = useRef<HTMLInputElement>();
  const { value, setValue } = useContext(InputGroupContextImp);

  useEffect(() => {
    const setGroupValue = (e: Event) => {
      setValue((prev) => {
        const newValue = [...prev];
        newValue[index as number] = (e.target as HTMLInputElement).value;
        return newValue;
      });
    };

    ref.current?.addEventListener("input", setGroupValue);

    return () => {
      ref.current?.removeEventListener("input", setGroupValue);
    };
  }, []);

  return <Input {...props} ref={ref} />;
};

InputGroupItem.displayName = "InputGroupItem";
export default InputGroupItem;
