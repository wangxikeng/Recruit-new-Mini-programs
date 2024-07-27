import { http } from '@/utils/http'
import type{ ILatestFile } from "@/types/showFile"

// 登录
export const showMyFile = () => {
    return http<ILatestFile>({
      url: '/user/file/get',
      method: 'GET',
      
    })
  }