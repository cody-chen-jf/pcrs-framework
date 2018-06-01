// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import {permissionRouter} from './router/permission'
import store from './store'

// import filter by babel component
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('user_token')
  console.log('store.getters.newRouter === ', store.getters.newRouter)
  if (token) {
    if (store.getters.newRouter.length !== 0) {
      next()
    } else {
      // get permission route from server
      let serverPermission = ['Team List', 'Role 33']

      let newRouter = permissionRouter.filter(route => {
        if (serverPermission.includes(route.meta.name)) {
          console.log('permissionRouter ==== ', route.meta.name)
          return true
        } else {
          return false
        }
      })
      router.addRoutes(newRouter)
      store.dispatch('setNewRouter', newRouter).then(res => {
        next({...to})
      }).catch(() => {

      })
    }
  } else {
    if (['/login'].indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
