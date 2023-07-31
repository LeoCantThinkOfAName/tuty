import { useTranslation } from "react-i18next";
import { zhTW } from "date-fns/locale";

export const useLocale = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const locale = language === "zh" ? "zh-TW" : undefined;
  const localePkg = language === "zh" ? zhTW : undefined;

  return { locale, localePkg };
};
