import * as types from './mutation-types'

export const setHomePageInfo = ({commit, state}, homePageInfo) => {
  console.log('state ==== ', state)
  commit(types.SET_HOME_PAGE_INFO, homePageInfo)
}
