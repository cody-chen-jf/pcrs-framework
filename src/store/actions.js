import * as types from './mutation-types'

export const setUser = function ({commit, state}, user) {
  let newUser = user
  console.log(newUser)
  commit(types.SET_USER, newUser)
}

export const setNewRouter = function ({commit, state}, newRouter) {
  commit(types.SET_NEW_ROUTER, newRouter)
}
