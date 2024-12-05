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
  const hasReservedDirectionArr=ref<number[]>([])

  const showError=ref(false)
  const commitError=ref('')
  const errorRemindArr=ref<string[]>([])

  //获取用户报名信息
  const setUerDetailInfo = async () => {
    uni.setStorageSync('directionNum',directionNum.value)
    const res = await saveDetail(user.value)
    if(res.code=='500'||res.code=='701'||res.code=='700'){
      // 展示错误-输入真实姓名/学号错误
      showError.value=true
      errorRemindArr.value=res.msg.split('-')
      // commitError.value=errorRemindArr.value.join('<br>')
      
      // commitError.value=res.msg
      return 
    }
    const resDetail = await getDetail()
    user.value = resDetail.data   
  }

  // 提交前验证信息 新加的
  const validate=()=>{
    const accountRegex=/^\d{10}$/
    const phoneRegex=/^1([38][0-9]|4[579]|5[0-3,5-9]|66|7[0135678]|9[89])\d{8}$/
    if(user.value.userName===''){
      uni.showToast({  
        title: '姓名不能为空',  
        icon: 'error'  
      });  
      return false; 
    }
    else if(user.value.major===''){
      uni.showToast({  
        title: '学院不能为空',  
        icon: 'error'  
      });  
      return false; 
    }
    else if(!accountRegex.test(user.value.account)){
      uni.showToast({  
        title: '请正确输入学号',  
        icon: 'error'  
      });  
      return false; 
    }
    else if(!phoneRegex.test(user.value.phone)){
      uni.showToast({  
        title: '请正确输入电话',  
        icon: 'error'  
      });  
      return false;  
    }
  
    else if(user.value.introduction.length<10){
      uni.showToast({  
        title: '介绍不少于10字',  
        icon: 'error'  
      });  
      return false;  
    }
    return true
  }

  const pushReservedDirection=(item:number)=>{
    if(!hasReservedDirectionArr.value.some(every=>every===item)){
            hasReservedDirectionArr.value.push(item)
    }
    console.log(hasReservedDirectionArr.value);
    
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
    pushReservedDirection
  }
})
