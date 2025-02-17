import { defineStore } from 'pinia'
import { useUserDetailStore } from '@/stores/modules/registration'
import { getProcedure } from '@/api/procedure'
import { ref } from 'vue'

const userDetailStore = useUserDetailStore()

export const useProcedureStore = defineStore('procedure', () => {
  const statusOne = ref(0) //一轮考核
  const statusTwo = ref(0) //二轮考核
  const success = ref(0) //通过所有考核
  const interview = ref(0) //面试
  const chooseDirection = ref<number>()
  let ui = ref(false)
  let directionTrue = ref(false)

  //获取通过与否状态
  // const getDirectionStatus = aesync (item: number, res: any) => {
  const getDirectionStatus = (item: number, res: any) => {
    //传对应是否通过的值
    interview.value = res.data.interview
    statusOne.value = res.data.statusOne
    statusTwo.value = res.data.statusTwo
    success.value = res.data.success
  }

  const getDirectionDetail = async () => {
    if (userDetailStore.directionNum.length === 0) {
      directionTrue.value = false
    } else {
      directionTrue.value = true
    }
    for (const item of userDetailStore.directionNum) {
      if (chooseDirection.value === item + 1) {
        const res = await getProcedure(item)
        getDirectionStatus(item, res)
      }
      if (chooseDirection.value == 4) {
        ui.value = true
      } else {
        ui.value = false
      }
    }
  }

  return {
    statusOne,
    statusTwo,
    success,
    interview,
    getDirectionStatus,
    getDirectionDetail,
    chooseDirection,
    ui,
    directionTrue
  }
})
