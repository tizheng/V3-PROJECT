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
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '主页' }
      },
      {
        path: '/article',
        component: () => import('@/views/Article/index.vue'),
        meta: { title: '健康百科' }
      },
      {
        path: '/notify',
        component: () => import('@/views/Notify/index.vue'),
        meta: { title: '消息通知' }
      },
      {
        path: '/user',
        component: () => import('@/views/User/index.vue'),
        meta: { title: '用户中心' }
      }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...asyncRoutes, ...constantRoutes]
})

export default router
