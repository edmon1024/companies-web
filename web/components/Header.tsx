import React from "react";
import { 
  Box, 
  Flex, 
  Text, 
  Button, 
  CloseButton, 
  IconButton,
} from "@chakra-ui/react";
import Title from "./Title";
import MenuItem from "./MenuItem"
import { BiMenu } from "react-icons/bi"

const Header = () => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      ps={9}
      pe={3}
      py={5}
      bg={["blue.500", "blue.500", "transparent", "transparent"]}
      color={["white", "white", "blue.700", "blue.700"]}
    >
      <Flex align="center">
        <Title
          w="100px"
          color={["white", "white", "blue.500", "blue.500"]}
        />
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? 
          <CloseButton size="lg" /> 
        : 
          <IconButton aria-label='Menu' icon={<BiMenu />} colorScheme="transparent" size="lg" />
        }
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto", lg: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
        >
          <MenuItem href="/register">Registro</MenuItem>
          <MenuItem href="/list">Listado</MenuItem>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;


