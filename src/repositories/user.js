import { get } from '@/common/js/httpHelper'

export const getUser = async () => {
  const getUserApiUrl = 'http://localhost:8088/getUser'
  const result = await get(getUserApiUrl)
  return result.data
}

export function getUserWithOutHttp() {
  return Promise.resolve({name: 'testUser', age: 22, sex: true})
}
