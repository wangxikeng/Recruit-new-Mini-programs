<script setup lang="ts">
import { getAnnouncement } from '@/api/announcement'
import { useAnnouncementStore } from '@/stores/modules/Announcement'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { getDetail } from '@/api/resgistration'
import { useUserDetailStore } from '@/stores/modules/registration'
const userDetailStore = useUserDetailStore()
const store = useAnnouncementStore()
// 解构数据 方法
const { newAnnouncement } = storeToRefs(store)
const setAnnouncement = store

onLoad(async () => {
  const res = await getAnnouncement()
  //截取公告前几位字显示
  announcementContent.value = `${res.data.content.replace(/\s*/g, '').substring(0, 15)}...`
  //
  const response = await getDetail()
  userDetailStore.directionNum = []
  if (response.data.headend) userDetailStore.directionNum.push(0)
  if (response.data.backend) userDetailStore.directionNum.push(1)
  if (response.data.android) userDetailStore.directionNum.push(2)
  if (response.data.uidesign) userDetailStore.directionNum.push(3)
  if (response.data.deeplearn) userDetailStore.directionNum.push(4)
  uni.setStorageSync('directionNum', userDetailStore.directionNum)
})

// 发请求
const showAnnouncement = async () => {
  const res = await getAnnouncement()
  show.value = true
  // 将公告内容存入弹框
  // setAnnouncement(res.data.content)
  newAnnouncement.value = res.data.content
}

//公告弹框数据
const announcementContent = ref('')
const show = ref(false)

// 五个方向数据
const list = reactive([
  { name: 'UI' },
  { name: '前端' },
  { name: '后台' },
  { name: '安卓' },
  { name: '深度学习' },
  { name: '硬件' }
])

// 工作室介绍内容
const homeStudioContent = ref<string>(
  '睡觉哦的承诺觉哦v呢hi哦五年的女成为哦成为出动十万才能深刻出你的论文从v那我的那位v我能看到v那我'
)

// 方向介绍
let index = ref(0)
const directionContentArr = ref<string[]>([
  '工作室的UI组包含UI设计和产品经理两个工作内容...（省略详细内容）',
  '前端是产品的门面担当，也是离用户最近的一部分...（省略详细内容）',
  '后端开发即“服务器端”开发，是创建完整可运行的Web应用服务端程序的过程...（省略详细内容）',
  'Android开发组，是数智工作室开发安卓App的核心研发团队...（省略详细内容）',
  '回顾过去，人工智能已经以各种方式深入到我们的生活中...（省略详细内容）'
])

