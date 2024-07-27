import { http } from '@/utils/http'
import type{ IDeleteFile } from "@/types/deleteFile"

// 登录
export const deleteMyFile = (fileName:string) => {
    return http<IDeleteFile>({
      url: `/user/file/delete?fileName=${fileName}`,
      method: 'DELETE',
      
    })
  }