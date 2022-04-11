import React from "react"
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { CompanyForm } from "./"

const CompanyEdit = ({ id="", isOpen, onOpen, onClose }) => {
  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <CompanyForm id={id} onClose={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default CompanyEdit
