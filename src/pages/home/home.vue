<script setup lang="ts">
import { getAnnouncement } from '@/api/announcement'
import { useAnnouncementStore } from '@/stores/modules/Announcement'
import { storeToRefs } from 'pinia'
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const store = useAnnouncementStore()
// 解构数据 方法
const { newAnnouncement } = storeToRefs(store)
const setAnnouncement = store

onLoad(async () => {
  const res = await getAnnouncement()
  //截取公告前几位字显示
  announcementContent.value = `${res.data.content.replace(/\s*/g, '').substring(0, 15)}...`
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
  { name: '深度学习' }
])

// 工作室介绍内容
const homeStudioContent = ref<string>(
  '睡觉哦的承诺觉哦v呢hi哦五年的女成为哦成为出动十万才能深刻出你的论文从v那我的那位v我能看到v那我'
)

// enum directionContent{
//   uiContent,
//   frontContent,
//   backendContent,
//   androidContent,
//   deepLearnContent
// }

// 各组方向介绍内容
// const uiContent:string =
//   '工作室的UI组包含UI设计和产品经理两个工作内容。UI即用户界面设计，也称人机界面。最普遍的应用是在软件开发中，指程序的用户操作界面设计。UI在网站界面、软件界面、手机应用界面等多图形用户界面的设计都属于UI设计。学习UI将需要熟练使用figma, PS，AI等设计软件，同时也需要学习动效建模和用户心理学，UI是和用户最直接接触的环节，优秀的UI能最大程度提高用户体验，最大化实现功能的应用。产品经理是工作室对标企业设立的新职位，负责产品规划，分析理解梳理市场的需求和竞争情况，确定产品的需求，制定产品的来发计划和进度控制，验收开发者的产品开发。在工作室中扮演着产品决策者的角色，通俗的说，你是这个学生团队的甲方！欢迎你加入我们，一起创造美的产品！'

// const frontContent:string = '前端是产品的门面担当，也是离用户最近的一部分。前端从PC端到移动端畅游无阻，可以开发出高性能的web、桌面端应用、app和小程序，你可以通过自己编写的代码把自己的酷炫想法变成真实的页面效果呈现。随着node.js的面世，前端也能进行后台开发。热门的TypeScript能极大规避错误和提升效率。互联网技术发展迅猛，Flutter、WebAssembly、Serverless、LowCode等大型前端领域的蓬勃发展都超出了人们的预期，并且让我们看到了更多前端融合趋势。加入我们吧！从现在开始奔跑！'
// const backendContent:string =
//   '后端开发即“服务器端”开发，是创建完整可运行的Web应用服务端程序的过程，是Web应用程序开发的一部分。后端开发者使用Java Golang等语言及其衍生的各种框架、库和解决方案来实现Web应用程序的核心业务逻辑，并向外提供特定的API，使得Web应用能够高效、安全、稳定地运行。数智工作室后台组主要致力于JavaWeb端的API开发，主要负责数据逻辑存储和复杂逻辑的设计。如果你对与数据、信息、服务器打交道感兴趣欢迎加入我们后台组!'

// const androidContent:string =
//   'Android开发组，是数智工作室开发安卓App的核心研发团队，专注于有创意、有特色的App的开发，以及Android技术的研究。Android开发在当下大前端的定义上，也属于大前端，与后台组配合一起编写出手机APP。开发组主要使用原生Android技术来开发软件，以达到软件的最优性能。如果你热爱Android，渴望做出属于你的App，那么数智Android组欢迎你的到来！'

// const deepLearnContent:string =
//   '回顾过去，人工智能已经以各种方式深入到我们的生活中。人脸识别技术使得支付和通行检查变得更加便捷；语音识别技术使我们无需费力地输入文字；翻译技术降低了我们学习外语的门槛。人工智能正不断改变着我们的生活和工作方式。如果你被ChatGPT强大的对话和推理能力所惊艳，被AI绘图展现的无尽想象力所着迷，对那些技术高超的人机在游戏中所展现出的实力感到好奇，那么现在就是加入深度学习组的时候了！ 我们深度学习组是数智工作室的paper制造小组，这里可以同研究生科研团队共同学习进步。我们不仅专注于深度学习相关的学术前沿，还为开发组提供需要的模型协助开发。我们的组员已有本科师兄发表数篇论文、本校直博以及考研上岸复旦等高校。加入我们的深度学习组，从0开始带你构建属于你自己的人工智能模型大厦。让我们一起探索这个充满魅力的领域！'

// const directionContentArr:string[] = [uiContent, frontContent, backendContent, androidContent, deepLearnContent]

// 点击分段器更改方向介绍内容
// const changeContent = (index: number) => {

//   if (index === 0) {
//     directionContent[0].value =
//       '工作室的UI组包含UI设计和产品经理两个工作内容。UI即用户界面设计，也称人机界面。最普遍的应用是在软件开发中，指程序的用户操作界面设计。UI在网站界面、软件界面、手机应用界面等多图形用户界面的设计都属于UI设计。学习UI将需要熟练使用figma, PS，AI等设计软件，同时也需要学习动效建模和用户心理学，UI是和用户最直接接触的环节，优秀的UI能最大程度提高用户体验，最大化实现功能的应用。产品经理是工作室对标企业设立的新职位，负责产品规划，分析理解梳理市场的需求和竞争情况，确定产品的需求，制定产品的来发计划和进度控制，验收开发者的产品开发。在工作室中扮演着产品决策者的角色，通俗的说，你是这个学生团队的甲方！欢迎你加入我们，一起创造美的产品！'
//   } else {
//     directionContent[0].value = directionContent[index].value
//   }
// }

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
      <image
        src="../../static/layoutHome/background.png"
        alt=""
      ></image>
    </view>
    <!-- 公告 -->
    <view class="home_announcement">
      <image src="../../static/layoutHome/announcement.png" />
      <!-- 公告图内：公告 分割线 内容 查看> -->
      <view class="home_announcement_details">
        <text>公告</text>
        <text class="home_announcement_line"></text>
        <text class="home_announcement_content">{{ announcementContent }}</text>
        <text
          class="home_announcement_view"
          @click="showAnnouncement"
        >查看 ></text>
      </view>
    </view>
    <!-- 公告弹框 -->
    <up-popup
      :show="show"
      mode="center"
    >
      <view class="announcement-detail-box">
        <text>公告</text>
        <view class="announcement-detail">
          {{ newAnnouncement }}
        </view>
      </view>
      <up-button
        @click="show = false"
        text="确认"
      ></up-button>
    </up-popup>
    <!-- 工作室介绍和方向介绍-大盒子 -->
    <view class="home_content">
      <!-- 工作室介绍 -->
      <view class="home_studio">
        <!-- 图标 -->
        <view class="home_studio_title">
          <image
            src="../../static/layoutHome/studio_introduction.png"
            alt=""
          ></image>
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
          <image
            src="../../static/layoutHome/direction_introduce.png"
            alt=""
          ></image>
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
          {{ directionContentArr[0] }}
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
