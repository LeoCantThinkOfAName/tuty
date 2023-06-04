import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./services";
import { routes } from "./routes";
import { theme } from "./styles/theme";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme} resetCSS>
        <RouterProvider router={routes}></RouterProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default App;
