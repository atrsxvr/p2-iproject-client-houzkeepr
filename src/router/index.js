import { createRouter, createWebHistory } from 'vue-router'
import LandingPageView from '../views/LandingPageView.vue'
import LoginPageView from '../views/LoginPageView.vue'
import RegisterPageView from '../views/RegisterPageView.vue'
import HomePageView from '../views/HomePageView.vue'
import MyKeeprPageView from '../views/MyKeeprPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPageView
    },
    {
      path: '/login',
      name: 'loginPage',
      component: LoginPageView
    },
    {
      path: '/register',
      name: 'registerPage',
      component: RegisterPageView
    },
    {
      path: '/home',
      name: 'homePage',
      component: HomePageView
    },
    {
      path: '/myKeepr',
      name: 'myKeepr',
      component: MyKeeprPageView
    },
  ]
})

export default router
