import { ChangeEvent, FC, createContext, useState } from "react";

import { ExchangeForm } from "./forms/ExchangeForm";
import { Flex } from "@chakra-ui/react";
import { StudyGroupForm } from "./forms/StudyGroupForm";
import { TutorForm } from "./forms/TutorForm";
import { TypeSelector } from "./fields/TypeSelector";

type FormType =
  | "find_tutor"
  | "find_student"
  | "skill_exchange"
  | "study_group";

export const CreatePostContext = createContext<FormType>("find_student");

export const CreatePostPage: FC = () => {
  const [formType, setFormType] = useState<FormType>("find_tutor");

  const typeOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormType(value as FormType);
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
