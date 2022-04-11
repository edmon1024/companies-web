import React from "react";
import { Flex } from "@chakra-ui/react"
import Header from "../Header"
import Loading from "../Loading"

const Layout = (props) => {
  return (
    <Flex
      direction="column"
      align="center"
      maxW={{ xl: "1440px" }}
      m="0 auto"
    >
      <Header />
      <Loading />
      {props.children}
    </Flex>
  );
}

export default Layout
