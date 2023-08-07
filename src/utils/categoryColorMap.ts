import { CATEGORIES, CATEGORY_TYPE } from "../constants";

import { ThemeTypings } from "@chakra-ui/react";

export const categoryColorMap = (
  category: CATEGORY_TYPE
): ThemeTypings["colorSchemes"] => {
  switch (category) {
    case CATEGORIES.SKILL_EXCHANGE:
      return "red";
    case CATEGORIES.STUDY_GROUP:
      return "pink";
    case CATEGORIES.FIND_STUDENT:
      return "green";
    case CATEGORIES.FIND_TUTOR:
    default:
      return "blue";
  }
};
