import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

import { FC } from "react";

interface TypeSelectorProps extends SelectProps {
  visible?: boolean;
}

export const TypeSelector: FC<TypeSelectorProps> = ({ visible, ...props }) => {
  return (
    <FormControl isRequired hidden={visible}>
      <FormLabel>Type</FormLabel>
      <Select {...props} role="menu">
        <option role="menuitem" value="find_tutor">
          Find Tutor
        </option>
        <option role="menuitem" value="find_student">
          Find Student
        </option>
        <option role="menuitem" value="study_group">
          Study Group
        </option>
        <option role="menuitem" value="skill_exchange">
          Skill Exchange
        </option>
      </Select>
    </FormControl>
  );
};
