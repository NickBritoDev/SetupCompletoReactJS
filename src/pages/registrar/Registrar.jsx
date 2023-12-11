import { AbsoluteCenter, Box, Button, Divider, FormControl, FormErrorMessage, FormHelperText, FormLabel, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import FormLoginSchema from '../logar/schema/FormLoginSchema'
import { useNavigate } from 'react-router-dom'
import { useCreateUser } from '../logar/hooks/useCreateUser'

export default function Registrar () {
  const { UseRequestCreateUser } = useCreateUser()
  const navigate = useNavigate()
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const initialValues = {
    email: '',
    senha: ''
  }

  const onSubmit = async (values) => {
    await UseRequestCreateUser(values.email, values.senha)
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
      display={'flex'}
      flexDir={'column'}
      justifyContent={'center'}
      p={4}
      margin={'5% auto'}
      rounded={'2xl'}
      boxShadow={'2xl'}
      w={'470px'}
      isInvalid={isErrorEmail || isErrorSenha} >

      <Heading fontSize={24}>Criar uma nova conta</Heading>
      <Divider mb={10} />

      <FormLabel mt={10}>Email</FormLabel>
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

      <Button bg={'blue.300'} rounded={'2xl'} mt={10} onClick={formik.handleSubmit}>Criar conta</Button>
      <Box position='relative' padding='10'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          <Text fontSize={14}>
            Já tem uma conta ?
          </Text>
        </AbsoluteCenter>
      </Box>
      <Button bg={'orange'} rounded={'2xl'} mb={4} onClick={() => { navigate('/SetupCompletoReactJS') }}>Acessar com sua conta</Button>

    </FormControl>
  )
}
