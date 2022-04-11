import type { NextPage } from 'next'
import Link from 'next/link'
import {
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Heading,
  Stack,
  Text 
} from "@chakra-ui/react";
import { BsBuilding } from 'react-icons/bs';


const data = {
  title: "Directorio de empresas",
  subtitle: "Creación y listado de empresas generadas",
  creation: "Registro",
  list: "Listado",
};


const Home: NextPage = () => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around" }}
      wrap="no-wrap"
      minH="65vh"
      px={8}
      mb={10}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "60%" }}
        align="center"
      >
        <Icon as={BsBuilding} w={10} h={10} />
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="blackAlpha"
          textAlign="center"
        >
          {data.title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="gray"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign="center"
        >
          {data.subtitle}
        </Heading>
        <Link href="/register" passHref>
          <Button
            colorScheme="orange"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {data.creation}
          </Button>
        </Link>

        <Link href="/list" passHref>
          <Button
            colorScheme="blue"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
          >
            {data.list}
          </Button>
        </Link>
      </Stack>
    </Flex>
  )
}

export default Home


