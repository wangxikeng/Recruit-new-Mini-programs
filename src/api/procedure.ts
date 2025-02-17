import { http } from '@/utils/http'
import type { IProcedure } from '@/types/procedure'

//获取进度
/**
 *
 * @param item 方向(0为前端,1为后台,2为安卓,3为UI,4为深度学习,5为硬件)
 * @returns
 */
export const getProcedure = (item: number) => {
  return http<IProcedure>({
    url: `/user/pace/getPace/${item}`,
    method: 'GET'
  })
}
