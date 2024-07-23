import type { IUser } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const uerInfo = ref<IUser>()

    // 保存信息，登录时使用
    const setUerInfo = (val: any) => {
      uerInfo.value = val
    }

    // 清理用户信息，退出时使用
    const clearProfile = () => {
      uerInfo.value = undefined
    }

    // 记得 return
    return {
      uerInfo,
      setUerInfo,
      clearProfile
    }
  },
  // TODO: 持久化
  {
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync('key', value)
        }
      }
    }
  }
)
