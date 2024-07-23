import type { IData } from '@/types/baseType'
import type { IUser } from '@/types/user'
import { http } from '@/utils/http'



export const logIn = () => {
  return http<IData<IUser>>({
    url: '/user/login/user',
    method: 'POST',
    data: {
      account: '3123004529',
      password: '123456'
    }
  })
}
