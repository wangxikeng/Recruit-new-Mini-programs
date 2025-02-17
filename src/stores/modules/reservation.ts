import type { IPreTime } from '@/types/reservation'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import dayjs from 'dayjs'
import type { IDirection } from '@/types/reservation'
import { useUserDetailStore } from '@/stores/modules/registration'
import { getTimeListAll, getDirectionTime, getSignIn } from '@/api/reservation'

const userDetailStore = useUserDetailStore()

// 定义 Store
export const useDirectionStore = defineStore('reservation', () => {
  const list = ref<IDirection[]>([])
  const directionList = ref([
    { id: 1, name: '前端' },
    { id: 2, name: '后台' },
    { id: 3, name: '安卓' },
    { id: 4, name: 'UI' },
    { id: 5, name: '深度学习' },
    { id: 6, name: '硬件' }
  ])
  const idChoose = ref(0) //选择的时间的对应id
  const popTime = ref<string>() //显示的时间
  let chooseDirection = ref(0) //导航栏显示多个方向，点击的那个的id
  const timeChoose = ref<string>() //点击的方向显示的所有时间
  const signInTime = ref<string>() //确认页面显示的预约时间
  const formattedDate = ref<string>() //时间的格式
  let timeList: { [x: string]: { id: number; time: string; status: number }[] } = {} //获取预约时间的所有
  let groupedByDateMap = new Map() //map方法
  let timeKeys = ref<string[]>([]) //预约时间的所有日期
  let timeListKeys = ref<string[]>([]) //按渲染模板的预约日期
  let userStatus = ref(0)
  let successPut = ref(0)
  let attend = ref(0)
  let directionNone = ref(false)

  //获取预约时间且分配到数组里面
  const getTimeList = (timeKeys: string[]) => {
    const groups = 2
    for (let i = 0; i < timeKeys.length; i++) {
      const slotsPerList = Math.ceil(groupedByDateMap.get(timeKeys[i]).length / groups)
      for (let n = 0; n < groups; n++) {
        timeList[`${timeKeys[i]}_${n + 1}`] = groupedByDateMap
          .get(timeKeys[i])
          .slice(n * slotsPerList, (n + 1) * slotsPerList)
      }
    }
    timeListKeys.value = Object.keys(timeList)
    return timeListKeys
  }

  //得到已预约时间渲染的标准格式
  const forEachTimeList = (id: number, timeKeyId: string) => {
    groupedByDateMap.get(timeKeyId).forEach((item: { id: number; time: string }) => {
      if (item.id === id) {
        popTime.value = item.time
        timeChoose.value = timeKeyId + '-' + popTime.value
      }
    })
  }
  const getTime = (id: number) => {
    idChoose.value = id
    for (let i = 0; i < timeKeys.value.length; i++) {
      forEachTimeList(id, timeKeys.value[i])
    }
  }

  //得到日期的标准格式
  const getYearMD = (timeUser: string) => {
    formattedDate.value = dayjs(timeUser).format('YYYY年MM月DD日')
  }

  const getDirectionName = () => {
    //只选择了一个方向时
    if (list.value.length === userDetailStore.directionNum.length) {
      list.value = list.value
    } else {
      //选择多个方向时
      list.value = []
      for (const item of userDetailStore.directionNum) {
        list.value.push(directionList.value[item])
      }
    }
  }

  //获取+显示时间
  const directionTimeListAll = async () => {
    if (userDetailStore.directionNum.length === 0) {
      directionNone.value = true
    } else {
      directionNone.value = false
    }
    for (const item of userDetailStore.directionNum) {
      if (chooseDirection.value === item + 1) {
        const resTimeChoose = await getDirectionTime(item)
        if (resTimeChoose.data.id !== 0) {
          alreadyChooseTime.value = true
        } else {
          alreadyChooseTime.value = false
        }
        idChoose.value = 0
        const resTime = await getTimeListAll(item)
        // timeData(resTime.data)
        if (resTime.code == '200') {
          timeData(resTime.data)
          successPut.value = 0
        } else {
          successPut.value = 1
        }
        const resStatus = await getDirectionTime(item)
        if (resStatus.code != '500') {
          userStatus.value = resStatus.data.status
        } else {
          userStatus.value = 0
        }
      }
    }
  }

  //用map方法整合传回来的数据，整合成时间段
  const timeData = (data: IPreTime[]) => {
    groupedByDateMap.clear()
    data.forEach((item) => {
      const day = item.timeStart.split(' ')[0]
      const timeRange = {
        id: item.id,
        time: item.timeStart1 + '-' + item.timeEnd1,
        status: item.status
      }
      if (groupedByDateMap.has(day)) {
        groupedByDateMap.get(day).push(timeRange)
      } else {
        groupedByDateMap.set(day, [timeRange])
      }
    })
    timeKeys.value = [...groupedByDateMap.keys()]
    getTimeList(timeKeys.value)
    return timeKeys
  }

  //刚刚点进页面时
  const firstdirectionTimeListAll = async () => {
    if (userDetailStore.directionNum.length === 0) {
      directionNone.value = true
    } else {
      directionNone.value = false
    }
    for (const item of userDetailStore.directionNum) {
      const resTimeChoose = await getDirectionTime(item)
      if (resTimeChoose.data.id !== 0) {
        alreadyChooseTime.value = true
      } else {
        alreadyChooseTime.value = false
      }
      chooseDirection.value = item + 1
      idChoose.value = 0
      const resTime = await getTimeListAll(item)
      if (resTime.code == '200') {
        timeData(resTime.data)
        successPut.value = 0
      } else {
        successPut.value = 1
      }
      const resStatus = await getDirectionTime(item)
      if (resStatus.code != '500') {
        userStatus.value = resStatus.data.status
      } else {
        userStatus.value = 0
      }
      return
    }
  }

  //显示时间的格式
  const getItemDirectionTime = async (item: number) => {
    const resTime = await getDirectionTime(item)
    if (resTime.msg != '200') {
      signInTime.value = '请先预约~'
      attend.value = 1
    }
    getYearMD(resTime.data.timeStart)
    const dateTimeString = resTime.data.timeStart1
    // 使用字符串分割提取时间部分
    const parts = dateTimeString.split(':')
    if (parts.length > 1) {
      const timePart = parts[1] + ':' + parts[2]
      signInTime.value = formattedDate.value + timePart + '-' + resTime.data.timeEnd1
    }
  }

  //签到页面显示的时间及规范时间格式 刚刚进来及剩下的
  const firstDirectionTime = async () => {
    for (const item of userDetailStore.directionNum) {
      if (chooseDirection.value === item + 1) {
        getItemDirectionTime(item)
        const resTime = await getDirectionTime(item)
        attend.value = resTime.data.attendAble
        return
      }
    }
  }
  let alreadyChooseTime = ref(false)
  const directionTime = async () => {
    for (const item of userDetailStore.directionNum) {
      if (chooseDirection.value === item + 1) {
        getItemDirectionTime(item)
        const resTime = await getDirectionTime(item)
        attend.value = resTime.data.attendAble
      }
    }
  }

  //保存预约时间
  const saveSignInTime = () => {
    getSignIn(chooseDirection.value)
  }

  // 记得 return
  return {
    userStatus,
    attend,
    timeList,
    groupedByDateMap,
    timeKeys,
    timeListKeys,
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
    getItemDirectionTime,
    firstdirectionTimeListAll,
    successPut,
    directionNone,
    alreadyChooseTime
  }
})
