<script setup lang="ts">
import { ref, reactive } from 'vue'
const list = ref(['UI', '前端', '后台', '安卓', '深度学习'])
const current = ref(1)

// 进度数组
const progressArr:string[]=['未开始','进行中','已完成']
</script>


<template>
  <view class="wholepage">
      <view class="nav">
      <up-subsection
        activeColor="#7f52ff"
        :list="list"
        mode="subsection"
        :current="0"
      ></up-subsection>
      </view>

      <view class="content">
          <view class="content_box">
        <view class="content_desc_1">面试</view>
        <view class="content_desc_2">({{ progressArr[2] }})</view>
          </view>
          <view class="icon_box">
            <view class="square"></view>
            <view class="line"></view>
            <view class="arrow">
              <up-icon name="arrow-down" color="#9773FF" size="14" bold="true"></up-icon>
            </view>
          </view>

          <view class="content_box content_box_2">
        <view class="content_desc_1">一轮考核</view>
        <view class="content_desc_2">({{ progressArr[1] }})</view>
          </view>
          <view class="icon_box icon_box_2">
            <view class="square"></view>
            <view class="line"></view>
            <view class="arrow">
              <up-icon name="arrow-down" color="#9773FF" size="16" bold="true"></up-icon>
            </view>
          </view>

          <view class="content_box content_box_3">
          <view class="content_desc_1">二轮考核</view>
          <view class="content_desc_2">({{ progressArr[0] }})</view>
          </view>
          <view class="icon_box icon_box_3">
            <view class="square"></view>
            <view class="line"></view>
            <view class="arrow">
              <up-icon name="arrow-down" color="#9773FF" size="14" bold="true"></up-icon>
            </view>
          </view>

          <view class="content_box content_box_4">
          <view class="content_desc_1">三轮</view>
          <view class="content_desc_2">({{ progressArr[0] }})</view>
          </view>
      </view>
  </view>
</template>





<style lang="scss" scoped>
.wholepage {
  background-color: #f8f7ff;
  height: 100vh;
}

::v-deep .u-subsection {
  height: 128rpx !important;
}
::v-deep .u-subsection__item {
  border: none !important;
}
::v-deep .u-subsection__bar {
  margin-top: 48rpx;
  width: 144rpx !important;
  margin-left: 4rpx;
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
.content {
  margin-top: 80rpx;
}
.content_box {
  width: 254rpx;
  height: 166rpx;
  margin: auto;
  border-radius: 20rpx;
  background-color: #aeb4c2;
  display: flex;
  flex-direction: column;
  gap: 16rpx;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 32rpx;
}
.content_box_2 {
  background-color: #7f52ff;
  transform: translate(0, -16rpx);
}
.content_box_3,
.content_box_4 {
  background-color: #9773ff;
  transform: translate(0, -16rpx);
}
.content_box_4 {
  transform: translate(0, -30rpx);
}
.icon_box_2,
.icon_box_3 {
  transform: translate(0, -16rpx);
}
.square {
  width: 16rpx;
  height: 16rpx;
  background-color: #9773ff;
  margin: auto;
  transform: rotate(45deg);
}
.line {
  height: 104rpx;
  width: 6rpx;
  background-color: #9773ff;
  margin: auto;
}
::v-deep .u-icon__icon.data-v-1c933a9a {
  margin: auto;
  transform: translate(0, -14rpx);
}
</style>
