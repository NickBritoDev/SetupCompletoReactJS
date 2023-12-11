import { useMutation } from 'react-query'
import apiAdmin from '../../../service/api'

const useCreateUser = () => {
  const createUser = async (payload) => {
    const response = await apiAdmin.post('/user', payload)
    return response.data
  }

  const mutation = useMutation(createUser)

  const UseRequestCreateUser = async (senha, email) => {
    await mutation.mutateAsync({
      senha,
      email
    })
  }

  return {
    UseRequestCreateUser,
    isLoading: mutation.isLoading,
    isError: mutation?.error?.message
  }
}

export { useCreateUser }
