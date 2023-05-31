import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

import { FC } from "react";

interface TypeSelectorProps extends SelectProps {
  visible?: boolean;
}

export const TypeSelector: FC<TypeSelectorProps> = ({ visible, ...props }) => {
  return (
    <FormControl isRequired hidden={visible}>
      <FormLabel>Type</FormLabel>
      <Select {...props}>
        <option value="find_tutor">Find Tutor</option>
        <option value="find_student">Find Student</option>
        <option value="study_group">Study Group</option>
        <option value="skill_exchange">Skill Exchange</option>
      </Select>
    </FormControl>
  );
};
