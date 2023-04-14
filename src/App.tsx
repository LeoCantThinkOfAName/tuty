import { InputGroup, InputGroupItem } from "./components/InputGroup";

import { ChakraProvider } from "@chakra-ui/react";

const App = () => {
  return (
    <ChakraProvider resetCSS>
      <InputGroup>
        <InputGroupItem />
        <InputGroupItem />
        <InputGroupItem />
      </InputGroup>
    </ChakraProvider>
  );
};

export default App;
