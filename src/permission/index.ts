import router from '@/router'
import { useUserStore } from '@/stores/modules/user'
import { start, close } from '@/utils/nprogress'
const writeList: Array<string> = ['/login']
router.beforeEach((to) => {
  start()
  const store = useUserStore()
  if (!store.user?.token && !writeList.includes(to.path)) return '/login'
})
router.afterEach((to) => {
  // 修改标题
  document.title = `149优医问诊-${to.meta.title || ''}`
  close()
})
