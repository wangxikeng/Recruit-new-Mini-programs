/**
 * 统一返回结果
 *
 * Result«List«PreTime»»
 */
export interface IResponse {
  /**
   * 返回码
   */
  code: number
  /**
   * 返回数据
   */
  data?: PreTime[]
  /**
   * 返回消息
   */
  msg: string
}

/**
 * 预约时间表
 *
 * PreTime
 */
export interface IPreTime {
  /**
   * 逻辑删除
   */
  deleted: number
  /**
   * 主键id
   */
  id: number
  /**
   * 是否被选择(0为否,1为是)
   */
  status: number
  /**
   * 方向(1为后台,2为前端,3为安卓,4为UI,5为深度学习)
   */
  target: number
  /**
   * 预约时间段的结束
   */
  timeEnd: string
  /**
   * 格式化后的结束时间
   */
  timeEnd1: string
  /**
   * 预约时间段的开始
   */
  timeStart: string
  /**
   * 格式化后的开始时间
   */
  timeStart1: string
  /**
   * 被谁选择
   */
  timeUser: number
  /**
   * 用户在该时间段是否忙(0为否,1为是)
   */
  userBusy: boolean
}

/**
 * 方向
 */
export interface IDirection {
  id: number
  name: string
}

/**
 * 时间列表格式
 */
export interface ITimeList {
  id: number
  time: string
}
