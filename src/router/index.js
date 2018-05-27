import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import HomePage from '@/components/HomePage.vue'
import DetailPage from '@/components/DetailPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/detailPage',
      name: 'DetailPage',
      component: DetailPage
    }
  ]
})
