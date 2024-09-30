import { httpUpLoad } from '@/utils/http'
import type { IUploadFile } from '@/types/uploadFile'

// 上传文件
/**
 *
 * @param path 文件路径
 * @param fileName 文件名
 * @returns
 */
export const uploadMyFile = (path: string, fileName: string) => {
  return httpUpLoad<IUploadFile>({
    name: 'file',
    filePath: path,
    url: '/user/file/upload',
    formData: {
      fileName: fileName
    },
    header: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
