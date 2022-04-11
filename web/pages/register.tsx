import type { NextPage } from 'next'
import { useForm } from 'react-hook-form'
import {
  Button,
  Flex,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import Layout from "../components/layouts/Layout"
import { useCreateCompany } from "../hooks/useCompany"

const requiredIcon = () => {
  return <span style={{color:"red"}}>*</span>
}

const Register: NextPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm()
  const {
    mutate:createCompanyMutate
  } = useCreateCompany()

  const onSubmit = (values) => {
    createCompanyMutate(values)
  }

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

          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.name} mt={4} mb={5}>
              <FormLabel htmlFor="name" mb={1}>Empresa {requiredIcon()}</FormLabel>
              <Input
                id="name"
                {...register("name", {
                  required: "Este campo es requerido",
                  minLength: { value: 1, message: "La longitud mínima debe de ser de 1" },
                  maxLength: { value: 50, message: "La longitud máxima debe de ser de 50" },
                })}
              />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.description} mb={5}>
              <FormLabel htmlFor="description" mb={1}>Descripción {requiredIcon()}</FormLabel>
              <Input
                id="description"
                placeholder="Descripción"
                {...register("description", {
                  required: "Este campo es requerido",
                  minLength: { value: 1, message: "La longitud mínima debe de ser de 1" },
                  maxLength: { value: 100, message: "La longitud máxima debe de ser de 100" },
                })}
              />
              <FormErrorMessage>
                {errors.description && errors.description.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.symbol} mb={5}>
            <FormLabel htmlFor="symbol" mb={1}>Símbolo {requiredIcon()}</FormLabel>
              <Input
                id="symbol"
                placeholder="Símbolo"
                {...register("symbol", {
                  required: "Este campo es requerido",
                  minLength: { value: 1, message: "La longitud mínima debe de ser de 1" },
                  maxLength: { value: 10, message: "La longitud máxima debe de ser de 10" },
                })}
              />
              <FormErrorMessage>
                {errors.symbol && errors.symbol.message}
              </FormErrorMessage>
            </FormControl>

            <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
              Guardar
            </Button>
          </form>
        </Stack>
      </Flex>
    </Layout>
  )
}

export default Register


