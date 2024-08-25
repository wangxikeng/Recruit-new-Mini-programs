import { http } from '@/utils/http'
import type{ IAnnouncement } from "@/types/Announcement"

// 登录
export const getAnnouncement = () => {
    return http<IAnnouncement>({
      url: '/notice/getNotice',
      method: 'GET'
    })
  }