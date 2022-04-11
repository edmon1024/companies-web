import React, { useEffect, useRef, } from "react"
import dynamic from "next/dynamic"
const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });
import { useQueryClient } from "react-query"
import {
  Container,
  Box,
  Button,
  Heading,
  Stat,
  Text,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import {
  useGetCompany,
} from "../hooks/useCompany"
import { companyRetrieveVoid } from "../interfaces/Company"

const CompanyChart = ({ id="", isOpen, onOpen, onClose }) => {
  const queryClient = useQueryClient()
  const prevIdRef = useRef()
  const {
    data:companyData=companyRetrieveVoid,
    refetch:companyRefetch,
  } = useGetCompany(id)

  return (
    <>
      <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} scrollBehavior="outside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Valores de mercado</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={1}>
            <Stat>
              <Flex>
                <Box ps={4} pt={3}>
                  <Heading fontSize='sm' color="gray.400">{companyData.ticker}</Heading>
                </Box>
              </Flex>
              <Heading ps={4} pt={3} fontSize='xl'>{companyData.name}</Heading>
              <Text ps={4} mt={2}>{companyData.description}</Text>

              <Box>
              {companyData.stock_market.length > 0 ?
                <Container w="100%" p={0}>
                  <Plot
                    data={[
                      {
                        x: companyData.stock_market.map(x => x.date),
                        close: companyData.stock_market.map(x => x.C),
                        high: companyData.stock_market.map(x => x.H),
                        low: companyData.stock_market.map(x => x.L),
                        open: companyData.stock_market.map(x => x.O),
                        increasing: {line: {color: 'black'}},
                        decreasing: {line: {color: 'red'}},
                        type: 'ohlc',
                        xaxis: "x",
                        yaxis: "y",
                      },
                    ]}
                    layout={{
                      dragmode: 'zoom',
                      showlegend: false,
                      xaxis: {
                        autorange: true,
                        title: 'Fecha'
                      },
                      yaxis: {
                        autorange: true,
                      },
                    }}
                    useResizehandle={true}
                    style={{width:"100%",height:"100%"}}
                  />
                </Container>
              :null}
              </Box>

            </Stat>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="orange" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CompanyChart

