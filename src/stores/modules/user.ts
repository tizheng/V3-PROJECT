import { defineStore } from 'pinia'
import type { User } from '@/types/user'
import { ref } from 'vue'

// export const useUserStore = defineStore(
//   'user',
//   {
//     state: () => ({
//       user: ref<User>()
//     }),
//     actions: {
//       setUser(u: User) {
//         this.user = u
//       },
//       delUser() {
//         this.user = undefined
//       }
//     }
//   },
//   {
//     persist: true
//   }
// )
export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 用户信息
    const user = ref<User>()
    // 设置用户，登录后使用
    const setUser = (u: User) => {
      user.value = u
    }
    // 清空用户，退出后使用
    const delUser = () => {
      user.value = undefined
    }
    return { user, setUser, delUser }
  },
  {
    persist: true
  }
)
