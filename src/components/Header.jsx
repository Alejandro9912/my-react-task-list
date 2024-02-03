import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
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
    </>
  );
};

export default Header;
