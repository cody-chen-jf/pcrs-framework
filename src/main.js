// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import { permissionRouter } from './router/permission'
import store from './store'

// import filter by babel component
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  console.log('to ==== ', to)
  console.log('from ==== ', from)
  console.log('next ==== ', next)
  console.log('store ==== ', store)
  let list = localStorage.getItem('ms_username')
  console.log('list === ', list)
  console.log('store.getters.newRouter === ', store.getters.newRouter)
  if (list) {
    if (store.getters.newRouter.length !== 0) {
      console.log('aaaaaaaaaa')
      next()
    } else {
      console.log('bbbbbbbbbbb')

      // let newRouter
      // // console.log(store.getters.user.permission)
      // newRouter = permissionRouter
      let newRouter = permissionRouter.filter(route => {
        if (list.includes(route.meta.name)) {
          console.log('permissionRouter ==== ', route.meta.name)
          return true
        } else {
          return false
        }
        // if (route.meta) {
        //   if (route.meta.role === store.getters.newRouter.contains()) {
        //     return true
        //   }
        // }
      })
      // if (store.getters.user.permission.contains('Team List')) {
      //   newRouter = permissionRouter
      // } else {
      //   let newchildren = permissionRouter[0].children.filter(route => {
      //     if (route.meta) {
      //       if (route.meta.role === store.getters.role) {
      //         return true
      //       }
      //       return false
      //     } else {
      //       return true
      //     }
      //   })
      //   newRouter = permissionRouter
      //   newRouter[0].children = newchildren
      // }
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
