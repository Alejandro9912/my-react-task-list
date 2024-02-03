import { Flex, Heading } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading
          size="xl"
          fontFamily="Protest Revolution"
          fontSize={120}
          color={
            localStorage.getItem("chakra-ui-color-mode") === "light"
              ? "whitesmoke"
              : "grey"
          }
        >
          Bienvenido
        </Heading>
        <Heading
          size="xl"
          fontFamily="Protest Revolution"
          fontSize={120}
          color={
            localStorage.getItem("chakra-ui-color-mode") === "light"
              ? "whitesmoke"
              : "grey"
          }
        >
          A
        </Heading>
        <Heading
          size="xl"
          fontFamily="Protest Revolution"
          fontSize={120}
          color={
            localStorage.getItem("chakra-ui-color-mode") === "light"
              ? "whitesmoke"
              : "grey"
          }
        >
          ToDo App
        </Heading>
      </Flex>
    </>
  );
};
