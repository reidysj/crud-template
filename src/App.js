import React from "react";
import "./App.css";
import person from "./assets/person.svg";
import { Switch, Route, Link } from "react-router-dom";

import { Flex, Heading, Box, Image, Text } from "@chakra-ui/react";

import { About, Login, Register, Nav } from "./components";

function App() {
  return (
    <div>
      <Nav />
      <Flex w="100%" h="80vh" align="center" bg="blue.900">
        <Image h="50vh" marginLeft="500px" src={person}></Image>
        <Flex
          direction="column"
          alignSelf="flex-start"
          marginTop="20vh"
          width="25vw"
          color="white"
          mx="150px"
        >
          <Heading align="center">Headline!</Heading>
          <Text>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </Text>
        </Flex>
      </Flex>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
