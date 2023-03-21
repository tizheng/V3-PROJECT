import { request } from '@/utils/request'
import type { DoctorData } from '@/types/doctor'
export const getPatientDetail = (
  current: string = '1',
  pageSize: string = '10'
) => {
  return request<DoctorData>(`/home/page/doc`, 'get', {
    current,
    pageSize
  })
}
