import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import NotFoundPage from '@/components/404Page.vue'
import MainPage from '@/components/MainPage.vue'
import HomePage from '@/components/HomePage.vue'
import DetailPage from '@/components/DetailPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})
