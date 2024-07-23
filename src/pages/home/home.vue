<script setup lang="ts">
    import { ref, reactive } from "vue";
    //公告弹框数据
    const announcementContent=ref('招新咨询群群号：12345678')
    const show=ref(false)
    const content=ref('')
    const showAnnouncement=()=>{
        show.value=true
        content.value=announcementContent.value
    }
    const confirm=()=>{
      show.value=false
    }
    // 方向数据
    const list = reactive([  
    { name: 'UI' },  
    { name: '前端'},  
    { name: '后台' },  
    { name: '安卓' },  
    { name: '深度学习' },  
    
]);  
    let current=ref(0)
    
</script>

<template>
  <button @click="test">dianji</button>
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
       <up-modal :show="show" title="公告" :content='content' @confirm="confirm" class="popup"></up-modal>
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
                    <!-- <up-textarea  :customStyle="{height:'200px',fontSize:'14px',lineHeight:'14px'}" v-model="studio_introduction" autoHeight="true" maxlength=-1></up-textarea> -->
                  翻译工具哦无法vu哦呜电视机顶盒浓雾害得我积分CEO我i积分v我的居屋IP飞机外婆欸JFK巫婆二v哦微软的v海内外i今
              </view>
        </view>
        <!-- 方向介绍 -->
        <view class="home_direction">
            <view class="direction-box">
                <!-- 图标 -->
                <image src="../../static/layoutHome/direction_introduce.png" alt=""></image>
                <text class="home_direction_introduce">方向介绍</text>

            </view >
            <!-- 五个方向tag标签 -->
             <view class="direction_tags">
                <up-subsection :list="list" :current="1" mode="button"  
                inactiveColor="black"  bgColor="rgba(248, 247, 255, 1)" activeColor="#fff"></up-subsection>
             </view>
             <!-- 方向介绍文本框 -->
              <view class="direction_details">
                  dc不成熟离开农村回复vu送货单v好的v能否落实点击v分配违法还给我i数据发送报警分配你老公俄日价格
              </view>

        <!-- 内容 -->
        <view class="home_studio_content_box">
          <!-- <up-textarea  :customStyle="{height:'200px',fontSize:'14px',lineHeight:'14px'}" v-model="studio_introduction" autoHeight="true" maxlength=-1></up-textarea> -->
          翻译工具哦无法vu哦呜电视机顶盒浓雾害得我积分CEO我i积分v我的居屋IP飞机外婆欸JFK巫婆二v哦微软的v海内外i今
        </view>
      </view>
      <!-- 方向介绍 -->
      <view class="home_direction">
        <view class="direction-box">
          <!-- 图标 -->
          <image src="../../static/layouthome/direction_introduce.png" alt=""></image>
          <text class="home_direction_introduce">方向介绍</text>
        </view>
        <!-- 五个方向tag标签 -->
        <view class="direction_tags">
          <up-subsection
            :list="list"
            :current="1"
            mode="button"
            inactiveColor="black"
            bgColor="rgba(248, 247, 255, 1)"
            activeColor="#fff"
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
//父盒子
// 为了border-radius设置的
.home{
  // overflow: hidden;
  width: 100%;
}

// 背景图
  .home_title image{
    width: 100%;
    height:368rpx ;
  }

