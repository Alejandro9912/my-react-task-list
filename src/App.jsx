import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Tasks } from "./pages/Tasks";
import { AbousUs } from "./pages/AbousUs";
import { Menu } from "./components/Menu";
import {
  ChakraProvider,
  ColorModeProvider,
  Flex,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Global } from "@emotion/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider>
      <ColorModeProvider>
        <Global
          styles={`@import url('https://fonts.googleapis.com/css2?family=Protest+Revolution&display=swap');`}
        />
        <Router>
          <Flex flexDirection="column" h="100vh" w="100vw">
            <Menu />
            {console.log(colorMode)}
            <IconButton
              aria-label="Toggle dark mode"
              icon={
                colorMode === "light" ? (
                  <MoonIcon color={"blue.400"} />
                ) : (
                  <SunIcon color={"orange.200"} />
                )
              }
              size="md"
              onClick={toggleColorMode}
              position="fixed"
              top="1rem"
              right="1rem"
              bg={colorMode === "light" ? "white" : "black"}
            />
            <Flex
              flexGrow={1}
              p={4}
              backgroundColor={colorMode === "light" ? "#506266" : "#0D0D0D"}
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
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
