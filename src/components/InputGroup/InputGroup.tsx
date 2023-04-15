import {
  Children,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useState,
} from "react";
import { Flex, FlexProps } from "@chakra-ui/react";
import InputGroupItem, { InputGroupItemProps } from "./InputGroupItem";

import { InputGroupContextImp } from "./InputGroupContext";

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
      if (typeof child.type === "string") {
        console.warn("InputGroup only accept InputGroupItem as children");
        return null;
      }
      if (child.type !== InputGroupItem) {
        console.warn("InputGroup only accept InputGroupItem as children");
        return null;
      }

      const tempChild = cloneElement(
        child as ReactElement<InputGroupItemProps>,
        index !== 0 ? { ml: "3", index } : { index },
      );

      return tempChild;
    });

    return (
      <InputGroupContextImp.Provider value={{ value, setValue }}>
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
