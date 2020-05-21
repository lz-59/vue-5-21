import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Reg from '@/views/reg'
import Home from '@/views/home'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/reg',
    name: 'Reg',
    component: Reg,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
