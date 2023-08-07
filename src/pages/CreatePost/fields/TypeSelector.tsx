import { FormControl, FormLabel, Select, SelectProps } from "@chakra-ui/react";

import { CATEGORIES } from "../../../constants/index";
import { FC } from "react";

interface TypeSelectorProps extends SelectProps {
  visible?: boolean;
}

export const TypeSelector: FC<TypeSelectorProps> = ({ visible, ...props }) => {
  return (
    <FormControl isRequired hidden={visible}>
      <FormLabel>Type</FormLabel>
      <Select {...props} role="menu">
        <option role="menuitem" value={CATEGORIES.FIND_TUTOR}>
          Find Tutor
        </option>
        <option role="menuitem" value={CATEGORIES.FIND_STUDENT}>
          Find Student
        </option>
        <option role="menuitem" value={CATEGORIES.STUDY_GROUP}>
          Study Group
        </option>
        <option role="menuitem" value={CATEGORIES.SKILL_EXCHANGE}>
          Skill Exchange
        </option>
      </Select>
    </FormControl>
  );
};
