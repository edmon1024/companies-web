import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Spacer,
  Heading,
  Stat,
  Text,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Select,
} from '@chakra-ui/react'
import { BsSearch } from "react-icons/bs"
import { useGetCompanies } from "../hooks/useCompany"
import { CompanyListMenu, } from "./"

const CompanyList = () => {
  const [filters, setFilters] = useState<{ sort: string; search:string; }>({sort:"name", search:""})
  const {
    data:companiesData,
    refetch:companiesRefetch,
  } = useGetCompanies(filters)

  const handleChange = (e) => {
    e.preventDefault()

    setFilters((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  useEffect(() => {
    companiesRefetch()
  }, [filters])

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md:2 }}>
        <Box w="100%" py={1} ps={2} pe={2} bg='white'>
          <Stack spacing={4}>
            <InputGroup>
              <Input placeholder='Busqueda' name="search" onChange={handleChange} />
              <InputRightElement children={<BsSearch color='green.500' />} />
            </InputGroup>
          </Stack>
        </Box>
        <Box w="100%" py={1} ps={2} pe={2} rounded='md' bg='white'>
          <Select name="sort" placeholder="Ordenar por:" value={filters.sort} onChange={handleChange}>
            <option value='name'>Nombre (Ascendente)</option>
            <option value='-name'>Nombre (Descendente)</option>
            <option value='ticker'>Símbolo (Ascendente)</option>
            <option value='-ticker'>Símbolo (Descendente)</option>
          </Select>
        </Box>
      </SimpleGrid>

      {companiesData && companiesData.count > 0 ? 
        <>
          <SimpleGrid columns={{ sm:2, lg:3, lg:4, xl:5}} spacing={4}>
            {companiesData.results.map((item, index) => 
              <Box key={index} w="100%" boxShadow='lg' py={6} ps={2} pe={2} rounded='md' bg='white'>
                <Stat style={{ minWidth:"230px" }}>
                  <Flex>
                    <Box ps={4} pt={3}>
                      <Heading fontSize='sm' color="gray.400">{item.ticker}</Heading>
                    </Box>

                    <Spacer />
                    <Box>
                      <CompanyListMenu id={item.id} name={item.name} />
                    </Box>
                  </Flex>
                  <Heading ps={4} pt={3} pe={4} fontSize='xl'>{item.name}</Heading>
                  <Text ps={4} mt={2} pe={4} isTruncated>{item.description}</Text>
                </Stat>
              </Box>
            )}
          </SimpleGrid>
        </>
      :
        <Heading fontSize='sm' color="gray.400">No se encontraron resultados</Heading>
      }
    </>
  )
}

export default CompanyList
