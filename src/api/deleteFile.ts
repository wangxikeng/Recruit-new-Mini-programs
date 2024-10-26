import { http } from '@/utils/http'
import type { IDeleteFile } from '@/types/deleteFile'

// 删除文件
/**
 *
 * @param fileName 文件名
 * @returns
 */
export const deleteMyFile = (fileName: string) => {
  return http<IDeleteFile>({
    url: `/user/file/delete?fileName=${fileName}`,
    method: 'DELETE'
  })
}
