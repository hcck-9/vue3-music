export interface DJPersonalizedRecommend {
  id: number
  dj: DjInfo
  name: string
  picUrl: string
  desc: string
  subCount: number
  programCount: number
  createTime: number
  categoryId: number
  category: string
  secondCategoryId: number
  secondCategory: string
  radioFeeType: number
  feeScope: number
  buyed: boolean
  videos: any[]
  finished: boolean
  underShelf: boolean
  purchaseCount: number
  price: number
  originalPrice: number
  discountPrice: any
  lastProgramCreateTime: number
  lastProgramName: string
  lastProgramId: number
  picId: number
  rcmdText: string
  hightQuality: boolean
  whiteList: boolean
  liveInfo: any
  playCount: number
  icon: any
  privacy: boolean
  intervenePicUrl: string
  intervenePicId: number
  dynamic: boolean
  shortName: any
  taskId: number
  manualTagsDTO: any
  scoreInfoDTO: any
  descPicList: any
  subed: boolean
  original: string
  replaceResource: any
  immersionCover: any
  immersionAnimation: any
  danmakuCount: number
  composeVideo: boolean
  rcmdtext: string
  lastUpdateProgramName: string
  alg: string
}

export interface DjInfo {
  defaultAvatar: boolean
  province: number
  authStatus: number
  followed: boolean
  avatarUrl: string
  accountStatus: number
  gender: number
  city: number
  birthday: number
  userId: number
  userType: number
  nickname: string
  signature: string
  description: string
  detailDescription: string
  avatarImgId: number
  backgroundImgId: number
  backgroundUrl: string
  authority: number
  mutual: boolean
  expertTags: any
  experts: any
  djStatus: number
  vipType: number
  remarkName: any
  authenticationTypes: number
  avatarDetail: any
  avatarImgIdStr: string
  backgroundImgIdStr: string
  anchor: boolean
  avatarImgId_str: string
}

export interface DJTodayPreferred {
  id: number
  name: string
  rcmdText: string
  radioFeeType: number
  feeScope: number
  picUrl: string
  programCount: number
  subCount: number
  subed: boolean
  playCount: number
  alg?: any
  originalPrice: any
  discountPrice: any
  lastProgramName: string
  traceId: any
  icon: any
}

export type DJCategory = {
  picPCWhite: number
  pic56x56IdStr: string
  picPCWhiteStr: string
  picPCWhiteUrl: string
  picPCBlackStr: string
  picPCBlackUrl: string
  picWebStr: string
  picWebUrl: string
  picMacId: string
  picMacUrl: string
  picUWPId: string
  picUWPUrl: string
  picIPadStr: string
  picIPadUrl: string
  picWeb: number
  picPCBlack: number
  picIPad: number
  pic84x84Id: number
  pic56x56Url: string
  pic96x96IdStr: string
  pic96x96Url: string
  pic84x84IdUrl: string
  pic96x96Id: number
  pic56x56Id: number
  name: string
  id: number
}
