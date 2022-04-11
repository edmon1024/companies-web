import React from "react"
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  useDeleteCompany,
} from "../hooks/useCompany"


const CompanyDelete = ({ id="", name="", isOpen, onOpen, onClose }) => {
  const cancelRef = React.useRef()
  const {
    mutate:deleteCompanyMutate
  } = useDeleteCompany()

  const onDelete = () => {
    deleteCompanyMutate(id, {
      onSuccess: async (data) => {
        onClose()
        return { data }
      },
      onError: (error, data, context) => {
        onClose()
      },
    })
  }

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Eliminar
          </AlertDialogHeader>

          <AlertDialogBody>
            ¿Esta seguro de eliminar la empresa "{name}"?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme='red' onClick={onDelete} ml={3}>
              Eliminar
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default CompanyDelete
