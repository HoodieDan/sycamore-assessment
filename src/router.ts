import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import AddUser from './views/AddUser.vue'
import Login from './views/Login.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/addUser',
    name: 'AddUser',
    component: AddUser,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
