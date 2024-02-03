import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { AbousUs } from "./pages/AbousUs";
import { Menu } from "./components/Menu";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import { Global } from "@emotion/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Global
          styles={`@import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');`}
        />
        <BrowserRouter>
          <Flex flexDirection="column" h="100vh" w="100vw">
            <Menu />
            <Flex
              flexGrow={1}
              p={4}
              backgroundColor="#506266"
              justifyContent="center"
              alignItems="center"
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tasks" element={<Tasks />} />
                <Route path="/about-us" element={<AbousUs />} />
              </Routes>
            </Flex>
          </Flex>
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
