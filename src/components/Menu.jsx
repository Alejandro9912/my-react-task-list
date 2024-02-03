import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Menu = () => {
  
  return (
    <Flex
      justifyContent="space-around"
      p={4}
      bg={
        localStorage.getItem("chakra-ui-color-mode") === "light"
          ? "#10454F"
          : "#404040"
      }
    >
      <UnorderedList
        display="flex"
        listStyleType="none"
        m={0}
        p={0}
        fontFamily="Protest Revolution"
        fontSize={30}
      >
        <ListItem
          color={
            localStorage.getItem("chakra-ui-color-mode") === "light"
              ? "whitesmoke"
              : "grey"
          }
        >
          <LinkWrapper to="/">Home</LinkWrapper>
        </ListItem>
        <ListItem
          color={
            localStorage.getItem("chakra-ui-color-mode") === "light"
              ? "whitesmoke"
              : "grey"
          }
        >
          <LinkWrapper to="/tasks">Tasks</LinkWrapper>
        </ListItem>
        <ListItem
          color={
            localStorage.getItem("chakra-ui-color-mode") === "light"
              ? "whitesmoke"
              : "grey"
          }
        >
          <LinkWrapper to="/about-us">About Us</LinkWrapper>
        </ListItem>
      </UnorderedList>
    </Flex>
  );
};

const LinkWrapper = ({ to, children }) => (
  <Link
    to={to}
    style={{
      textDecoration: "none",
      padding: "8px",
      margin: "0 10px",
      borderRadius: "4px",
      transition: "background-color 0.3s",
    }}
    _hover={{ bg: "teal.700" }}
  >
    {children}
  </Link>
);
