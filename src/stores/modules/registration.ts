import type { IRequest } from '@/types/userdetail'
import { defineStore } from 'pinia'
import { ref, toRefs } from 'vue'
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
    hardware: false,
    plan: '',
    committed: true
  })

  let directionNum = ref<number[]>([]) //选择的方向
  let directionName = ref<string[]>([]) //选择方向的名字
  let planName = ref<string[]>([]) //选择方向的名字

  const hasReservedDirectionArr = ref<number[]>([])

  const showError = ref(false)
  const commitError = ref('')
  const errorRemindArr = ref<string[]>([])

  interface MyObject {
    [key: string]: number
    headend: number
    backend: number
    android: number
    uidesign: number
    deeplearn: number
    hardware: number
  }

  const keyToIndexMap: MyObject = {
    headend: 0,
    backend: 1,
    android: 2,
    uidesign: 3,
    deeplearn: 4,
    hardware: 5
  }

  const key: string = 'backend'
  const value = keyToIndexMap[key]
  const submit_pop = ref(false)
  const submit_pop_1 = ref(false)

  //获取用户报名信息
  const setUerDetailInfo = async () => {
    // uni.setStorageSync('directionNum', directionNum.value)
    const res = await saveDetail(user.value)
    if (res.code == '200') {
      showError.value = false
      submit_pop.value = true
      submit_pop_1.value = true
    }
    if (
      directionName.value.length == 0 ||
      planName.value.length == 0 ||
      res.code == '500' ||
      res.code == '701' ||
      res.code == '700'
    ) {
      // 展示错误-输入真实姓名/学号错误
      // showError.value = true
      errorRemindArr.value = res.msg.split('-')
      submit_pop.value = false
      submit_pop_1.value = false
      return
    }
    console.log(showError.value)
    getDirectionNum()
    console.log(directionNum)
    return showError.value
  }

  const getDirectionNum = async () => {
    const resDetail = await getDetail()
    user.value = resDetail.data
    console.log(resDetail.data)
    directionNum: [] = Object.entries(resDetail.data).reduce<number[]>((acc, [field, value]) => {
      if (value === true && keyToIndexMap[field] !== undefined) {
        acc.push(keyToIndexMap[field])
      }
      return acc
    }, [])
    console.log(directionNum)
  }

  // 提交前验证信息 新加的
  const validate = () => {
    const accountRegex = /^\d{10}$/
    const phoneRegex = /^1([38][0-9]|4[579]|5[0-3,5-9]|66|7[0135678]|9[89])\d{8}$/
    if (user.value.userName === '') {
      uni.showToast({
        title: '姓名不能为空',
        icon: 'error'
      })
      return false
    } else if (user.value.major === '') {
      uni.showToast({
        title: '学院不能为空',
        icon: 'error'
      })
      return false
    } else if (!accountRegex.test(user.value.account)) {
      uni.showToast({
        title: '请正确输入学号',
        icon: 'error'
      })
      return false
    } else if (!phoneRegex.test(user.value.phone)) {
      uni.showToast({
        title: '请正确输入电话',
        icon: 'error'
      })
      return false
    } else if (user.value.introduction.length < 10) {
      uni.showToast({
        title: '介绍不少于10字',
        icon: 'error'
      })
      return false
    } else if (directionName.value.length == 0) {
      return false
    } else if (planName.value.length == 0) {
      return false
    }
    return true
  }

  const pushReservedDirection = (item: number) => {
    if (!hasReservedDirectionArr.value.some((every) => every === item)) {
      hasReservedDirectionArr.value.push(item)
    }
    console.log(hasReservedDirectionArr.value)
  }

  // 记得 return
  return {
    user,
    directionNum,
    directionName,
    setUerDetailInfo,
    validate,
    showError,
    commitError,
    errorRemindArr,
    hasReservedDirectionArr,
    pushReservedDirection,
    getDirectionNum,
    planName,
    submit_pop_1,
    submit_pop
  }
})
