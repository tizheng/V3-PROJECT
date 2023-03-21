export interface DoctorData {
  /**
   * 总页数
   */
  pageTotal: number
  /**
   * 数据
   */
  rows: DoctorDataRow[]
  /**
   * 总条数
   */
  total: number
}
export type DoctorDataList = DoctorData[]
export interface DoctorDataRow {
  /**
   * 医生头像
   */
  avatar: string
  consultationNum: number
  /**
   * 科室名称
   */
  depName: string
  /**
   * 医院等级-名称简写
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
   * 未登录用户默认返回0，登录用户实际判断是否关注的标志1已关注0未关注
   */
  likeFlag?: number | string
  major: string
  /**
   * 医生姓名
   */
  name: string
  /**
   * 职称
   */
  positionalTitles: string
  score: number
  /**
   * 接诊费用
   */
  serviceFee: number
}
