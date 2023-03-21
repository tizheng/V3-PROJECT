/**
 * 医院科室
 */
export interface Department {
  /**
   * 子级集合
   */
  child?: Child[]
  /**
   * 科室id--一级科室
   */
  id?: string
  /**
   * 科室名称
   */
  name?: DatumName
}

export interface Child {
  /**
   * 科室的图标
   */
  avatar: Avatar
  /**
   * 子级id
   */
  id: string
  /**
   * 子级name
   */
  name: ChildName
}

/**
 * 科室的图标
 */
export enum Avatar {
  HttpsGimg2BaiducomImageSearchSrchttp3A2F2Fimg95699Piccom2Fxsj2F1L2Fen2F9RJpg212Ffw2F7002Fwatermark2Furl2FL3Hzai93YXRlcl9KZXRhaWwyLnBuZw2Falign2FsoutheastReferhttp3A2F2Fimg95699PiccomApp2002SizeF999910000QA80N0G0NFmtAutosec1659149771TEb9507D566613Fc5528Adab6B1B26Cea = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg95.699pic.com%2Fxsj%2F1l%2Fen%2F9r.jpg%21%2Ffw%2F700%2Fwatermark%2Furl%2FL3hzai93YXRlcl9kZXRhaWwyLnBuZw%2Falign%2Fsoutheast&refer=http%3A%2F%2Fimg95.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659149771&t=eb9507d566613fc5528adab6b1b26cea',
  HttpsGimg2BaiducomImageSearchSrchttp3A2F2FwwwZheqianmedcom2Fuploads2F1908222F11ZR210104DMJpgReferhttp3A2F2FwwwZheqianmedcomApp2002SizeF999910000QA80N0G0NFmtAutosec1659149803T1Bc90Df1A4C155A1673C610F154F16A1 = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.zheqianmed.com%2Fuploads%2F190822%2F1-1ZR210104DM.jpg&refer=http%3A%2F%2Fwww.zheqianmed.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1659149803&t=1bc90df1a4c155a1673c610f154f16a1',
  HttpsImg2BaiducomItU1125738173586104404Fm253FmtAutoApp138FJPEGW500H500 = 'https://img2.baidu.com/it/u=112573817,3586104404&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
}

/**
 * 子级name
 */
export enum ChildName {
  心内科 = '心内科',
  普通内科 = '普通内科',
  精神科 = '精神科',
  骨科 = '骨科'
}

/**
 * 科室名称
 */
export enum DatumName {
  中医科 = '中医科',
  内科 = '内科',
  常见科室 = '常见科室',
  脑科 = '脑科'
}
