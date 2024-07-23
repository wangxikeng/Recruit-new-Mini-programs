<script setup lang="ts">
<<<<<<< HEAD
import { logIn } from '@/api/login'
import { useUserStore } from '@/stores/modules/user'
import { onLoad } from '@dcloudio/uni-app'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
//公告弹框数据
const accouncementContent = ref('招新咨询群群号：12345678')
const show = ref(false)
const content = ref('')
const showAccouncement = () => {
  show.value = true
}

// 五个方向数据
const list = reactive([
  { name: 'UI' },
  { name: '前端' },
  { name: '后台' },
  { name: '安卓' },
  { name: '深度学习' }
])
let current = ref(1)

onLoad(async () => {
  const res = await logIn()
  uerInfo.value = res.data
  store.setUserToken(res.data.token)
})
</script>
<template>
  <button @tap="test2">点击获取</button>
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
          的红草地哦五年的催我呢哦非常才能我额的会从撒旦v第v排位赛你擦脸的女和覅偶得更惧怕死亡册为
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
          翻译工具哦无法vu哦呜电视机顶盒浓雾害得我积分CEO我i积分v我的居屋IP飞机外婆欸JFK巫婆二v哦微软的v海内外i今
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
          ></up-subsection>
        </view>
        <!-- 方向介绍文本框 -->
        <view class="direction_details">
          dc不成熟离开农村回复vu送货单v好的v能否落实点击v分配违法还给我i数据发送报警分配你老公俄日价格
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
  position: absolute;
  top: 356rpx;
  left: -25rpx;
  // width: 320px;
  width: 100%;
  height: 70rpx;
  // background-color: green;
  text-align: center;
}

//公告具体内容-公告
.home_announcement_details text:first-child {
  margin-left: 16rpx;
  color: rgba(127, 82, 255, 1);
  font-weight: bold;
}

//公告具体内容-分割线
.home_announcement_line {
  margin-left: 24rpx;
  font-weight: bold;
  height: 112rpx;
  border-right: 4rpx solid rgba(127, 82, 255, 1);
}

// 公告具体内容-通知内容
.home_announcement_content {
  margin-left: 38rpx;
  font-size: 24rpx;
  font-weight: bold;
}

//公告具体内容-查看
.home_announcement_view {
  float: right;
  margin-right: 50rpx;
  font-size: 24rpx;
  margin-top: 8rpx;
  color: rgba(127, 82, 255, 1);
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
  width: 136rpx !important;
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
  font-size: 31rpx !important;
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
