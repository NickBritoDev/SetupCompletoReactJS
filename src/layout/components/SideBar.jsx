import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Text, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import code from '../../../public/code.png'
import componentKey from '../../key/keyComponent'
import { GiExitDoor } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'

export default function Sidebar () {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const sair = () => {
    localStorage.removeItem('KOA')
    navigate('/')
    onClose()
  }

  return (
    <Box key={componentKey}>
      <Button mr={-4} ref={btnRef} colorScheme='transparent' onClick={onOpen}>
        <Wrap>
          <WrapItem bg={'rgba(0, 0, 3, 0.1)'} paddingInline={4} paddingBlock={1} rounded={'2xl'}>
            <Avatar size='md' name='Ryan Florence' src='https://media.licdn.com/dms/image/D4D03AQHkOrzKkqjTsQ/profile-displayphoto-shrink_800_800/0/1676591437408?e=1707350400&v=beta&t=tKLO7NqDWcvJ4hUci5OVQbo3RyLbcwDMlmvmacsN1Bk' />
            <Flex ml={1} mt={3} flexDir={'column'} alignItems={'flex-start'} color={'black'}>
              <Text fontSize={14}>Nicolas B. Cruz</Text>
              <Text fontSize={12}>DEV FULLSTACK JR.</Text>
            </Flex>
          </WrapItem>
        </Wrap>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={'flex'} alignItems={'center'}>
            <Image ml={-4} mb={-4} w="100px" src={code} alt="logo" />
            <Text fontSize={28}>React Setup</Text>
          </DrawerHeader>

          <DrawerBody>
          </DrawerBody>

          <DrawerFooter>
            <Button
              onClick={sair}
              mb={-2} mr={-4}
              color={'white'}
              bgGradient="linear(to-r, teal.500, blue.500)"
              _hover={{
                bgGradient: 'linear(to-r, red.500, yellow.500)'
              }}
            >Sair <GiExitDoor /></Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