//公告弹框   取不到
:v-deep(.u-modal__button-group__wrapper__text.data-v-12b77a26) {
  color: black;
}


  //公告
  .home_announcement image{
    //gap opacity有啥用？
    position: absolute;
    width: 706rpx;
    height: 112rpx;
    top: 318rpx;
    left: 36rpx;
    // gap: 0px;
    border-radius: 16rpx 0rpx 0rpx 0rpx;
    opacity: 0rpx;

//公告具体内容-公告
.home_accouncement_details text:first-child {
  margin-left: 8px;
  color: rgba(127, 82, 255, 1);
  font-weight: bold;
}

  //公告图内的内容-大盒子
  .home_announcement_details{
    position: absolute;
    top: 356rpx;
    left: -20rpx;
    // width: 320px;
    width: 100%;
    height: 70rpx;
    // background-color: green;
    text-align: center;
  
  }

  //公告具体内容-公告
  .home_announcement_details text:first-child{
      margin-left: 16rpx;
      color: rgba(127, 82, 255, 1);
      font-weight: bold;
  }

  //公告具体内容-分割线
  .home_announcement_line{
    margin-left: 24rpx;
    font-weight: bold;
    height: 112rpx;
    border-right: 4rpx solid rgba(127, 82, 255, 1);

  }

// 公告具体内容-通知内容
  .home_announcement_content{
    margin-left: 38rpx;
    font-size: 24rpx;
    font-weight: bold;
    
  }

  //公告具体内容-查看
  .home_announcement_view{
    float: right;
    margin-right: 50rpx;
    font-size: 24rpx;
    margin-top: 8rpx;
    color: rgba(127, 82, 255, 1);
  }

  //工作室介绍和方向介绍盒子
  .home_content{
    position: absolute;
    padding-bottom: 86rpx;
    top: 366rpx;
    // width: 393px;
    width: 100%;

    border-radius: 32rpx, 32rpx, 0rpx, 0rpx;
    background-color: rgba(248, 247, 255, 1);
    z-index: -1
  }


  //
  .home_studio{
    width: 100%;
}

  //工作室介绍-图标
  .home_studio_title image{
    
      width: 48rpx;
      height: 48rpx;
      margin-left: 68rpx;
      margin-top: 112rpx;
      vertical-align: -12rpx;
     
   }

   //工作室介绍-图标后面的字
   .home_studio_introduce{
    
      height: 48rpx;
      font-weight: bold;
      margin-left: 24rpx;
      font-size: 36rpx;
   }


  //  工作室介绍-介绍内容
.home_studio_content_box{
    padding: 30rpx;
    width: 567rpx;
    min-height: 400rpx;
    height:auto !important;
    margin: 32rpx auto;
 
    border-radius: 16rpx;
    box-shadow: 0 0 14rpx 0 rgba(189, 207, 243, 0.81);
    
}

//公告具体内容-查看
.home_accouncement_view {
  float: right;
  margin-right: 25px;
  font-size: 12px;
  margin-top: 4px;
  color: rgba(127, 82, 255, 1);
}

//
.home_direction{
  width: 100%;
}

//工作室介绍-图标
.home_studio_title image {
  width: 24px;
  height: 24px;
  margin-left: 34px;
  margin-top: 56px;
  vertical-align: -6px;
}

//工作室介绍-图标后面的字
.home_studio_introduce {
  height: 24px;
  font-weight: bold;
  margin-left: 12px;
  font-size: 18px;
}

//  工作室介绍-介绍内容
.home_studio_content_box {
  padding: 15px;
  width: 301px;
  min-height: 200px;
  height: auto !important;
  margin: 16px auto;

  border-radius: 8px;
  box-shadow: 0 0 7px 0 rgba(189, 207, 243, 0.81);
  // background-color: pink;
}

//方向介绍-图标
.direction-box image{
      width: 48rpx;
      height: 48rpx;
      margin-left: 66rpx;
      margin-top: 38rpx;
      vertical-align: -12rpx;
}

//方向介绍-图标后面的字
.home_direction_introduce{
      height: 48rpx;
      font-weight: bold;
      margin-left: 24rpx;
      font-size: 36rpx;
}

//方向介绍-五个方向tag标签
.direction_tags{
  width: 662rpx;
    display: flex;
    justify-content: space-between;
    margin: 40rpx auto;
    color: black;
    // background-color: rgba(248, 247, 255, 1);
}




//修改五个方向的按钮样式
::v-deep .u-subsection__bar.data-v-7b2e14a2{
  width: 140rpx !important;
    height: 64rpx !important;
    background-color: rgb(127, 82, 255);
    margin-left: -4rpx;
    margin-top: -2rpx;
}

//修改方向按钮圆角度
::v-deep .u-subsection--button__bar.data-v-7b2e14a2 {
    border-radius: 100rpx !important;
}

// 修改方向大盒子
::v-deep .u-subsection--button.data-v-7b2e14a2 {
    margin-left: -16rpx;
}

//方向内容文本框
.direction_details{
  padding: 30rpx;
  width: 567rpx;
    min-height: 400rpx;
    height:auto !important;
    margin: 42rpx auto;
 
    border-radius: 16rpx;
    box-shadow: 0 0 14rpx 0 rgba(189, 207, 243, 0.81);
}

  border-radius: 8px;
  box-shadow: 0 0 7px 0 rgba(189, 207, 243, 0.81);
}

// 方向字体
::v-deep .u-subsection__item__text.data-v-7b2e14a2{
  font-size: 30rpx !important;
}

// 公告弹框
::v-deep .u-modal.data-v-12b77a26 {
    
    width: 600rpx !important;
    height: 520rpx;
}

// 修改公告弹框分隔线
::v-deep .u-line.data-v-bbd9963c {
  border-bottom-style: none !important;
}

// 修改按钮宽度
::v-deep .u-modal__button-group.data-v-12b77a26{
  width: 400rpx;
  margin-left: 106rpx;
    margin-top: 194rpx;
    margin-bottom: 62rpx;
    border-radius: 100rpx;
    background-color: rgba(127, 82, 255, 1);
}

//按钮高度
::v-deep .u-modal__button-group__wrapper.data-v-12b77a26{
  height: 80rpx;
}

// 修改公告内容居中
::v-deep .u-modal.data-v-12b77a26 {
  text-align: center;
}

::v-deep .u-modal__button-group__wrapper__text.data-v-12b77a26 {
  color: white !important;
}
</style>
