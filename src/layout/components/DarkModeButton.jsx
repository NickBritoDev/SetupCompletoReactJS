import { Box, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import componentKey from '../../key/keyComponent'
import { BsMoonStarsFill } from 'react-icons/bs'
import { RiSunFoggyFill } from 'react-icons/ri'

const DarkModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Box key={componentKey}>
      {colorMode === 'light'
        ? (
        <Button
          onClick={toggleColorMode}
          bgGradient="linear(to-r, gray.500, blue.800)"
          _hover={{
            bgGradient: 'linear(to-r, red.500, yellow.500)'
          }}>
            <BsMoonStarsFill fontSize={26} />
        </Button>
          )
        : (
          <Button
            onClick={toggleColorMode}
            bgGradient="linear(to-r, red.500, yellow.500)"
            _hover={{
              bgGradient: 'linear(to-r, gray.500, blue.800)'
            }}>
            <RiSunFoggyFill fontSize={26} />
          </Button>
          )}
    </Box>
  )
}

export default DarkModeButton
