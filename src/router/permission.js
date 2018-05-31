import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import MainPage from '@/components/MainPage.vue'
import HomePage from '@/components/HomePage.vue'
import DetailPage from '@/components/DetailPage.vue'

export const permissionRouter = [
  {
    path: '/homePage',
    name: 'HomePage',
    component: HomePage,
    meta: {
      name: 'Team List'
    }
  },
  {
    path: '/detailPage',
    name: 'DetailPage',
    component: DetailPage,
    meta: {
      name: 'Role List'
    }
  }
]
