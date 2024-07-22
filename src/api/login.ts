import type { IData } from '@/types/baseType'
import { http } from '@/utils/http'

// 登录
export const logIn = () => {
  return http<IData<String>>({
    url: '/user/login/user',
    method: 'POST',
    data: {
      username: '3123004529',
      password: '123456'
    }
  })
}
