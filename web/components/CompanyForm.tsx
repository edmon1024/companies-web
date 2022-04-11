import { useEffect, useState } from "react"
import { useForm } from 'react-hook-form'
import {
  Flex,
  Box,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Spacer,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { 
  useCreateCompany,
  useGetCompany,
  useUpdateCompany,
} from "../hooks/useCompany"
import { useQueryClient } from "react-query"

const requiredIcon = () => {
  return <span style={{color:"red"}}>*</span>
}

const CompanyForm = ({ id, onClose }: { id?: string, onClose: () => void, }) => {
  const queryClient = useQueryClient()
  const {
    handleSubmit,
    setValue,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      ticker: "",
    }
  })
  const {
    mutate:createCompanyMutate
  } = useCreateCompany()
  const {
    data:companyData
  } = useGetCompany(id)
  const {
    mutate:updateCompanyMutate
  } = useUpdateCompany()

  const handleChange = (e) => {
    setValue(e.target.name, e.target.value)
  }
  const onSubmit = (values) => {
    if (!id) createCompanyMutate(values, {
        onSuccess: async (data) => {
          reset()
          return { data }
        },
      })
    else {
      updateCompanyMutate({
        id,
        data: values 
      }, {
        onSuccess: async (data) => {
          reset()
          onClose()          
          return { data }
        },
        onError: (error, data, context) => {
        },
      })
    }
  }

  useEffect(() => {
    if(companyData) {
      Object.entries(companyData).forEach(([key, value]) => {
          setValue(key, value)
      })
    }
  }, [companyData])

  useEffect(() => {
    if (!id){
      queryClient.removeQueries("company", { exact: true })
    }
  }, [id])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name} mt={4} mb={5}>
        <FormLabel htmlFor="name" mb={1}>Empresa {requiredIcon()}</FormLabel>
        <Input
          id="name"
          {...register("name", {
            required: "Este campo es requerido",
            minLength: { value: 1, message: "La longitud mínima debe de ser de 1" },
            maxLength: { value: 50, message: "La longitud máxima debe de ser de 50" },
            onChange: handleChange,
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
            onChange: handleChange,
          })}
        />
        <FormErrorMessage>
          {errors.description && errors.description.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.ticker} mb={5}>
      <FormLabel htmlFor="ticker" mb={1}>Símbolo {requiredIcon()}</FormLabel>
        <Input
          id="ticker"
          placeholder="Símbolo"
          {...register("ticker", {
            required: "Este campo es requerido",
            minLength: { value: 1, message: "La longitud mínima debe de ser de 1" },
            maxLength: { value: 10, message: "La longitud máxima debe de ser de 10" },
            onChange: handleChange,
          })}
        />
        <FormErrorMessage>
          {errors.ticker && errors.ticker.message}
        </FormErrorMessage>
      </FormControl>

      <Flex>
        <Box></Box>
        <Spacer/>
        <Box>
          <Button colorScheme="gray" mt={4} mx={1} mb={1} onClick={onClose}>
            Cancelar
          </Button>
          <Button colorScheme="blue" mt={4} mx={1} mb={1} isLoading={isSubmitting} type="submit">
            Guardar
          </Button>
        </Box>
      </Flex>
    </form>
  )
}

export default CompanyForm


