<script setup lang="ts">
import { ref } from 'vue'
import { logIn } from '@/api/login'
import { useUserStore } from '@/stores/modules/user'
import { storeToRefs } from 'pinia'
const store = useUserStore()
// 解构数据 方法
const { userInfo } = storeToRefs(store)
const { SetUserToken } = store

// 校验错误提示
const isErrorRemind = ref(false)

//密码是否显示
const isDisplay = ref<boolean>(true)

// 密码框密码icon显示隐藏
const isEyeOpen = ref<string>('eye-off')
const changeEye = () => {
  if (isEyeOpen.value === 'eye-off') {
    isEyeOpen.value = 'eye-fill'
    isDisplay.value = false
  } else {
    isEyeOpen.value = 'eye-off'
    isDisplay.value = true
  }
}

// // 账号 密码
const accountValue = ref<string>('')
const passwordValue = ref<string>('')
const loginParams = ref<object>({
  account: accountValue,
  password: passwordValue
})

//如果存在token 重定向至首页
uni.getStorage({
  key: 'token',
  success: function () {
    uni.switchTab({
      url: '/pages/home/home'
    })
  }
})

//登录请求
const toHome = async () => {
  const res = await logIn(loginParams.value)

  userInfo.value = res.data
  if (userInfo.value === undefined) {
    // 显示账号或密码错误提示
    isErrorRemind.value = true
  } else {
   
    // 把token保存本地
    SetUserToken(res.data.token)
    //跳转到首页
    uni.switchTab({
      url: '/pages/home/home'
    })
  }
}

//请求前表单校验
const showAccountError = () => {
  if (accountValue.value == '' || accountValue.value.includes(' ')||accountValue.value.length<10) {
    uni.showToast({
      title: '请正确输入账号',
      icon: 'error'
    })
  } 
}

const showPasswordError=()=>{
  if (passwordValue.value=='' || passwordValue.value.includes(' ')) {
    uni.showToast({
      title: '请正确输入密码',
      icon: 'error',
      
    })
}
}
</script>

<template>
  <!-- 上面背景图 -->
  <image
    src="../../static/layoutHome/login_background.png"
    mode="scaleToFill"
    class="login-background"

    

  />
  <!-- 下面信息表格 -->
  <view class="student-information">
    <!-- 账号框 -->
    <view class="account-box">
      <text>账号</text>
      <up-input
        placeholder="请输入学号"
        border="surround"
        v-model="accountValue"
        placeholderStyle="{color:'rgba(102, 102, 102, 1)',fontsize:'28rpx'}"
        @blur="showAccountError"
        
      ></up-input>
    </view>
    <!-- 密码框 -->
    <view class="password-box">
      <text>密码</text>
      <up-input
        placeholder="请输入密码"
        border="surround"
        v-model="passwordValue"
        :password="isDisplay"
        customStyle="margin-top:59rpx !important"
        placeholderStyle="{color:'rgba(102, 102, 102, 1)',fontsize:'28rpx'}"
        @blur="showPasswordError"

      ></up-input>
      <up-icon
        :name="isEyeOpen"
        class="eye-off-icon"
        color="rgba(102, 102, 102, 1)"
        size="56rpx"
        top="-110rpx"
        @click="changeEye"
      ></up-icon>
    </view>
    <!-- 忘记密码 -->
    <text class="forget-password">
      忘记密码？
    </text>
    <!-- 校验错误提示 -->
    <view
      class="error-remind-box"
      v-show="isErrorRemind"
    >
      <image
        src="../../static/icons/login-error-remind.png"
        mode="scaleToFill"
      />
      <text>账号或密码输入错误</text>
    </view>
    <!-- 登录按钮 -->
    <up-button
      text="登录"
      @click="toHome"
    ></up-button>
    <!-- 注释提醒 -->
    <text class="annotation">
      注：初次登录输入密码即视为注册
    </text>
  </view>
</template>

<style lang="scss">
.login-background {
  width: 750rpx;
  height: 500rpx;
}

.student-information {
  width: 100%;
  height: 920rpx;
  background-color: rgba(248, 247, 255, 1);
  margin-top: -9rpx;
}

// 输入框样式
::v-deep .u-input.data-v-5904192e {
  width: 524rpx;
  transform: translate(102rpx, 36rpx);
  height: 80rpx;
  border-radius: 20rpx !important;
  background-color: rgba(255, 255, 255, 1);
}

::v-deep .u-border {
  box-shadow: 0 0 4rpx 0 rgba(178, 202, 252, 0.81);
}

//账号框
.account-box text {
  display: block;
  color: rgba(26, 26, 26, 1);
  transform: translate(130rpx, 6rpx);
}

//密码框
.password-box text {
  display: block;
  color: rgba(26, 26, 26, 1);
  transform: translate(130rpx, 66rpx);
}

::v-deep .u-icon__icon.data-v-1c933a9a {
  left: 468rpx;
}

//校验错误提示
.error-remind-box {
  position: absolute;
  bottom: 436rpx;
  left: 276rpx;
}

.error-remind-box image {
  width: 36rpx;
  height: 36rpx;
  position: absolute;
  top: 6rpx;
  left: -42rpx;
}

.error-remind-box text {
  color: rgba(127, 82, 255, 1);
  font-size: 28rpx;
  font-weight: 500;
}

//忘记密码
.forget-password {
  display: block;
  transform: translate(540rpx, 13rpx);
  color: rgba(79, 129, 254, 1);
  font-size: 24rpx;
}

//登录框
::v-deep .u-button--normal.data-v-461e713c {
  width: 560rpx !important;
  height: 88rpx !important;
  border-radius: 32rpx !important;
  color: white !important;
  background-color: rgba(127, 82, 255, 1) !important;
  transform: translate(6rpx, 196rpx);
  font-weight: 600;
}

// 注释提醒
.annotation {
  font-size: 24rpx;
  color: rgba(102, 102, 102, 1);
  display: block;
  transform: translate(206rpx, 224rpx);
}
</style>