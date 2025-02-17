<script setup lang="ts">
import { ref } from 'vue'
import { useDirectionStore } from '../../stores/modules/reservation'
import { onLoad } from '@dcloudio/uni-app'
import { useUserDetailStore } from '@/stores/modules/registration'
import {watch} from 'vue' 
import { getDirectionTime, getSignIn  } from '@/api/reservation'


const userDetailStore = useUserDetailStore()
const userDirectionStore = useDirectionStore()
const attendColorArr = ['ongoing', 'will', 'finish']
const attendArr = ['签到', '未开启', '已签到']
const chooseDirectionArr=ref<number[]>([])

// 签到弹出框确定
const show = ref(false)
//点击签到按钮弹出确认框
const signIn = () => {
  show.value = true
}
// 点击取消
const cancelSignIn = () => {
  show.value = false
}
// 点击确定
const confirmSignIn = () => {
  show.value = false
  getSignIn(userDirectionStore.chooseDirection - 1)
  userDirectionStore.attend = 2
}

// 温馨提示语
let showcase = 0

const showReservedDirection=async()=>{
  userDirectionStore.getReservedDirectionName() 
  for (const item of userDetailStore.hasReservedDirectionArr) {
    userDirectionStore.chooseDirection = item + 1
    userDirectionStore.getItemDirectionTime(item)
    const resTime = await getDirectionTime(item)
    userDirectionStore.attend = resTime.data.attendAble
    return
  }
}


//点进来就要显示第一个方向
onLoad(async () => {
  userDetailStore.hasReservedDirectionArr=[]
  console.log(userDetailStore.hasReservedDirectionArr);
  
      if(uni.getStorageSync('directionNum')){
      chooseDirectionArr.value=uni.getStorageSync('directionNum')
      console.log(chooseDirectionArr.value);
      
      for(const item of chooseDirectionArr.value){
        console.log(chooseDirectionArr.value);
        
          const res=await getDirectionTime(item)
          if(res.code!='500'){
              // userDetailStore.hasReservedDirectionArr.push(res.data.target)
              userDetailStore.pushReservedDirection(res.data.target)
          }
      }
      console.log(userDetailStore.hasReservedDirectionArr);
      showReservedDirection()
    }
})


//切换导航方向之后显示的
const directionTimeClick = async () => {
  userDirectionStore.directionTime()

}
</script>

<template>
  <view class="whole_box">
    <view class="image">
      <image
        src="../../static/interview/interview_background@3x.png"
        mode="scaleToFill"
        class="logo_img"
      ></image>
      <image
        src="../../static/interview/interview_dialog box@3x.png"
        mode="scaleToFill"
        class="logo_warning_img"
      />
      <view class="caution_word_notCheck" v-if="showcase === 0">请提前五分钟到达面试场地等待</view>
      <view class="caution_word_checked" v-if="showcase === 1">祝你面试顺利哦~</view>
    </view>

    <!-- 剩下部分 -->
    <view class="below">
      <!-- 导航栏部分 -->
      <!-- <view class="nav_box"> </view> -->
      <view class="nav">
        <view
          v-for="item in userDirectionStore.reservedList"
          :key="item.id"
          class="direction"
          @click="directionTimeClick"
          ref="directionBtn"
        >
          <view
            class="navDirection"
            @click="userDirectionStore.chooseDirection = item.id"
            :class="{ activeDirection: item.id === userDirectionStore.chooseDirection }"
          >
            {{ item.name }}
          </view>
        </view>
        <!-- <view class="navDirection" v-for="item in reservedList" :key="item.id">{{ item.name }}</view> -->
      </view>

      <!-- 预约时间确定-->
      <view class="confirm_box">
        <view class="appointment_time">预约时间</view>
        <view class="parting_line"></view>
        <view class="detail_time">{{ userDirectionStore.signInTime }}</view>
      </view>

      <!-- 按钮 暂未开启签到 签到 已签到 -->
      <!-- <view class="signIn-inactive">暂未开启签到</view> -->
      <view @click="signIn" :class="attendColorArr[userDirectionStore.attend]">{{
        attendArr[userDirectionStore.attend]
      }}</view>
      <!-- <view class="signIn_active" @click="signIn" v-if="showcase === 0">签到</view> -->
      <!-- <view class="have_signIn" v-if="showcase === 1">已签到 </view> -->

      <!-- 弹窗确定预约时间 -->
      <up-modal
        :show="show"
        content="是否确认签到？确认后不可更改"
        :showCancelButton="true"
        @cancel="cancelSignIn"
        @confirm="confirmSignIn"
        confirmColor="#fff"
        cancelColor="#7f52ff"
      ></up-modal>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.finish {
  background-color: #aeb4c2;
  position: absolute;
  width: 576rpx;
  height: 96rpx;
  top: 946rpx;
  left: 93rpx;
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 32rpx;
  line-height: 92rpx;
}
.ongoing {
  background-color: #7f52ff;
  position: absolute;
  width: 576rpx;
  height: 96rpx;
  top: 946rpx;
  left: 93rpx;
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 32rpx;
  line-height: 92rpx;
}
.will {
  background-color: #9773ff;
  position: absolute;
  width: 576rpx;
  height: 96rpx;
  top: 946rpx;
  left: 93rpx;
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 32rpx;
  line-height: 92rpx;
}
.whole_box {
  background-color: #f8f7ff;
}

// 吉祥物背景
.logo_img {
  width: 100%;
  height: 240rpx;
}

