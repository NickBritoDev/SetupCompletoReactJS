import { Input, Textarea, Button, Flex, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import emailjs from 'emailjs-com'
import React, { useState } from 'react'
import { useFilterAllUser } from './hooks/useFilterAllUser'
import componentKey from '../key/keyComponent'

const EmailForm = () => {
  const toast = useToast()
  const { data } = useFilterAllUser()
  const dadosUsuario = data || []
  const [, setSubmittedEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isReadyToSend, setIsReadyToSend] = useState(false)
  const [exibeForm, setExibeForm] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

  const sendEmail = async (e) => {
    e.preventDefault()

    const userEmail = e.target.email.value.toLowerCase().trim()
    const userExists = dadosUsuario.find(user => user.email.toLowerCase() === userEmail)

    if (userExists) {
      setSubmittedEmail(userEmail)
      setPassword(userExists.senha)
      setIsReadyToSend(true)
    } else {
      toast({
        title: 'Email não localizado.',
        description: 'Email não encontrado na lista de usuários, cria uma conta para poder acessar.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
        position: 'top-right'
      })
    }
  }

  React.useEffect(() => {
    if (isReadyToSend && password) {
      const form = document.querySelector('form')
      if (form) {
        emailjs.sendForm('service_ykdd7j3', 'template_eb2j6bl', form, 'cj3uFcdBMZFwfhzPW')
          .then((result) => {
            toast({
              title: 'Email enviado.',
              description: 'Consulte seu email para poder acessar.',
              status: 'success',
              duration: 9000,
              isClosable: true,
              position: 'top-right'
            })
          })
          .catch(() => {
            toast({
              title: 'Erro ao enviar email.',
              description: 'Verifique o email digitado e tente novamente.',
              status: 'error',
              duration: 9000,
              isClosable: true,
              position: 'top-right'
            })
          })
        setIsReadyToSend(false)
      }
    }
  }, [isReadyToSend, password])

  return (
    <Flex key={componentKey}>
      <Button display={exibeForm ? 'none' : ''} onClick={() => {
        setExibeForm(!exibeForm)
        setOverlay(<OverlayOne />)
        onOpen()
      }} bg={'transparent'}>Esqueceu sua senha?</Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Alteração de Senha</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Preencha o email para recuperação de senha:</Text>
            <form onSubmit={sendEmail}>
              <Input type="email" name="email" placeholder="Seu e-mail" />
              <Textarea
                display={'none'}
                value={password}
                readOnly
                name="message"
                placeholder="Sua mensagem"
              />
              <Flex mt={6} gap={2} alignItems={'center'} justifyContent={'flex-end'}>
                <Button onClick={onClose}>Cancelar</Button>
                <Button
                  color={'white'}
                  bg={'blue.300'}
                  onClick={() => {
                    setExibeForm(!exibeForm)
                    onClose()
                  }} type="submit">Enviar Email</Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>

      </Modal>
    </Flex>
  )
}

export default EmailForm
