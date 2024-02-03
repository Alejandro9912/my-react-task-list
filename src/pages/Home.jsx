import { Flex, Heading } from "@chakra-ui/react";

export const Home = () => {
  return (
    <>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading
          size="xl"
          fontFamily="Protest Revolution"
          fontSize={120}
          color={"#D2E8E3"}
        >
          Bienvenido
        </Heading>
        <Heading
          size="xl"
          fontFamily="Protest Revolution"
          fontSize={120}
          color={"#D2E8E3"}
        >
          A
        </Heading>
        <Heading
          size="xl"
          fontFamily="Protest Revolution"
          fontSize={120}
          color={"#D2E8E3"}
        >
          ToDo App
        </Heading>
      </Flex>
    </>
  );
};
