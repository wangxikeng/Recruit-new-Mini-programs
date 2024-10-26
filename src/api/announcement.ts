import { http } from '@/utils/http'
import type { IAnnouncement } from '@/types/Announcement'

// 获取通知
export const getAnnouncement = () => {
  return http<IAnnouncement>({
    url: '/notice/getNotice',
    method: 'GET'
  })
}
