 <script setup lang="ts">
import { ref, reactive } from 'vue'
// 面试预约跳转
const toReservation = () => {
  uni.navigateTo({
    url: '/pages/reservation/reservation'
  })
}
// 面试签到跳转
const toSignIn = () => {
  uni.navigateTo({
    url: '/pages/signIn/interview_signIn'
  })
}
// 面试进度跳转
const toProcedure = () => {
  uni.navigateTo({
    url: '/pages/procedure/procedure'
  })
}

</script> 

<template>
  <view class="whole_interview_box">
    <!-- 上面温馨提示部分 -->
    <view class="remind">
      <!-- 三个温馨提示盒子 -->
      <view class="remind_box1">
        <text>面试通知：请记得带简历和作品哦~</text>
      </view>
      <view class="remind_box2">
        <text>恭喜你通过一轮面试</text>
      </view>
      <view class="remind_box3">
        <text>预约面试后记得面试签到进入排队哦~</text>
      </view>
    </view>
    <!-- 下面按钮选择部分 -->
    <view class="select">
      <view class="select_boxes">
        <view class="select_box1" @click="toReservation">
          <image
            src="../../static/interview/interview_interview appointment_icon.png"
            mode="scaleToFill"
          />
          <text >面试预约</text>
        </view>
        <view class="select_box2" @click="toSignIn">
          <image src="../../static/interview/interview_sign-in_icon.png" mode="scaleToFill" />
          <text>面试签到</text>
        </view>
        <view class="select_box3" @click="toProcedure">
          <image
            src="../../static/interview/interview_interview progress_icon.png"
            mode="scaleToFill"
          />
          <text>进度查看</text>
        </view>
      </view>
    </view>
  </view>
</template> 



<style lang="scss" scoped>
// 大盒子
.whole_interview_box {

  width: 786rpx;
  height: 1388rpx;
  background-color: rgba(248, 247, 255, 1);
}

//温馨提示
.remind {
  width: 100%;
  height: 480rpx;

}

//   温馨提示盒子公共部分
.remind_box1,
.remind_box2,
.remind_box3 {
  position: absolute;
  border-radius: 30rpx;

  border-radius: 30rpx;

  background-color: rgba(127, 82, 255, 0.7);
  text-align: center;
  line-height: 62rpx;

}

.remind_box1 {

  top: 72rpx;
  left: 218rpx;
  width: 416rpx;
  height: 70rpx;
}

.remind_box2 {

  top: 202rpx;
  left: 98rpx;
  width: 256rpx;
  height: 64rpx;
}

.remind_box3 {

  top: 334rpx;
  left: 225rpx;
  width: 472rpx;
  height: 70rpx;
}

//温馨提示文字
.remind text {

  font-size: 24rpx;
  color: white;
}

//   选择框
.select {
  position: relative;

  width: 751rpx;
  height: 908rpx;
  margin-top: -16rpx;
  border-radius: 68rpx 68rpx 0 0;

  width: 751rpx;
  height: 908rpx;
  margin-top: -16rpx;
  border-radius: 68rpx 68rpx 0 0;
  background: linear-gradient(to bottom, rgb(215, 185, 245, 0.5), rgb(229, 196, 230, 0.1));
  text-align: center;
  overflow: hidden;
}

// 选择框盒子公共部分
.select_box1,
.select_box2,
.select_box3 {
  position: relative;
  margin-bottom: 46rpx;

}

.select_boxes {
  margin-top: 124rpx;
  margin-left: -6rpx;
  margin-top: 124rpx;
  margin-left: -6rpx;
}

//按扭框图片
.select_box1 image,
.select_box2 image,
.select_box3 image {
  width: 422rpx;
  height: 164rpx;
  width: 422rpx;
  height: 164rpx;
}

//按钮框字体
.select_box1 text,
.select_box2 text,
.select_box3 text {
  position: absolute;
  line-height: 126rpx;
  line-height: 126rpx;
  font-weight: bold;
  font-size: 36rpx;
  left: 368rpx;
  font-size: 36rpx;
  left: 368rpx;
}

.select_box1 text {
  color: rgb(79, 129, 254);

  top: 18rpx;
  top: 18rpx;
}

.select_box2 text {
  color: rgb(137, 45, 207);
  top: 22rpx;
  top: 22rpx;
}

.select_box3 text {
  color: rgb(217, 0, 221);
  top: 20rpx;
  top: 20rpx;
}
</style> 




