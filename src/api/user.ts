import type { userData } from '@/types/user'
import type { CodeType, code, loginCodeELS } from '@/types/code'
import { request } from '@/utils/request'
export const login = (data: Object) => {
  return request<loginCodeELS>('/login/password', 'post', data)
}
export const getCode = (mobile: string, type: CodeType) => {
  return request<code>('/code', 'get', { mobile, type })
}
export const loginCode = (mobile: string, code: string) => {
  return request<loginCodeELS>('/login', 'post', { mobile, code })
}
export const getUser = () => {
  return request<userData>('/patient/myUser', 'get')
}
