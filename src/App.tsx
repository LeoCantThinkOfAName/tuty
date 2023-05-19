import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <RouterProvider router={routes}></RouterProvider>
    </ChakraProvider>
  );
};

export default App;
