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