const changeContent = (index: number) => {
  if (index === 0) {
    directionContentArr.value[0] = '工作室的UI组包含UI设计和产品经理两个工作内容...（省略详细内容）'
  } else {
    directionContentArr.value[0] = directionContentArr.value[index]
  }
}
</script>
<template>
  <view class="home">
    <!-- 背景图 -->
    <view class="home_title">
      <image src="../../static/layoutHome/background.png" alt=""></image>
    </view>
    <!-- 公告 -->
    <view class="home_announcement">
      <image src="../../static/layoutHome/announcement.png" />
      <!-- 公告图内：公告 分割线 内容 查看> -->
      <view class="home_announcement_details">
        <text>公告</text>
        <text class="home_announcement_line"></text>
        <text class="home_announcement_content">{{ announcementContent }}</text>
        <text class="home_announcement_view" @click="showAnnouncement">查看 ></text>
      </view>
    </view>
    <!-- 公告弹框 -->
    <up-popup :show="show" mode="center">
      <view class="announcement-detail-box">
        <text>公告</text>
        <view class="announcement-detail">
          {{ newAnnouncement }}
        </view>
      </view>
      <up-button @click="show = false" text="确认"></up-button>
    </up-popup>
    <!-- 工作室介绍和方向介绍-大盒子 -->
    <view class="home_content">
      <!-- 工作室介绍 -->
      <view class="home_studio">
        <!-- 图标 -->
        <view class="home_studio_title">
          <image src="../../static/layoutHome/studio_introduction.png" alt=""></image>
          <text class="home_studio_introduce">工作室介绍</text>
        </view>

        <!-- 内容 -->
        <view class="home_studio_content_box">
          {{ homeStudioContent }}
        </view>
      </view>
      <!-- 方向介绍 -->
      <view class="home_direction">
        <view class="direction-box">
          <!-- 图标 -->
          <image src="../../static/layoutHome/direction_introduce.png" alt=""></image>
          <text class="home_direction_introduce">方向介绍</text>
        </view>
        <!-- 五个方向tag标签 -->
        <view class="direction_tags">
          <up-subsection
            activeColor="#7f52ff"
            :list="list"
            mode="subsection"
            :current="0"
            @change="changeContent"
          ></up-subsection>
        </view>
        <!-- 方向介绍文本框 -->
        <view class="direction_details">
          {{ directionContentArr[index] }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.home {
  width: 100%;
}

// 背景图
.home_title image {
  width: 100%;
  height: 368rpx;
}

// 公告弹框
.announcement-detail-box {
  padding: 42rpx 60rpx;
  // text-align: center;
  font-size: 28rpx;
  color: rgba(26, 26, 26, 1);
  margin-bottom: 85rpx;
}

.announcement-detail-box text {
  display: block;
  transform: translate(214rpx, -3rpx);
}

.announcement-detail {
  transform: translate(14rpx, 18rpx);
  line-height: 47rpx;
  white-space: pre-wrap;
}

::v-deep .u-button.data-v-461e713c {
  width: 440rpx !important;
  border-radius: 100rpx !important;
  background-color: rgba(127, 82, 255, 1) !important;
}

::v-deep .u-button.data-v-461e713c {
  height: 70rpx !important;
}

::v-deep .u-button__text.data-v-461e713c {
  color: #fff;
}

//整个弹框宽度
::v-deep .u-popup__content.data-v-74921bef {
  width: 600rpx;
  border-radius: 20rpx;
}

::v-deep .u-safe-area-inset-bottom {
  padding-bottom: 76rpx !important;
}
//公告
.home_announcement image {
  //gap opacity有啥用？
  position: absolute;
  width: 706rpx;
  height: 112rpx;
  top: 318rpx;
  left: 24rpx;
  // gap: 0px;
  border-radius: 16rpx 0rpx 0rpx 0rpx;
  opacity: 0rpx;
}

//公告图内的内容-大盒子
.home_announcement_details {
  // position: absolute;
  // top: 356rpx;
  // left: -25rpx;
  // width: 320px;
  position: relative;
  width: 100%;
  height: 70rpx;
  // background-color: green;
  text-align: center;
}

//公告具体内容-公告
.home_announcement_details text:first-child {
  margin-left: 16rpx;
  width: 72rpx;
  position: absolute;
  height: 80rpx;
  color: rgb(127, 82, 255);
  font-weight: bold;
  /* display: block; */
  transform: translate(-294rpx, -17rpx);
}

//公告具体内容-分割线
.home_announcement_line {
  margin-left: 24rpx;
  font-weight: bold;
  height: 59rpx;
  transform: translate(-219rpx, -24rpx);
  position: absolute;
  border-right: 4rpx solid rgb(127, 82, 255);
}

// 公告具体内容-通知内容
.home_announcement_content {
  margin-left: 38rpx;
  font-size: 24rpx;
  font-weight: bold;
  position: absolute;
  transform: translate(-210rpx, -12rpx);
}

//公告具体内容-查看
.home_announcement_view {
  position: absolute;
  float: right;
  margin-right: 50rpx;
  font-size: 24rpx;
  margin-top: 8rpx;
  color: rgba(127, 82, 255, 1);
  transform: translate(240rpx, -21rpx);
}

//工作室介绍和方向介绍盒子
.home_content {
  position: absolute;
  padding-bottom: 86rpx;
  top: 366rpx;
  // width: 393px;
  width: 100%;

  border-radius: 32rpx, 32rpx, 0rpx, 0rpx;
  background-color: rgba(248, 247, 255, 1);
  z-index: -1;
}

//
.home_studio {
  width: 100%;
}

//工作室介绍-图标
.home_studio_title image {
  width: 48rpx;
  height: 48rpx;
  margin-left: 68rpx;
  margin-top: 112rpx;
  vertical-align: -12rpx;
}

//工作室介绍-图标后面的字
.home_studio_introduce {
  height: 48rpx;
  font-weight: bold;
  margin-left: 24rpx;
  font-size: 36rpx;
}

//  工作室介绍-介绍内容
.home_studio_content_box {
  padding: 30rpx;
  width: 567rpx;
  min-height: 400rpx;
  height: auto !important;
  margin: 32rpx auto;
  line-height: 48rpx;
  border-radius: 16rpx;
  box-shadow: 0 0 14rpx 0 rgba(189, 207, 243, 0.81);
}

//
.home_direction {
  width: 100%;
}

//方向介绍-图标
.direction-box image {
  width: 48rpx;
  height: 48rpx;
  margin-left: 66rpx;
  margin-top: 38rpx;
  vertical-align: -12rpx;
}

//方向介绍-图标后面的字
.home_direction_introduce {
  height: 48rpx;
  font-weight: bold;
  margin-left: 24rpx;
  font-size: 36rpx;
}

//方向介绍-五个方向tag标签
.direction_tags {
  width: 663rpx;
  display: flex;
  justify-content: space-between;
  margin: -4rpx auto;
  color: black;
  // background-color: rgba(248, 247, 255, 1);
}

// 导航样式改变

::v-deep .u-subsection.data-v-7b2e14a2 {
  width: 102% !important;
}

::v-deep .u-subsection {
  height: 128rpx !important;
}
::v-deep .u-subsection__item {
  border: none !important;
}
::v-deep .u-subsection__bar {
  width: 115rpx !important;
  margin-top: 48rpx;
  margin-left: 0rpx;
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
  font-size: 28rpx !important;
}
::v-deep .u-subsection__item {
  width: 156rpx;
  height: 64rpx;
  margin-top: 48rpx;
}

::v-deep .u-subsection.data-v-7b2e14a2 {
  margin-left: -25rpx;
}

// 修改方向大盒子
::v-deep .u-subsection--button.data-v-7b2e14a2 {
  margin-left: -16rpx;
}

//方向内容文本框
.direction_details {
  padding: 30rpx;
  width: 567rpx;
  min-height: 400rpx;
  height: auto !important;
  margin: 42rpx auto;
  line-height: 48rpx;
  border-radius: 16rpx;
  box-shadow: 0 0 14rpx 0 rgba(189, 207, 243, 0.81);
}
</style>
