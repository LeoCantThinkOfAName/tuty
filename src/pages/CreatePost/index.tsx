import { ChangeEvent, FC, useState } from "react";

import { CATEGORY_TYPE } from "../../constants";
import { CreatePostContext } from "./context";
import { ExchangeForm } from "./forms/ExchangeForm";
import { Flex } from "@chakra-ui/react";
import { StudyGroupForm } from "./forms/StudyGroupForm";
import { TutorForm } from "./forms/TutorForm";
import { TypeSelector } from "./fields/TypeSelector";

export const CreatePostPage: FC = () => {
  const [formType, setFormType] = useState<CATEGORY_TYPE>("FIND_STUDENT");

  const typeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormType(value as CATEGORY_TYPE);
  };

  return (
    <Flex flexDir="column" mx="auto" w="100%">
      <TypeSelector onChange={typeOnChange} />
      <CreatePostContext.Provider value={formType}>
        <TutorForm />
        <ExchangeForm />
        <StudyGroupForm />
      </CreatePostContext.Provider>
    </Flex>
  );
};
