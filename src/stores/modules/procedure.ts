import { defineStore } from 'pinia'
import { useUserDetailStore } from '@/stores/modules/registration'
import { useDirectionStore } from '@/stores/modules/reservation'
import {
  getTimeListAll,
  getTargets,
  saveTargets,
  getDirectionTime,
  getSignIn
} from '@/api/reservation'
import { getProcedure } from '@/api/procedure'
import { ref } from 'vue'

const userDetailStore = useUserDetailStore()
const userDirectionStore = useDirectionStore()

export const useProcedureStore = defineStore('procedure', () => {
  const statusOne = ref<number>(0)
  const statusTwo = ref<number>(0)
  const success = ref<number>(0)
  const interview = ref<number>(0)
  const chooseDirection = ref<number>()

  const getDirectionStatus = async (item: number, res: any) => {
    interview.value = res.data.interview
    // interview.value = 1
    // statusOne.value = 2
    // statusTwo.value = 2
    // success.value = 2
    statusOne.value = res.data.statusOne
    statusTwo.value = res.data.statusTwo
    success.value = res.data.success
  }

  const getDirectionDetail = async () => {
    for (const item of userDetailStore.directionNum) {
      if (chooseDirection.value === item + 1) {
        const res = await getProcedure(item)
        getDirectionStatus(item, res)
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
    chooseDirection
  }
})
