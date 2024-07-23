import type { IData } from '@/types/baseType'
import type { IUser } from '@/types/user'
import { http } from '@/utils/http'

export const logIn = () => {
  return http<IUser>({
    url: '/user/login/user',
    method: 'POST',
    data: {
      account: '3123004529',
      password: '123456'
    }
  })
}

/**
 * 获取到最新的一条通知
 */

export const getNewNotice = () => {
  return http({
    url: '/notice/getNotice',
    method: 'GET'
  })
}

/**
 * 获取到最新的一条通知
 */

export const getNewNotice = () => {
  return http({
    url: '/notice/getNotice',
    method: 'GET'
  })
}
