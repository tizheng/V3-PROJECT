import { User } from './user'
export type CodeType =
  | 'login'
  | 'register'
  | 'changeMobile'
  | 'forgetPassword'
  | 'bindMobile'

export interface code {
  /**
   * 正常返回10000，其他表示错误
   */
  code: number
  data: Data
  /**
   * 接口信息
   */
  message: string
}

export interface Data {
  /**
   * 手机验证码
   */
  code: string
}

/**
 * empty object
 */
export interface loginCodeELS extends User {
  /**
   * 正常返回10000，其他表示错误
   */
  refreshToken: string
}
