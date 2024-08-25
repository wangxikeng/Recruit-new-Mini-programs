/**
 * 用户报名填写的信息
 */
/**
 * 报名信息表
 *
 * InformationDto
 */
export interface IRequest {
  /**
   * 学号
   */
  account: string
  /**
   * 安卓选项
   */
  android: boolean
  /**
   * 后台选项
   */
  backend: boolean
  /**
   * 是否提交
   */
  committed: boolean
  /**
   * 深度学习选项
   */
  deeplearn: boolean
  /**
   * 前端选项
   */
  headend: boolean
  /**
   * 自我介绍
   */
  introduction: string
  /**
   * 学院专业
   */
  major: string
  /**
   * 手机号码
   */
  phone: string
  /**
   * 规划
   */
  plan: string
  /**
   * UI设计选项
   */
  uidesign: boolean
  /**
   * 姓名
   */
  userName: string
}
