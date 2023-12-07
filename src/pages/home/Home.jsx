import { Box, Heading, Image, Text, VStack, useColorMode } from '@chakra-ui/react'
import React from 'react'
import reactImg from '../../../public/react.png'
import componentKey from '../../key/keyComponent'

export default function Home () {
  const { colorMode } = useColorMode()

  return (
    <VStack key={componentKey} p={2} w={'100%'}>
      <Heading
        borderBottom={'1px solid #ccc'}
        color={colorMode === 'light' ? 'gray.700' : 'white'} mt={4} fontSize={26}>
        Desejo as boas vindas ao React Setup
      </Heading>
      <Image src={reactImg} />
      <Box
        color={'white'}
        textAlign={'justify'}
        paddingInline={8}
        paddingBlock={6}
        rounded={'2xl'}
        w={'90%'}
        boxShadow={'lg'}
        bgGradient="linear(to-r, blue.600, blue.900)"
        _hover={{
          backgroundSize: '200% 100%',
          transition: 'background-position 0.3s ease-in-out, background-size 0.3s ease-in-out',
          bgGradient: 'linear(to-r, blue.600, black)',
          backgroundPosition: 'right center'
        }}
        transition="background-position 0.3s ease-in-out, background-size 0.3s ease-in-out"
      >
        <Text>Um setup abrangente alinhado com as melhores práticas, incluindo configurações para Eslint, Editconfig e um conjunto robusto de ferramentas como Chakra UI, Vite, Vitest e React Testing Library. Além disso, já está integrado o UUIDv4 para geração de identificadores únicos. Antecipando o crescimento e a evolução contínua, novas funcionalidades serão progressivamente incorporadas conforme a demanda de implantação e meu aprimoramento técnico.</Text>
      </Box>
    </VStack>
  )
}
