import type { IRequest } from '@/types/userdetail'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { saveDetail, getDetail } from '@/api/resgistration'

// 定义 Store
export const useUserDetailStore = defineStore('registration', () => {
  // 用户信息
  const user = ref<IRequest>({
    userName: '',
    account: '',
    major: '',
    phone: '',
    introduction: '',
    android: false,
    backend: false,
    deeplearn: false,
    headend: false,
    uidesign: false,
    plan: '',
    committed: true
  })

  const directionNum = ref<number[]>([]) //选择的方向
  const directionName = ref<string[]>([]) //选择方向的名字

  //获取用户报名信息
  const setUerDetailInfo = async () => {
    const res = await saveDetail(user.value)
    const resDetail = await getDetail()
    user.value = resDetail.data
  }

  // 记得 return
  return {
    user,
    directionNum,
    directionName,
    setUerDetailInfo
  }
})
