import { useMutation } from 'react-query'
import apiAdmin from '../../../service/api'
import { setKey } from '../../../auth/verificaChaveDeAutorizacao'
import authKey from '../../../auth/keyAuth'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'

const useCreateUser = () => {
  const navigate = useNavigate()
  const toast = useToast()

  const createUser = async (payload) => {
    const response = await apiAdmin.post('/user', payload)

    if (response.status === 201) {
      return response.data
    } else if (response.status === 400) {
      throw new Error(response.data)
    }
  }

  const mutation = useMutation(createUser)

  const UseRequestCreateUser = async (email, senha) => {
    try {
      const result = await mutation.mutateAsync({
        email,
        senha
      })

      if (result) {
        toast({
          title: 'Usuário criado com sucesso!',
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
        setKey('KOA', authKey)
        navigate('/SetupCompletoReactJS/admin/home')
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast({
          title: 'Erro',
          description: `${error.response.data}`,
          status: 'warning',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
      } else {
        toast({
          title: 'Erro',
          description: 'Ocorreu um erro ao criar o usuário.',
          status: 'error',
          duration: 3000,
          isClosable: true,
          position: 'top-right'
        })
      }
    }
  }

  return {
    UseRequestCreateUser,
    isLoading: mutation.isLoading,
    isError: mutation?.error?.message
  }
}

export { useCreateUser }
