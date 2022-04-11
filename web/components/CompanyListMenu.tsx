import React from "react";
import {
  Divider,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure, 
} from '@chakra-ui/react'
import { FiMoreVertical, FiEdit } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { GoGraph } from 'react-icons/go';
import { CompanyChart, CompanyEdit, CompanyDelete, } from "../components"

const CompanyListMenu = ({ id="", name="" }) => {
  const { 
    isOpen:isOpenGraph, 
    onOpen:onOpenGraph,
    onClose:onCloseGraph,
  } = useDisclosure()
  const { 
    isOpen:isOpenEdit, 
    onOpen:onOpenEdit,
    onClose:onCloseEdit,
  } = useDisclosure()
  const { 
    isOpen:isOpenDelete, 
    onOpen:onOpenDelete,
    onClose:onCloseDelete,
  } = useDisclosure()

  return (
    <>
      <IconButton bg="transparent" aria-label='Ver' icon={<GoGraph />} onClick={onOpenGraph} />
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<FiMoreVertical />}
          variant='outline'
          borderColor="transparent"
        />
        <MenuList>
          <MenuItem icon={<FiEdit />} onClick={onOpenEdit}>
            Editar
          </MenuItem>
          <Divider/>
          <MenuItem icon={<MdDeleteOutline />} onClick={onOpenDelete}>
            Eliminar
          </MenuItem>
        </MenuList>
      </Menu>

      <CompanyChart id={id} isOpen={isOpenGraph} onOpen={onOpenGraph} onClose={onCloseGraph} />
      <CompanyEdit id={id} isOpen={isOpenEdit} onOpen={onOpenEdit} onClose={onCloseEdit} />
      <CompanyDelete id={id} name={name} isOpen={isOpenDelete} onOpen={onOpenDelete} onClose={onCloseDelete} />
    </>
  )
}

export default CompanyListMenu

