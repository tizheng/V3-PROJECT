import { request } from '@/utils/request'
import type { Department } from '@/types/hospitalDepartment'
export const hosDepartments = () => {
  return request<Department[]>('dep/all', 'GET')
}
