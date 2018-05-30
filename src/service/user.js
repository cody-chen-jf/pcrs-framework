import { getUser } from '@/repositories/user'

export const getUserResult = async () => {
  let user = await getUser()
  console.log('this is service call ...')
  return user
}
