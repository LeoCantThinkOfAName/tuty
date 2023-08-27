import {
  ChangeEvent,
  Children,
  KeyboardEvent,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  forwardRef,
  isValidElement,
  useMemo,
  useRef,
} from "react";
import { Flex, FlexProps, Input } from "@chakra-ui/react";

import { InputGroupItem } from "./InputGroupItem";

interface InputGroup extends PropsWithChildren, Omit<FlexProps, "onChange"> {
  value: string;
  onChange: (value: string) => unknown;
  maxLength: number;
  hideInput?: boolean;
}

export const InputGroup = forwardRef<HTMLInputElement, InputGroup>(
  ({ value, onChange, maxLength, children, hideInput, ...props }, ref) => {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputsValue = inputsRef.current.map((input) => input?.value);
      const index = inputsRef.current.findIndex(
        (input) => input?.dataset.sequence === e.target.dataset.sequence
      );

      const newValue = inputsValue.join("");
      onChange(newValue);

      const nextInput = inputsRef.current[index + 1];
      if (nextInput && e.target.value.length === maxLength) {
        nextInput.focus();
      }
    };

    const onKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
      const index = inputsRef.current.findIndex(
        (input) => input?.dataset.sequence === e.currentTarget.dataset.sequence
      );

      const prevInput = inputsRef.current[index - 1];
      if (e.key === "Backspace" && !e.currentTarget.value && prevInput) {
        prevInput.focus();
        if (e.currentTarget.type !== "number")
          prevInput.setSelectionRange(0, prevInput.value.length);
      }
    };

    const newChildren = useMemo(() => {
      inputsRef.current = [];
      return Children.map(children, (child, index) => {
        const isValid = isValidElement(child);
        if (!isValid) {
          console.warn("Please provide valid child element");
          return null;
        }
        if (child.type !== InputGroupItem) {
          console.warn("InputGroup only accept InputGroupItem as children");
          return child;
        }

        return cloneElement(child as ReactElement, {
          ref: (el: HTMLInputElement) => {
            if (el) return inputsRef.current.push(el);
          },
          onChange: (e: ChangeEvent<HTMLInputElement>) => inputOnChange(e),
          onKeyUp,
          maxLength,
          "data-sequence": index,
        });
      });
    }, [children, maxLength]);

    return (
      <>
        <Input ref={ref} hidden={hideInput} defaultValue={value} />
        <Flex {...props}>{newChildren}</Flex>
      </>
    );
  }
);

InputGroup.displayName = "InputGroup";
InputGroup.defaultProps = {
  maxLength: 1,
  hideInput: true,
};
