import { useQuery } from 'react-query'
import apiAdmin from '../../../service/api'

const useFilterAllUser = () => {
  return useQuery(
    ['useGetFilterAllUser'],
    async () => {
      const response = await apiAdmin.get('/user')
      return response.data
    },
    {
      refetchInterval: 10000,
      refetchOnWindowFocus: false,
      staleTime: 10000
    }
  )
}

export { useFilterAllUser }
