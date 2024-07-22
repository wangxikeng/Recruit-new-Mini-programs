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
      <up-subsection
        activeColor="#7f52ff"
        :list="list"
        mode="subsection"
        :current="0"
      ></up-subsection>
    </view>
    <view class="res_time_box_1">
      <view class="day">2024年6月4日</view>
      <view class="time_cloumn">
        <view class="time_cloumn_1">
          <!-- <button class="btn">09 : 10-09 : 20</button>
          <button class="btn">09 : 10-09 : 20</button>
          <button class="btn">09 : 10-09 : 20</button>
          <button class="btn">09 : 10-09 : 20</button> -->
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
        </view>
        <view class="time_cloumn_1 time_cloumn_2">
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
        </view>
      </view>
    </view>
    <view class="res_time_box_1 res_time_box_2">
      <view class="day">2024年6月4日</view>
      <view class="time_cloumn">
        <view class="time_cloumn_1">
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
        </view>
        <view class="time_cloumn_1 time_cloumn_2">
          <up-button text="09:10-09:20"></up-button>
          <up-button text="09:10-09:20"></up-button>
        </view>
      </view>
    </view>
    <view class="make_sure">
      <up-button text="确认预约" @click="pop_up"></up-button>
    </view>

    <up-popup :show="show" mode="center" overlay="false">
      <view class="pop_desc">
        <text class="sure_desc">请确认你选择预约的时间是否为</text>
        <text class="sure_time">2024年6月4日09 : 10-09 : 20</text>
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
    </up-popup>
  </view>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const list = ref(['UI', '前端', '后台', '安卓', '深度学习'])
const current = ref(1)
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
}
</script>
<style lang="scss" scoped>
.wholepage {
  background-color: #f8f7ff;
}
.logo_img {
  width: 100%;
  height: 120px;
}
.logo_warning_img {
  width: 253px;
  height: 53px;
  margin-left: 120px;
  transform: translate(0, -90px);
}
.logo_warning {
  font-size: 12px;
  color: #f7f9ff;
  font-weight: 400;
  margin-left: 163px;
  transform: translate(0, -132px);
}
.nav_box {
  background-color: #f7f9ff;
  height: 50px;
  width: 100%;
  transform: translate(0, -95px);
  border-radius: 64px;
}
.nav {
  transform: translate(0, -135px);
}
::v-deep .u-subsection {
  height: 64px !important;
}
::v-deep .u-subsection__item {
  border: none !important;
}
::v-deep .u-subsection__bar {
  margin-top: 24px;
  width: 72px !important;
  margin-left: 3px;
}
::v-deep .u-subsection__bar--center.data-v-7b2e14a2 {
  border-radius: 25px;
}
::v-deep .u-subsection__bar--first.data-v-7b2e14a2 {
  border-radius: 25px;
}
::v-deep .u-subsection__bar--last.data-v-7b2e14a2 {
  border-radius: 25px;
}
::v-deep .u-subsection__item__text {
  font-size: 16px !important;
  font-weight: 500;
  color: #1a1a1a;
}
::v-deep .u-subsection__item {
  width: 78px;
  height: 32px;
  margin-top: 24px;
}
.res_time_box_1 {
  width: 353px;
  height: 229px;
  margin: auto;
  border: 2px solid #b79eff8c;
  border-radius: 12px;
  transform: translate(0, -90px);
}
.res_time_box_2 {
  height: 180px;
  margin-top: 48px;
}
.day {
  width: 115px;
  height: 35px;
  background-color: #b79eff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  transform: translate(20px, -20px);
}
.time_cloumn {
  display: flex;
  gap: 10px;
}
.time_cloumn_1 {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
::v-deep .u-button.data-v-461e713c {
  width: 136px;
  height: 33px;
  margin-left: 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  // color: #ffffff;
  border: 1px solid #7f52ff;
  background-color: #ffffff;
}

::v-deep .make_sure .u-button.data-v-461e713c {
  width: 288px;
  height: 48px;
  color: #ffffff;
  font-weight: 600;
  font-size: 15px;
  background-color: #7f52ff;
  border-radius: 16px;
  margin: auto;
  transform: translate(0, -64px);
}
.pop_desc {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-left: 54px;
  padding-top: 32px;
}
.sure_time {
  font-size: 18px;
  color: #7f52ff;
}
.pop_btn {
  display: flex;
  gap: 32px;
  margin-left: 24px;
  margin-top: 24px;
}
::v-deep .pop_btn .u-button--info.data-v-461e713c {
  width: 90px;
  height: 36px;
  border: 2px solid #7f52ff;
}
::v-deep .u-popup__content.data-v-74921bef {
  width: 353px;
  height: 200px;
  box-shadow: 0 4px 20.4px 0 #00000040;
  font-size: 16px;
}
::v-deep .pop_btn .u-button.data-v-461e713c {
  border-radius: 16px;
}
::v-deep .btn_2 .u-button {
  background-color: #7f52ff;
  transform: translate(24px, 0);
  color: #ffffff;
}
::v-deep .btn_2 .u-button--square.data-v-461e713c {
  color: #fff;
}
</style>
