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
export interface loginCodeELS {
  /**
   * 正常返回10000，其他表示错误
   */
  code: number
  data: loginCodeDate
  /**
   * 接口信息
   */
  message: string
}

export interface loginCodeDate {
  /**
   * 用户名
   */
  account: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 用户id
   */
  id: string
  /**
   * 脱敏手机号，带星号的手机号
   */
  mobile: string
  /**
   * refreshToken
   */
  refreshToken: string
  /**
   * token
   */
  token: string
}
