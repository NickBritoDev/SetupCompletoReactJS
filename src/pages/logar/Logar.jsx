import { Button } from '@chakra-ui/react'
import { setKey } from '../../auth/verificaChaveDeAutorizacao'
import React from 'react'
import authKey from '../../auth/keyAuth'
import { useNavigate } from 'react-router-dom'

export default function Logar () {
  const navigate = useNavigate()
  return (
    <Button onClick={() => {
      setKey('KOA', authKey)
      navigate('/admin/home')
    }}>Logar</Button>
  )
}
