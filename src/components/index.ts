import NavBar from '@/components/NavBar/index.vue'
import RadioBtn from '@/components/cp-radio-btn/index.vue'
export default {
  install(Vue: Object): void {
    ;(Vue as any).component('NavBar', NavBar)
    ;(Vue as any).component('RadioBtn', RadioBtn)
  }
}

// declare module 'vue' {
//   interface GlobalComponents {
//     NavBar: typeof NavBar
//     RadioBtn: typeof RadioBtn
//   }
// }
