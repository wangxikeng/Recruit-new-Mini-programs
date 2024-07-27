<template>
  <view class="wholepage">
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
      <view class="logo_warning">请安排好时间哦，预约后不可修改~</view>
    </view>
    <view class="nav_box"> </view>
    <view class="nav">
      <!-- <up-subsection
        activeColor="#7f52ff"
        :list="list"
        mode="subsection"
        :current="0"
      ></up-subsection> -->
      <view
        v-for="item in userDirectionStore.list"
        :key="item.id"
        class="direction"
        @click="directionTimeList"
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
      <!-- <view class="navDirection" v-for="item in list" :key="item.id">{{ item.name }}</view> -->
    </view>
    <view class="res_time_box_1">
      <view class="day">{{ userDirectionStore.formattedDate }}</view>
      <view class="time_cloumn">
        <view class="time_cloumn_1">
          <view
            v-for="time in userDirectionStore.timeList1"
            :key="time.id"
            @click="userDirectionStore.getTime(time.id)"
          >
            <button
              class="btn"
              @click="userDirectionStore.idChoose = time.id"
              :class="{ activeBtn: time.id === userDirectionStore.idChoose }"
            >
              {{ time.time }}
            </button>
          </view>
        </view>
        <view class="time_cloumn_1 time_cloumn_2">
          <view
            v-for="time in userDirectionStore.timeList2"
            :key="time.id"
            @click="userDirectionStore.getTime(time.id)"
          >
            <button
              class="btn"
              @click="userDirectionStore.idChoose = time.id"
              :class="{ activeBtn: time.id === userDirectionStore.idChoose }"
            >
              {{ time.time }}
            </button>
          </view>
        </view>
      </view>
    </view>
    <view class="res_time_box_1 res_time_box_2">
      <view class="day">{{ userDirectionStore.formattedDate }}</view>
      <view class="time_cloumn">
        <view class="time_cloumn_1">
          <view
            v-for="time in userDirectionStore.timeList3"
            :key="time.id"
            @click="userDirectionStore.getTime(time.id)"
          >
            <button
              class="btn"
              @click="userDirectionStore.idChoose = time.id"
              :class="{ activeBtn: time.id === userDirectionStore.idChoose }"
            >
              {{ time.time }}
            </button>
          </view>
        </view>
        <view class="time_cloumn_1 time_cloumn_2">
          <view
            v-for="time in userDirectionStore.timeList4"
            :key="time.id"
            @click="userDirectionStore.getTime(time.id)"
          >
            <button
              class="btn"
              @click="userDirectionStore.idChoose = time.id"
              :class="{ activeBtn: time.id === userDirectionStore.idChoose }"
            >
              {{ time.time }}
            </button>
          </view>
        </view>
      </view>
    </view>
    <view class="make_sure">
      <up-button text="确认预约" @click="pop_up"></up-button>
    </view>

    <up-popup :show="show" mode="center" overlay="false">
      <view class="pop">
        <view class="pop_desc">
          <text class="sure_desc">请确认你选择预约的时间是否为</text>
          <text class="sure_time">{{ userDirectionStore.timeChoose }}</text>
          <text class="sure_desc">确认后不可更改</text>
        </view>
        <view class="pop_btn">
          <view class="btn_1">
            <up-button text="取消" @click="pop_cancel"></up-button>
          </view>
          <view class="btn_2">
            <up-button text="确认" @click="pop_sure"></up-button>
          </view>
        </view>
      </view>
    </up-popup>
  </view>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { IResponse, IPreTime, IDirection } from '@/types/reservation'

import { useUserDetailStore } from '@/stores/modules/registration'
import { useDirectionStore } from '@/stores/modules/reservation'
import dayjs from 'dayjs'
import { getTimeListAll, getTargets, saveTargets, getDirectionTime } from '@/api/reservation'

const userDetailStore = useUserDetailStore()
const userDirectionStore = useDirectionStore()
// 创建响应式数据
const show = ref(false)
const pop_up = () => {
  show.value = true
}
const pop_cancel = () => {
  show.value = false
}
const pop_sure = () => {
  show.value = false
  saveTargets(userDirectionStore.idChoose)
}

