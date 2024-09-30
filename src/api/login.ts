import type { IData } from '@/types/baseType'
import type { IUser } from '@/types/user'
import { http } from '@/utils/http'

// 登录
/**
 * 
 * @param data account账号 password密码

 * @returns 
 */
export const logIn = (data: any) => {
  return http<IUser>({
    url: '/user/login/user',
    method: 'POST',
    data
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
