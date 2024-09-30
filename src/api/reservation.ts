import type { IResponse, IPreTime } from '@/types/reservation'
import { http } from '@/utils/http'

// 获取预约时间
/**
 *
 * @param item 方向(1为后台, 2为前端, 3为安卓, 4为UI, 5为深度学习)
 * @returns
 */
export const getTimeListAll = (item: number) => {
  return http<IPreTime[]>({
    url: `/user/preTime/${item}`,
    method: 'GET'
  })
}

//获取用户方向
export const getTargets = () => {
  return http({
    url: '/user/preTime/getTargets',
    method: 'GET'
  })
}

//保存用户方向
/**
 *
 * @param id 用户选择的时间的id
 * @returns
 */
export const saveTargets = (id: number) => {
  return http({
    url: `/user/preTime/addTime/${id}`,
    method: 'PUT'
  })
}

// 获取保存的预约时间
/**
 *
 * @param item 方向(1为后台, 2为前端, 3为安卓, 4为UI, 5为深度学习)
 * @returns
 */
export const getDirectionTime = (item: number) => {
  return http<IPreTime>({
    url: `/user/preTime/getPreTime/${item}`,
    method: 'GET'
  })
}

//保存签到信息
/**
 *
 * @param item 方向(1为后台,2为前端,3为安卓,4为UI,5为深度学习)
 * @returns
 */
export const getSignIn = (item: number) => {
  return http({
    url: `/user/attend/add/${item}`,
    method: 'POST'
  })
}
