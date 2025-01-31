import axi from '@/utils/axios'
import type { User } from '@/types/user'

export const useUserService = () => {
  const getUser = async (id: number): Promise<User> => {
    const { data } = await axi.get(`/api/users/${id}`)
    return data
  }

  return { getUser }
}
