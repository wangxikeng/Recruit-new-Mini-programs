import type { IData } from '@/types/baseType'
import type { IRequest } from '@/types/userdetail'
import { http } from '@/utils/http'

//保存填写的信息
/**
 *
 * @param data 所有报名相关信息
 * @returns
 */
export const saveDetail = (data: IRequest) => {
  return http<IRequest>({
    url: '/user/apply/save',
    method: 'POST',
    data
  })
}

//获得保存的信息
export const getDetail = () => {
  return http<IRequest>({
    url: '/user/apply',
    method: 'GET'
  })
}

//上传文件
export const fileUpload = () => {
  return http<IRequest>({
    url: '/user/file/upload',
    method: 'POST'
  })
}

//删除文件
export const fileDelete = () => {
  return http({
    url: '/user/file/delete',
    method: 'DELETE'
  })
}

//获取文件
export const fileGet = () => {
  return http({
    url: '/user/file/get',
    method: 'GET'
  })
}
