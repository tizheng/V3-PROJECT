import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/index.vue'
const asyncRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
]
const constantRoutes = [
  {
    path: '/',
    component: Layout,
    name: 'layout',
    redirect: '/User',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/article',
        component: () => import('@/views/Article/index.vue')
      },
      {
        path: '/notify',
        component: () => import('@/views/Notify/index.vue')
      },
      {
        path: '/user',
        component: () => import('@/views/User/index.vue')
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...asyncRoutes, ...constantRoutes]
})

export default router
