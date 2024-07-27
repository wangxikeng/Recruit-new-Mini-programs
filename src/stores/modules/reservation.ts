import type { IResponse, IPreTime } from '@/types/reservation'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { saveDetail, getDetail, fileUpload, fileGet, fileDelete } from '@/api/resgistration'
import dayjs from 'dayjs'
import type { ITimeList, IDirection } from '@/types/reservation'
import { useUserDetailStore } from '@/stores/modules/registration'
import {
  getTimeListAll,
  getTargets,
  saveTargets,
  getDirectionTime,
  getSignIn
} from '@/api/reservation'
import { getProcedure } from '@/api/procedure'

const userDetailStore = useUserDetailStore()

// 定义 Store
export const useDirectionStore = defineStore('reservation', () => {
  const list = ref<IDirection[]>([])
  const directionList = ref([
    { id: 1, name: '前端' },
    { id: 2, name: '后台' },
    { id: 3, name: '安卓' },
    { id: 4, name: 'UI' },
    { id: 5, name: '深度学习' }
  ])
  const timeList1 = ref([
    {
      id: 1,
      time: '09 : 10-09 : 20'
    },
    {
      id: 2,
      time: '09 : 10-09 : 20'
    },
    {
      id: 3,
      time: '09 : 10-09 : 20'
    },
    {
      id: 4,
      time: '09 : 10-09 : 20'
    }
  ])
  const timeList2 = ref([
    {
      id: 5,
      time: '09 : 10-09 : 20'
    },
    {
      id: 6,
      time: '09 : 10-09 : 20'
    },
    {
      id: 7,
      time: '09 : 10-09 : 20'
    },
    {
      id: 8,
      time: '09 : 10-09 : 20'
    }
  ])
  const timeList3 = ref([
    {
      id: 9,
      time: '09 : 10-09 : 20'
    },
    {
      id: 10,
      time: '09 : 10-09 : 20'
    },
    {
      id: 11,
      time: '09 : 10-09 : 20'
    }
  ])
  const timeList4 = ref([
    {
      id: 12,
      time: '09 : 10-09 : 20'
    },
    {
      id: 13,
      time: '09 : 10-09 : 20'
    }
  ])

  const idChoose = ref<number>(0)
  const popTime = ref<string>()
  const chooseDirection = ref<number>(0)
  const timeChoose = ref<string>()
  const signInTime = ref<string>()

  const getTimeList = (res: any, item: number) => {
    for (let i = 0; i < res.length; i++) {
      if (res[item] && i < 4) {
        timeList1.value[i].time = res[i].timeStart1 + '-' + res[i].timeEnd1
        timeList1.value[i].id = res[i].id
      }
      if (res[item] && i > 3 && i < 8) {
        timeList2.value[i - 4].time = res[i].timeStart1 + '-' + res[i].timeEnd1
        timeList2.value[i - 4].id = res[i].id
      }
      if (res[item] && i > 7 && i < 11) {
        timeList3.value[i - 8].time = res[i].timeStart1 + '-' + res[i].timeEnd1
        timeList3.value[i - 8].id = res[i].id
      }
      if (res[item] && i > 10 && i < 13) {
        timeList4.value[i - 11].time = res[i].timeStart1 + '-' + res[i].timeEnd1
        timeList4.value[i - 11].id = res[i].id
      }
    }
  }

  const forEachTimeList = (id: number, timeList: ITimeList[]) => {
    timeList.forEach((item) => {
      if (item.id === id) popTime.value = item.time
    })
    timeChoose.value = formattedDate.value + '-' + popTime.value
  }
  const getTime = (id: number) => {
    idChoose.value = id
    forEachTimeList(id, timeList1.value)
    forEachTimeList(id, timeList2.value)
    forEachTimeList(id, timeList3.value)
    forEachTimeList(id, timeList4.value)
  }
  const formattedDate = ref<string>()
  const getYearMD = (timeUser: string) => {
    formattedDate.value = dayjs(timeUser).format('YYYY年MM月DD日')
  }
  const getDirectionName = () => {
    if (list.value.length === userDetailStore.directionNum.length) {
      list.value = list.value
    } else {
      list.value = []
      for (const item of userDetailStore.directionNum) {
        list.value.push(directionList.value[item])
      }
    }
  }

  const directionTimeListAll = async () => {
    for (const item of userDetailStore.directionNum) {
      if (chooseDirection.value === item + 1) {
        const resTime = await getTimeListAll(item)
        getTimeList(resTime.data, item)
        getYearMD(resTime.data[0].timeStart)
      }
    }
  }

  const getItemDirectionTome = async (item: number) => {
    const resTime = await getDirectionTime(item)
    console.log(resTime)
    getYearMD(resTime.data.timeStart)
    const dateTimeString = resTime.data.timeStart1
    // 使用字符串分割提取时间部分
    const parts = dateTimeString.split(':')
    if (parts.length > 1) {
      const timePart = parts[1] + ':' + parts[2]
      signInTime.value = formattedDate.value + timePart + '-' + resTime.data.timeEnd1
    }
  }

  const directionTime = async () => {
    for (const item of userDetailStore.directionNum) {
      if (chooseDirection.value === item + 1) {
        getItemDirectionTome(item)
      }
    }
  }

  const saveSignInTime = async () => {
    getSignIn(chooseDirection.value)
  }

  // 记得 return
  return {
    timeList1,
    timeList2,
    timeList3,
    timeList4,
    idChoose,
    popTime,
    chooseDirection,
    timeChoose,
    getTimeList,
    getTime,
    getYearMD,
    formattedDate,
    getDirectionName,
    list,
    directionTimeListAll,
    directionTime,
    signInTime,
    saveSignInTime,
    getItemDirectionTome
  }
})
