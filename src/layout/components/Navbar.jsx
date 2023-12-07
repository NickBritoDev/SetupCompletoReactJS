import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './SideBar'
import componentKey from '../../key/keyComponent'
import code from '../../../public/code.png'
import { verificarChave } from '../../auth/verificaChaveDeAutorizacao'

export default function Navbar () {
  if (verificarChave('KOA')) {
    return (
      <Flex
        h={20}
        key={componentKey}
        as="nav"
        align="center"
        justify="space-between"
        padding="1rem"
        bg="transparent"
        boxShadow="md"
        color="white"
      >
        <Image ml={-4} mb={-4} w="100px" src={code} alt="logo" />
        <Sidebar />
      </Flex>
    )
  } else {
    return null
  }
}
