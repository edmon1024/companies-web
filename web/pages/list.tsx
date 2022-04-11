import type { NextPage } from 'next'
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
import Layout from "../components/layouts/Layout"
import { CompanyList } from "../components"


const Register: NextPage = () => {
  return (
    <Layout>
      <Flex
        wrap="no-wrap"
        minH="50vh"
        mb={10}
      >
        <Stack
          spacing={4}
          w={{ base: "100%" }}
          align="center"
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="blackAlpha"
            textAlign="center"
          >
            Listado
          </Heading>

          <CompanyList />
        </Stack>
      </Flex>
    </Layout>
  )
}

export default Register


