import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  return (
    <ChakraProvider theme={theme} resetCSS>
      {t("common.submit")}
    </ChakraProvider>
  );
};

export default App;
