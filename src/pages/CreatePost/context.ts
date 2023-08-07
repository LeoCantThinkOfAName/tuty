import { createContext, useContext } from "react";

import { CATEGORY_TYPE } from "../../constants";

export const CreatePostContext = createContext<CATEGORY_TYPE>("FIND_STUDENT");

export const useCreatePostContext = () => useContext(CreatePostContext);
