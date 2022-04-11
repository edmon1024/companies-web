import React from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Stat,
  Text,
} from '@chakra-ui/react'
import { useGetCompanies } from "../hooks/useCompany"


const CompanyTable = () => {
  const {
    data:companiesData,
  } = useGetCompanies()

  return (
    <>
      {companiesData && companiesData.count > 0 ? 
        <>
          <SimpleGrid columns={{ sm:2, lg:3, lg:4, xl:5}} spacing={2}>
            {companiesData.results.map((item, index) => 
              <Box key={index} w="100%" boxShadow='md' p='6' rounded='md' bg='white'>
                <Stat>
                  <Heading fontSize='xl'>{item.name}</Heading>
                  <Text mt={2} isTruncated>{item.description}</Text>
                </Stat>
              </Box>
            )}
          </SimpleGrid>
        </>
      :null}
    </>
  )
}

export default CompanyTable