onLoad(async () => {
  userDirectionStore.getDirectionName()
  console.log(userDirectionStore.list)
  for (const item of userDetailStore.directionNum) {
    userDirectionStore.chooseDirection = item + 1
    const resTime = await getTimeListAll(item)
    userDirectionStore.getTimeList(resTime.data, item)
    userDirectionStore.getYearMD(resTime.data[0].timeStart)
    return
  }
})

const directionTimeList = async () => {
  userDirectionStore.directionTimeListAll()
}
</script>
<style lang="scss" scoped>
.wholepage {
  background-color: #f8f7ff;
}
.logo_img {
  width: 100%;
  height: 240rpx;
}
.logo_warning_img {
  width: 506rpx;
  height: 106rpx;
  margin-left: 240rpx;
  transform: translate(0, -180rpx);
}
.logo_warning {
  font-size: 24rpx;
  color: #f7f9ff;
  font-weight: 400;
  margin-left: 326rpx;
  transform: translate(0, -264rpx);
}
.nav_box {
  background-color: #f7f9ff;
  height: 100rpx;
  width: 100%;
  transform: translate(0, -190rpx);
  border-radius: 128rpx;
}
.nav {
  transform: translate(0, -270rpx);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24rpx;
}
::v-deep .u-subsection {
  height: 128rpx !important;
}
::v-deep .u-subsection__item {
  border: none !important;
}
::v-deep .u-subsection__bar {
  margin-top: 48rpx;
  width: 134rpx !important;
  margin-left: 10rpx;
  // transform: translateX(0) !important;
  // display: none;
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
  font-size: 32rpx !important;
  font-weight: 500;
  color: #1a1a1a;
}
::v-deep .u-subsection__item {
  width: 156rpx;
  height: 64rpx;
  margin-top: 48rpx;
}
.res_time_box_1 {
  width: 706rpx;
  height: 458rpx;
  margin: auto;
  border: 4rpx solid #b79eff8c;
  border-radius: 24rpx;
  transform: translate(0, -200rpx);
}
.res_time_box_2 {
  height: 360rpx;
  margin-top: 96rpx;
}
.day {
  width: 230rpx;
  height: 70rpx;
  background-color: #b79eff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16rpx;
  font-size: 24rpx;
  font-weight: 600;
  color: #ffffff;
  transform: translate(40rpx, -40rpx);
}
.time_cloumn {
  display: flex;
  gap: 20rpx;
}
.time_cloumn_1 {
  display: flex;
  flex-direction: column;
  gap: 20rpx;
}
// ::v-deep .u-button.data-v-461e713c
.btn {
  width: 272rpx;
  height: 66rpx;
  margin-left: 48rpx;
  border-radius: 6px;
  font-size: 28rpx;
  font-weight: 500;
  // color: #ffffff;
  border: 2rpx solid #7f52ff;
  background-color: #ffffff;
}

::v-deep .make_sure .u-button.data-v-461e713c {
  width: 576rpx;
  height: 96rpx;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  background-color: #7f52ff;
  border-radius: 16px;
  margin: auto;
  transform: translate(0, -128rpx);
}
.pop_desc {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 108rpx;
  padding-top: 64rpx;
}
.sure_time {
  font-size: 18px;
  color: #7f52ff;
}
.pop {
  border-radius: 24px;
}
.pop_btn {
  display: flex;
  gap: 64rpx;
  margin-left: 48rpx;
  margin-top: 48rpx;
}
::v-deep .pop_btn .u-button--info.data-v-461e713c {
  width: 180rpx;
  height: 72rpx;
  border: 2px solid #7f52ff;
  margin-left: 48rpx;
}
::v-deep .u-popup__content.data-v-74921bef {
  width: 706rpx;
  height: 400rpx;
  box-shadow: 0 4px 20.4px 0 #00000040;
  font-size: 16px;
  border-radius: 24rpx;
}
::v-deep .pop_btn .u-button.data-v-461e713c {
  border-radius: 16px;
}
::v-deep .btn_2 .u-button {
  background-color: #7f52ff;
  transform: translate(48rpx, 0);
  color: #ffffff;
}
::v-deep .btn_2 .u-button--square.data-v-461e713c {
  color: #fff;
}
.activeBtn {
  background-color: #7f52ff;
  color: #fff;
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
