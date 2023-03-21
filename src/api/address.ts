import { request } from '@/utils/request'
import type { Patient } from '@/types/user'
export const patientAdd = (patient: Patient) => {
  return request<Patient>('/patient/add', 'POST', patient)
}
