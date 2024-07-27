import { httpUpLoad } from '@/utils/http'
import type{ IUploadFile } from "@/types/uploadFile"

// 上传文件
export const uploadMyFile = (path:string,fileName:string) => {
    return httpUpLoad<IUploadFile>({
        name:'file',
        filePath:path,
      url: '/user/file/upload',
      formData:{
        fileName:fileName
      },
      header: {
        'Content-Type': 'multipart/form-data'
        }

    })
  }