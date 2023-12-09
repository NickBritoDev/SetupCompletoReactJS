import { Button, FormControl, Input } from '@chakra-ui/react'
import { setKey } from '../../auth/verificaChaveDeAutorizacao'
import React from 'react'
import authKey from '../../auth/keyAuth'
import { useNavigate } from 'react-router-dom'
import GoogleLoginButton from './googleAuth/GoogleAuth'

export default function Logar () {
  const navigate = useNavigate()
  return (
    <FormControl margin={'5% auto'} rounded={'2xl'} boxShadow={'2xl'} w={'450px'} height={'450px'} >

      <Input />
    <Input/>
      <Button onClick={() => {
        setKey('KOA', authKey)
        navigate('/SetupCompletoReactJS/admin/home')
      }}>Logar</Button>
      <GoogleLoginButton/>
    </FormControl>
  )
}
