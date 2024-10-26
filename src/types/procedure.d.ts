/**
 * 获取用户进度信息
 */
export interface IProcedure {
  id: number
  /**
   * 主键id
   */
  paceUser: number
  /**
   * 哪个用户
   */
  interview: number
  /**
   * 面试:0为未开始,1为进行中,2为已完成
   */
  statusOne: number
  /**
   * 第一轮考核:0为未开始,1为进行中,2为已完成
   */
  statusTwo: number
  /**
   * 第二轮考核:0为未开始,1为进行中,2为已完成
   */
  success: number
  /**
   * 加入数智:0为未开始,1为进行中,2为已完成
   */
  deleted: number
  target: number
  /**
   * 方向(1为后台,2为前端,3为安卓,4为UI,5为深度学习)
   */
}
