/**
 * 返回数据
 */
export interface articleDate {
  /**
   * 总页数
   */
  pageTotal: number
  /**
   * 数据
   */
  rows: articleDateRow[]
  /**
   * 总条数
   */
  total: number
}

export interface articleDateRow {
  /**
   * 收藏数量
   */
  collectionNumber: number
  /**
   * 评论数量
   */
  commentNumber: number
  /**
   * 内容详情
   */
  content: string
  /**
   * 封面地址
   */
  coverUrl: CoverUrl[]
  /**
   * 创建人头像
   */
  creatorAvatar: string
  /**
   * 创建人科室
   */
  creatorDep: string
  /**
   * 创建人医院
   */
  creatorHospatalName: string
  /**
   * 创建人id
   */
  creatorId: string
  /**
   * 创建人姓名
   */
  creatorName: string
  /**
   * 创建人职称
   */
  creatorTitles: string
  /**
   * 文章id
   */
  id: string
  /**
   * 是否关注0未关注1关注
   */
  likeFlag: number
  /**
   * 文章标题
   */
  title: string
  /**
   * 百科关联的话题
   */
  topics: string[]
}

export enum CoverUrl {
  HttpsGimg2BaiducomImageSearchSrchttp3A2F2FcsslDuitangcom2Fuploads2Fblog2F2020092F282F2020092809311161FbdThumb1000_0jpegReferhttp3A2F2FcsslDuitangcomApp2002SizeF999910000QA80N0G0NFmtAutosec1659150598TF2Ccb384417E2E60F8631Ec0A58Fc8F4 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202009%2F28%2F20200928093111_61fbd.thumb.1000_0.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659150598&t=f2ccb384417e2e60f8631ec0a58fc8f4',
  HttpsGimg2BaiducomImageSearchSrchttp3A2F2FcsslDuitangcom2Fuploads2Fitem2F2020032F102F20200310000210RtndkThumb400_0JpgReferhttp3A2F2FcsslDuitangcomApp2002SizeF999910000QA80N0G0NFmtAutosec1659150667T67C57C386635Cba553E68009E02C0222 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F10%2F20200310000210_rtndk.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659150667&t=67c57c386635cba553e68009e02c0222',
  HttpsImg0BaiducomItU19607714781403941227Fm253FmtAutoApp138FJPEGW400H400 = 'https://img0.baidu.com/it/u=1960771478,1403941227&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400'
}

export type KnowledgeType = 'like' | 'recommend' | 'fatReduction' | 'food'
