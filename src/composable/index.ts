import { like } from '@/api/user'
import { ref } from 'vue'
import type { likeType } from '@/types/user'
import type { DoctorDataRow } from '@/types/doctor'
export const useFollow = (type: likeType = 'doc') => {
  const loading = ref(false)
  // {a, b} 类型，传值得时候 {a, b, c} 也可以，这是类型兼容：多的可以给少的
  const follow = async (item: DoctorDataRow) => {
    loading.value = true
    try {
      await like(type, item.id)
      item.likeFlag = item.likeFlag === 1 ? 0 : 1
    } finally {
      loading.value = false
    }
  }
  return { loading, follow }
}
