import "i18next";
import zh from "../../public/locales/zh/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof zh;
    keySeparator: ".";
    nsSeparator: ".";
  }
}
