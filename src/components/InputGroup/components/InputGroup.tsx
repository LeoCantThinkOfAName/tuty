import {
  Children,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
  useState,
} from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import InputGroupItem, { InputGroupItemProps } from "./InputGroupItem";

import { InputGroupContextImp } from "../contexts/InputGroupContext";

interface InputGroupProps extends FlexProps {
  delimiter?: string;
  name?: string;
  hidden?: boolean;
}

const InputGroup = forwardRef<HTMLInputElement, InputGroupProps>(
  ({ children, delimiter, name, hidden, ...props }, ref) => {
    const [value, setValue] = useState<string[]>([]);
    const validChildren = Children.map(children, (child, index) => {
      const isValid = isValidElement(child);
      if (!isValid) {
        console.warn("Please provide valid child element");
        return null;
      }
      if (child.type !== InputGroupItem) {
        console.warn("InputGroup only accept InputGroupItem as children");
        return null;
      }

      return cloneElement(
        child as ReactElement<InputGroupItemProps>,
        index !== 0 ? { ml: "3", index } : { index },
      );
    });
    const contextValue = useMemo(() => ({ value, setValue }), [value]);

    return (
      <InputGroupContextImp.Provider value={contextValue}>
        <input
          type="text"
          value={value.join(delimiter)}
          readOnly
          ref={ref}
          name={name}
          hidden={hidden}
        />
        <Flex justifyContent="space-between" {...props}>
          {validChildren}
        </Flex>
      </InputGroupContextImp.Provider>
    );
  },
);

InputGroup.displayName = "InputGroup";
InputGroup.defaultProps = {
  delimiter: "",
  hidden: true,
};
export default InputGroup;
