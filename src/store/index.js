import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'

import homePageModule from './modules/homePage'
import detailPageModule from './modules/detailPage'

import {
  HOME_PAGE,
  DETAIL_PAGE
} from './namespaces'

import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const modules = {
  [HOME_PAGE]: homePageModule,
  [DETAIL_PAGE]: detailPageModule
}

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
