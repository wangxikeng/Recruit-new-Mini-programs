import type { IAnnouncement } from '@/types/Announcement'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useAnnouncementStore = defineStore(
    'announcement',
    () => {
        // 公告信息内容
        const newAnnouncement = ref<IAnnouncement>()

        // 保存公告信息
        const setAnnouncement = (val:any) => {
            newAnnouncement.value=val
            // 使用该数据放入公告弹框内显示
        }
        
        // 记得 return
        return {
           newAnnouncement,
           setAnnouncement
        }
    },
    // // TODO: 持久化
    // {
    //     persist: {
    //         storage: {
    //             getItem(key) {
    //                 return uni.getStorageSync(key)
    //             },
    //             setItem(key, value) {
    //                 uni.setStorageSync('key', value)
    //             }
    //         }
    //     }
    // }
)
