import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaMoon, FaRegSun } from "react-icons/fa";

export const Menu = () => {
  return (
    <Flex justifyContent="space-around" p={4} bg="#10454F">
      <UnorderedList
        display="flex"
        listStyleType="none"
        m={0}
        p={0}
        fontFamily="Protest Revolution"
        fontSize={30}
      >
        <ListItem>
          <LinkWrapper to="/">Home</LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper to="/tasks">Tasks</LinkWrapper>
        </ListItem>
        <ListItem>
          <LinkWrapper to="/about-us">About Us</LinkWrapper>
        </ListItem>
        <ListItem>
          <FaMoon />
          <FaRegSun />
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
      color: "white",
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
