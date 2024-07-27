import { http } from '@/utils/http'
import type { IProcedure } from '@/types/procedure'

//获取进度
export const getProcedure = (item: number) => {
  return http<IProcedure>({
    url: `/user/pace/getPace/${item}`,
    method: 'GET'
  })
}
