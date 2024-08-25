import type { IUser } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 定义 Store
export const useUserStore = defineStore(
  'user',
  () => {
    // 用户信息
    const uerInfo = ref<IUser>()

    const setUserToken = (token: string) => {
      uni.setStorageSync('token', token)
    }

    // 记得 return
    return {
      uerInfo,
      setUserToken
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
