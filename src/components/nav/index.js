import React from "react";

import { Flex, Heading } from "@chakra-ui/react";

import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Flex
      direction={["column", "row"]}
      justify="space-between"
      margin="15px 25px"
      align="center"
    >
      <Heading>Hello, World</Heading>
      <Flex
        align="center"
        justify="space-evenly"
        width={["100%", "25%"]}
        marginTop={[10, 0]}
        direction={["column", "row"]}
      >
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
      </Flex>
    </Flex>
  );
}
