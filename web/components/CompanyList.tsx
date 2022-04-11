import React from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Spacer,
  Heading,
  Stat,
  Text,
} from '@chakra-ui/react'
import { useGetCompanies } from "../hooks/useCompany"
import { CompanyListMenu, } from "./"

const CompanyList = () => {
  const {
    data:companiesData,
  } = useGetCompanies()

  return (
    <>
      {companiesData && companiesData.count > 0 ? 
        <>
          <SimpleGrid columns={{ sm:2, lg:3, lg:4, xl:5}} spacing={4}>
            {companiesData.results.map((item, index) => 
              <Box key={index} w="100%" boxShadow='lg' py={6} ps={2} pe={2} rounded='md' bg='white'>
                <Stat>
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
      :null}
    </>
  )
}

export default CompanyList
