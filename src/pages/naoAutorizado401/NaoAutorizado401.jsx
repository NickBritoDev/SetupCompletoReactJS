import { VStack, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import Img401 from '../../../public/401.png'
import componentKey from '../../key/keyComponent'
import { useNavigate } from 'react-router-dom'

export default function NaoAutorizado401 () {
  const navigate = useNavigate()
  return (
    <VStack mt={20} key={componentKey}>
      <Image src={Img401} />
      <Text fontSize={20} >Você <strong>não tem permissão</strong> de acesso a essa pagina.</Text>
      <Button onClick={() => { navigate('/') }} mt={6}>Logar Novamente</Button>
    </VStack>
  )
}
