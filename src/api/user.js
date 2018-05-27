import axios from 'axios'

export function getUser() {
  const getUserApiUrl = 'http://localhost:8088/getUser'
  return axios.get(getUserApiUrl).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getUserWithOutHttp() {
  return Promise.resolve({name: 'testUser', age: 22, sex: true})
}
