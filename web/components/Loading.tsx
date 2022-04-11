import React, { useEffect } from "react"
import {
  Box, 
  Modal,
  ModalContent,
  ModalOverlay,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import { 
  useIsFetching, 
  useIsMutating,
} from 'react-query'


const Loading = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()

  useEffect(() => {
    if (isFetching === 0 && isMutating === 0) onClose()
    if (isFetching > 0 || isMutating > 0) onOpen()
  }, [isFetching, isMutating])

  return (
    <>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent">
          <Box align="center">
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='blue.500'
              size='xl'
            />
          </Box>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Loading
