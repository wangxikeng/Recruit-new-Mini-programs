import type { IResponse, IPreTime } from '@/types/reservation'
import { http } from '@/utils/http'

// 获取预约时间
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
export const saveTargets = (id: number) => {
  return http({
    url: `/user/preTime/addTime/${id}`,
    method: 'PUT'
  })
}

// 获取保存的预约时间
export const getDirectionTime = (item: number) => {
  return http<IPreTime>({
    url: `/user/preTime/getPreTime/${item}`,
    method: 'GET'
  })
}

//保存签到信息
export const getSignIn = (item: number) => {
  return http({
    url: `/user/attend/add/${item}`,
    method: 'POST'
  })
}
