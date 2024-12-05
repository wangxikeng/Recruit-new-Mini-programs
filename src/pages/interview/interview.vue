<script setup lang="ts">
import { ref, reactive,onMounted } from 'vue'
import {getDetail} from '@/api/resgistration'
import { onLoad } from '@dcloudio/uni-app';
import {useUserDetailStore} from '@/stores/modules/registration'
import {getDirectionTime} from '@/api/reservation'
const userDetailStore = useUserDetailStore()
const ifRedirect=ref(false)
const ifAbleReserve=ref(false)
const isShowMessage=ref(false)
const isShowReserveMsg=ref(false)
const procedureNum=ref<string>('一')
const procedureDirection=ref<string>('前端')
const chooseDirectionArr=ref<number[]>([])
// 新加的
// onLoad(async()=>{
  
//   // 是否报名
//   const res=await getDetail()
//   if(res.hasOwnProperty('data')){
//     ifRedirect.value=true
//   }
//   // 是否预约
//   chooseDirectionArr.value=uni.getStorageSync('directionNum')
//   for (const item of chooseDirectionArr.value){
//     const res=await getDirectionTime(item)
//     // 只要有预约至少一个方向，就允许点进签到页
//     if(res.code!='500'){
//       ifAbleReserve.value=true
//       break
//     }
//   }
// })

// 跳转要判断是否成功报名，否弹框提示请先报名 
// 面试预约跳转
const toReservation = () => {
  if(ifRedirect.value){
    
    uni.navigateTo({
      url: '/pages/reservation/reservation'
    })
  }
  else{
      isShowMessage.value=true
  }
  
}
// 面试签到跳转  报名了并且有预约信息才可以点进签到页 
const toSignIn = async() => {
  chooseDirectionArr.value=uni.getStorageSync('directionNum')
  for (const item of chooseDirectionArr.value){
    const res=await getDirectionTime(item)
    // 只要有预约至少一个方向，就允许点进签到页
    if(res.code!='500'){
      ifAbleReserve.value=true
      break
    }
  }
  if(ifRedirect.value&&ifAbleReserve.value){
    uni.navigateTo({
      url: '/pages/signIn/interview_signIn'
    })
  }
  else if(!ifRedirect.value){
    isShowMessage.value=true
  }
  else{
    isShowReserveMsg.value=true
  }
 
}
// 面试进度跳转   报名了才可以点进签到页
const toProcedure = async() => {
  // if(ifRedirect.value&&ifAbleReserve.value){
    const res=await getDetail()
  if(res.hasOwnProperty('data')){
    ifRedirect.value=true
  }
    if(ifRedirect.value){
    uni.navigateTo({
      url: '/pages/procedure/procedure'
    })
  }
  else if(!ifRedirect.value){
    isShowMessage.value=true
  }
  // else{
  //   isShowReserveMsg.value=true
  // }
 
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
        <text>恭喜你通过{{ procedureDirection }}组{{procedureNum}}轮面试</text>
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
          <text>面试预约</text>
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
  <template>
	<view >
		<up-modal :show="isShowMessage" title="温馨提示" content='未报名，请前往报名页进行报名' @confirm="isShowMessage = false"></up-modal>
	</view>
</template>
<template>
	<view >
		<up-modal :show="isShowReserveMsg" title="温馨提示" content='未预约，请先前往预约' @confirm="isShowReserveMsg = false"></up-modal>
	</view>
</template>
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
  position: relative;
  width: 100%;
  height: 480rpx;
}


// 定义滚动动画
@keyframes scroll-animation {

0% {
  left: 100vw; /* 从视口右侧开始 */
}
100% {
  left: -100vw; /* 滚动到视口左侧之外 */
}
}

// 温馨提示盒子公共部分，添加动画效果
.remind_box1,
.remind_box2,
.remind_box3 {

left: 100vw;
animation: scroll-animation 12s linear infinite;
position: absolute;
border-radius: 30rpx;
background-color: rgba(127, 82, 255, 0.7);
text-align: center;
line-height: 62rpx;
white-space: nowrap; // 防止文本换行
will-change: transform;
}

.remind_box1 {
top: 72rpx;
width: 416rpx;
height: 70rpx;
}

.remind_box2 {
top: 202rpx;
width: 344rpx;
height: 64rpx;
animation-duration: 10s; 
}

.remind_box3 {
top: 334rpx;
width: 472rpx;
height: 70rpx;
animation-duration: 14s; 
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
}

//按扭框图片
.select_box1 image,
.select_box2 image,
.select_box3 image {
  width: 422rpx;
  height: 164rpx;
}

//按钮框字体
.select_box1 text,
.select_box2 text,
.select_box3 text {
  position: absolute;
  line-height: 126rpx;
  font-weight: bold;
  font-size: 36rpx;
  left: 368rpx;
}

.select_box1 text {
  color: rgb(79, 129, 254);

  top: 18rpx;
}

.select_box2 text {
  color: rgb(137, 45, 207);
  top: 22rpx;
}

.select_box3 text {
  color: rgb(217, 0, 221);
  top: 20rpx;
}

::v-deep .u-modal__content.data-v-12b77a26{
  margin-top: 26rpx;
  text-align: center;
}


</style>