// 温馨提示框
.logo_warning_img {
  width: 506rpx;
  height: 106rpx;
  margin-left: 240rpx;
  transform: translate(0, -180rpx);
}

// 未签到时提醒
.caution_word_notCheck {
  color: #f7f9ff;
  font-weight: 400;
  font-size: 24rpx;
  margin-left: 326rpx;
  transform: translate(24rpx, -264rpx);
}

// 已签到时提醒
.caution_word_checked {
  color: #f7f9ff;
  font-weight: 400;
  font-size: 24rpx;
  margin-left: 326rpx;
  transform: translate(84rpx, -264rpx);
}

.nav_box {
  background-color: #f7f9ff;
  height: 100rpx;
  width: 100%;
  transform: translate(0, -190rpx);
  border-radius: 128rpx;
}

// 五个方向导航
.nav {
  transform: translate(-15rpx, 6rpx);
}

// 导航样式改变
::v-deep .u-subsection.data-v-7b2e14a2 {
  width: 95%;
}

::v-deep .u-subsection {
  height: 128rpx !important;
}
::v-deep .u-subsection__item {
  border: none !important;
}
::v-deep .u-subsection__bar {
  width: 144rpx !important;
  margin-top: 48rpx;
  margin-left: 5rpx;
}
::v-deep .u-subsection__bar--center.data-v-7b2e14a2 {
  border-radius: 50rpx;
}
::v-deep .u-subsection__bar--first.data-v-7b2e14a2 {
  border-radius: 50rpx;
}
::v-deep .u-subsection__bar--last.data-v-7b2e14a2 {
  border-radius: 50rpx;
}
::v-deep .u-subsection__item__text {
  font-weight: 500;
  color: #1a1a1a;
  font-size: 32rpx !important;
}
::v-deep .u-subsection__item {
  width: 156rpx;
  height: 64rpx;
  margin-top: 48rpx;
}

::v-deep .u-subsection.data-v-7b2e14a2 {
  margin-left: -25rpx;
}

//       // 剩下部分大盒子
.below {
  position: absolute;
  top: 218rpx;
  width: 786rpx;
  height: 1312rpx;
  background-color: rgba(248, 247, 255, 1);
  box-shadow: -4rpx -6rpx 29.8rpx 0 rgba(90, 109, 148, 0.2);
  border-radius: 32rpx 32rpx 0 0;
  text-align: center;
}

//       // 预约时间确定框
.confirm_box {
  width: 556rpx;
  height: 164rpx;
  border-radius: 32rpx;
  background-color: rgba(183, 158, 255, 1);
  // margin: 60rpx auto;
  margin-top: 60rpx;
  margin-left: 59rpx;
  color: white;
  padding: 42rpx;
}

//       // 预约时间分割线
.parting_line {
  width: 390rpx;
  height: 2rpx;
  background-color: white;
  margin: 36rpx auto;
}

//暂未开启签到按钮
.signIn_inactive {
  position: absolute;
  width: 576rpx;
  height: 96rpx;
  top: 946rpx;
  left: 93rpx;
  background-color: rgba(174, 180, 194, 1);
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 32rpx;
  line-height: 92rpx;
}

// 签到按钮
.signIn_active {
  position: absolute;
  top: 946rpx;
  left: 93rpx;
  width: 576rpx;
  height: 96rpx;
  // background-color: rgba(127, 82, 255, 1);
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 32rpx;
  line-height: 92rpx;
}

// 已签到按钮
.have_signIn {
  position: absolute;

  width: 576rpx;
  height: 96rpx;
  top: 946rpx;
  left: 93rpx;
  background-color: rgba(174, 180, 194, 1);
  color: white;
  font-weight: 600;
  text-align: center;
  border-radius: 32rpx;
  line-height: 92rpx;
}

//弹窗
// 弹窗高度
::v-deep .u-popup__content.data-v-74921bef {
  height: 358rpx;
}

// 弹窗内容
::v-deep .u-modal__content.data-v-12b77a26 {
  padding-top: 96rpx !important;
}

// 弹窗分割线
::v-deep .u-line.data-v-bbd9963c {
  border-bottom-style: none !important;
}

// 取消确认按钮大盒子
::v-deep .u-modal__button-group.data-v-12b77a26 {
  position: absolute;
  bottom: 54rpx;
}

// 取消 确定 单个按钮小盒子
::v-deep .u-modal__button-group__wrapper.data-v-12b77a26 {
  border-radius: 20rpx !important;
  border: 2px solid rgba(127, 82, 255, 1);
  height: 64rpx;
  width: 160rpx;
  margin-left: 118rpx;
}

// 是否确定 字体
::v-deep .u-modal__content__text.data-v-12b77a26 {
  color: black;
}

// 确定按钮盒子
::v-deep .u-modal__button-group__wrapper--confirm.data-v-12b77a26,
.u-modal__button-group__wrapper--only-cancel.data-v-12b77a26 {
  background-color: rgba(127, 82, 255, 1);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24rpx;
}
.navDirection {
  width: 144rpx;
  height: 70rpx;
  color: #1a1a1a;
  font-size: 16px;
  font-weight: 500;
  border-radius: 16px;
  background-color: transparent;
  border: none !important;
  cursor: pointer;
  outline: none !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.navDirection:focus {
  outline: none !important; /* 去除按钮获取焦点时的默认边框 */
}
.activeDirection {
  background-color: #7f52ff;
  color: #ffffff !important;
  border-radius: 24px;
  font-weight: 700;
}
</style>
