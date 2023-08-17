import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";

import { AuthProvider } from "./constexts/AuthContext";
import { DEFAULT_TOAST_OPTION } from "./constants";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./services";
import { routes } from "./routes";
import { theme } from "./styles/theme";

const { ToastContainer, toast } = createStandaloneToast({
  defaultOptions: DEFAULT_TOAST_OPTION,
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider
        theme={theme}
        resetCSS
        toastOptions={{ defaultOptions: DEFAULT_TOAST_OPTION }}
      >
        <AuthProvider>
          <RouterProvider router={routes}></RouterProvider>
        </AuthProvider>
        <ToastContainer />
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export { toast };
export default App;
