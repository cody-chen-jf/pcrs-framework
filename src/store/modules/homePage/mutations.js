import * as types from './mutation-types'

const mutations = {
  [types.SET_HOME_PAGE_INFO](state, homePageInfo) {
    state.homePageInfo = homePageInfo
  }
}

export default mutations
