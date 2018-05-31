import * as types from './mutation-types'

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user
  },

  [types.SET_NEW_ROUTER](state, newRouter) {
    state.newRouter = newRouter
  }
}

export default mutations
