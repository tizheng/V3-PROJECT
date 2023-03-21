export type User = {
  /** token令牌 */
  token: string
  /** 用户ID */
  id: string
  /** 用户名称 */
  account: string
  /** 手机号 */
  mobile: string
  /** 头像 */
  avatar: string
}

/**
 * empty object
 */
export interface UserInfo {
  /**
   * 正常返回10000，其他表示错误
   */
  code: number
  data: userData
  /**
   * 接口信息
   */
  message: string
}

export interface userData {
  /**
   * 用户名
   */
  account: string
  /**
   * 头像
   */
  avatar: string
  /**
   * 收藏数量
   */
  collectionNumber: number
  /**
   * 问诊中信息
   */
  consultationInfo: ConsultationInfo[]
  /**
   * 我的优惠券数量
   */
  couponNumber: number
  /**
   * 用户id
   */
  id: string
  /**
   * 关注数量
   */
  likeNumber: number
  /**
   * 手机号
   */
  mobile: string
  orderInfo: OrderInfo
  /**
   * 我的总积分
   */
  score: number
}

/**
 * 问诊中信息
 */
export interface ConsultationInfo {
  /**
   * 医生头像
   */
  avatar: string
  /**
   * 科室
   */
  depName: string
  /**
   * 医院等级
   */
  gradeName: string
  /**
   * 医院名称
   */
  hospitalName: string
  /**
   * 医生id
   */
  id: string
  /**
   * 医生姓名
   */
  name: string
  /**
   * 订单id
   */
  orderId: string
  /**
   * 职称
   */
  positionalTitles: string
}

export interface OrderInfo {
  /**
   * 已完成
   */
  finishedNumber: number
  /**
   * 待付款
   */
  paidNumber: number
  /**
   * 待发货
   */
  receivedNumber: number
  /**
   * 待收货
   */
  shippedNumber: number
}
export type Patient = {
  /** 患者ID */
  id?: string
  /** 患者名称 */
  name: string
  /** 身份证号 */
  idCard: string
  /** 0不默认  1默认 */
  defaultFlag: 0 | 1 | boolean
  /** 0 女  1 男 */
  gender: 0 | 1 | string
  /** 性别文字 */
  genderValue?: string | number
  /** 年龄 */
  age?: number
}
export type patientList = Patient[]

/**
 * 关注
 */
export interface Like {
  /**
   * 请求成功10000标志
   */
  code?: number
  /**
   * 返回数据
   */
  data?: Data
  /**
   * 请求成功
   */
  message?: string
  /**
   * 请求成功标志
   */
  success?: boolean
}

/**
 * 返回数据
 */
export interface Data {
  /**
   * 关注信息id
   */
  id: string
}
export type likeType = 'topic' | 'knowledge' | 'doc' | 'disease'
