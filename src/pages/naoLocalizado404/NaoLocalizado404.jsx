import { Button, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Img404 from '../../../public/404.png'
import componentKey from '../../key/keyComponent'

export default function NaoLocalizado404 () {
  const navigate = useNavigate()

  const goBackOneStep = () => {
    navigate('/SetupCompletoReactJS/admin/home')
  }

  return (
    <VStack mt={20} key={componentKey}>
      <Image src={Img404} />
      <Text fontSize={20}>
        Poxa! <strong>Nós não encontramos</strong> o caminho para essa página.
      </Text>
      <Button onClick={goBackOneStep} mt={3}>
        Voltar Para Tela Inicial
      </Button>
    </VStack>
  )
}
