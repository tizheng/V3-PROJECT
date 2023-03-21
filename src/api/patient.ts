import type { Patient } from '@/types/user'
import { request } from '@/utils/request'

export const getPatientDetail = (id: number | string) => {
  return request<Patient>(`/patient/info/${id}`, 'get')
}

export const updatePatient = (data: Patient) => {
  return request<Patient>(`patient/update`, 'PUT', data)
}

export const delPatient = (id: string) =>
  request(`/patient/del/${id}`, 'DELETE')
