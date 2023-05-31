import { FC, KeyboardEventHandler, useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";

import CreatableSelect from "react-select/creatable";
import { InputProps } from "@chakra-ui/react";
import { MultiValue } from "react-select";

interface LabelFieldProps extends InputProps {}

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label,
});

export const LabelField: FC<LabelFieldProps> = ({
  isRequired,
  isInvalid,
  name,
  children,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<readonly Option[]>([]);

  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        if (!checkValidity(inputValue)) return;
        setValue((prev) => [...prev, createOption(inputValue)]);
        setInputValue("");
        event.preventDefault();
        break;
    }
  };

  const checkValidity = (newValue: string) => {
    const isDuplicated = value.find((obj) => obj.value === newValue);
    if (isDuplicated) false;
    return true;
  };

  const onInputChange = (newValue: string) => {
    setInputValue(newValue);
  };

  const onChange = (newValue: MultiValue<Option>) => {
    setValue(newValue);
  };

  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <FormLabel>{name}</FormLabel>
      <CreatableSelect
        isMulti
        isClearable
        menuIsOpen={false}
        components={{
          DropdownIndicator: null,
        }}
        onKeyDown={handleKeyDown}
        onInputChange={onInputChange}
        inputValue={inputValue}
        onChange={onChange}
        value={value}
        placeholder="Create ur own lable"
      />
      {children}
    </FormControl>
  );
};
