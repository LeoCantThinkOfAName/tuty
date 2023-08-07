export const OTP_COUNT_DOWN_TIME = 60;

export const PATHS = {
  ROOT: "/",
  SEARCH: "/search/:term",
  CREATE_POST: "/create-post",
  MESSAGES: "/messages",
};

export const BaseUnit = 4;

export const HeaderHeight = [16, 20];

export const MaximumArticleHeight = 48;

export const CATEGORIES = {
  FIND_TUTOR: "FIND_TUTOR",
  FIND_STUDENT: "FIND_STUDENT",
  SKILL_EXCHANGE: "SKILL_EXCHANGE",
  STUDY_GROUP: "STUDY_GROUP",
};

export type CATEGORY_TYPE = keyof typeof CATEGORIES;
