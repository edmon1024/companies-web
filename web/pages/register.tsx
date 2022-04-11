import type { NextPage } from 'next'
import {
  Button,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useRouter } from "next/router"
import Layout from "../components/layouts/Layout"
import { CompanyForm } from "../components"


const Register: NextPage = () => {
  const router = useRouter()
  const onClose = () => router.push("/list")

  return (
    <Layout>
      <Flex
        wrap="no-wrap"
        minH="50vh"
        px={8}
        mb={10}
      >
        <Stack
          spacing={4}
          align="center"
        >
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
            color="blackAlpha"
            textAlign="center"
            mb={3}
          >
            Registro
          </Heading>

          <CompanyForm onClose={onClose}/>
        </Stack>
      </Flex>
    </Layout>
  )
}

export default Register


