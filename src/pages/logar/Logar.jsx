import React from 'react'
import { AbsoluteCenter, Box, Button, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, Text, useColorMode, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import { setKey } from '../../auth/verificaChaveDeAutorizacao'
import authKey from '../../auth/keyAuth'
import FormLoginSchema from './schema/FormLoginSchema'
import { useNavigate } from 'react-router-dom'
import { useFilterAllUser } from './hooks/useFilterAllUser'
import componentKey from '../../key/keyComponent'

export default function Logar () {
  const { colorMode } = useColorMode()
  const toast = useToast()
  const { data } = useFilterAllUser()
  const navigate = useNavigate()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const users = data || []

  const verificaContaUsuario = (email, senha) => {
    if (users.length > 0) {
      const user = users.find(user => user.email === email.trim())

      if (user) {
        if (user.senha === senha.trim()) {
          setKey('KOA', authKey)
          navigate('/SetupCompletoReactJS/admin/home')
        } else {
          mostrarToast('Senha incorreta! Tente novamente.', 'warning')
        }
      } else {
        mostrarToast('Email não encontrado! Crie uma conta para acessar o sistema.', 'error')
      }
    } else {
      mostrarToast('Nenhum usuário cadastrado!', 'error')
    }
  }

  const mostrarToast = (description, status) => {
    toast({
      title: status === 'error' ? 'Erro!' : 'Aviso!',
      description,
      status,
      duration: 9000,
      isClosable: true,
      position: 'top-right'
    })
  }

  const initialValues = {
    email: '',
    senha: ''
  }

  const onSubmit = (values) => {
    verificaContaUsuario(values.email, values.senha)
  }

  const formik = useFormik({
    initialValues,
    validationSchema: FormLoginSchema,
    onSubmit
  })

  const isErrorEmail = formik.touched.email && formik.errors.email
  const isErrorSenha = formik.touched.senha && formik.errors.senha

  return (
    <FormControl
      key={componentKey}
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      p={4}
      margin={'5% auto'}
      rounded={'2xl'}
      boxShadow={'2xl'}
      w={'470px'}
      isInvalid={isErrorEmail || isErrorSenha} >

      <Heading fontSize={24}>Acesse sua conta</Heading>
      <Divider mb={4} />

      <FormLabel>Email</FormLabel>
      <InputGroup display={'flex'} flexDir={'column'} size='md'>
        <Input
          type='email'
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {isErrorEmail
          ? (
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            )
          : (
            <FormHelperText>Use o seu email cadastrado.</FormHelperText>
            )}
      </InputGroup>

      <FormLabel mt={10}>Senha</FormLabel>
      <InputGroup display={'flex'} flexDir={'column'} size='md'>
        <Input
          pr='4.5rem'
          name='senha'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          value={formik.values.senha}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {isErrorSenha
          ? (
            <FormErrorMessage>{formik.errors.senha}</FormErrorMessage>
            )
          : (
            <FormHelperText>Use sua senha cadastrada.</FormHelperText>
            )}
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button bg={'blue.300'} rounded={'2xl'} mt={10} onClick={formik.handleSubmit}>Acessar</Button>
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg={colorMode === 'light' ? 'white' : 'gray.800'} px='4'>
          <Text fontSize={14}>
            É sua primeira vez por aqui ?
          </Text>
        </AbsoluteCenter>
      </Box>
      <Button bg={'orange'} rounded={'2xl'} mb={4} onClick={() => { navigate('/SetupCompletoReactJS/registrar-se') }}>Registrar-se</Button>

    </FormControl>
  )
}
