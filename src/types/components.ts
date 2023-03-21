import type NavBar from '@/views/login/compoents/cp-nav-bar.vue'
declare module 'vue' {
  interface GlobalComponents {
    NavBar: typeof NavBar
  }
}
