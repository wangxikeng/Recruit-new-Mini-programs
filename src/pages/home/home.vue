
<script setup lang="ts">
    import { ref, reactive } from "vue";
    //公告弹框数据
    const accouncementContent=ref('招新咨询群群号：12345678')
    const show=ref(false)
    const content=ref('')
    const showAccouncement=()=>{
        show.value=true
        content.value=accouncementContent.value
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
    let current=ref(1)
    
</script>

<template>
 
  <view class="home">
      <!-- 背景图 -->
      <view class="home_title">
          <image src="../../static/layouthome/background.png" alt=""></image>
      </view>
      <!-- 公告 -->
       <view class="home_accouncement">
          <image src="../../static/layouthome/announcement.png" />
            <!-- 公告图内：公告 分割线 内容 查看> -->
          <view class="home_accouncement_details">
                  <text>公告</text>
                  <text class="home_accouncement_line"></text>
                  <text class="home_accouncement_content">{{ accouncementContent }}</text>
                  <text class="home_accouncement_view" @click="showAccouncement">查看 ></text>
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
                  <image src="../../static/layouthome/studio_introduction.png" alt=""></image>
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
                <image src="../../static/layouthome/direction_introduce.png" alt=""></image>
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

        </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
//父盒子
// 为了border-radius设置的
// .home{
//   overflow: hidden;
// }

// 背景图
  .home_title image{
    width: 100%;
    height:184px ;
  }


  //公告弹框   取不到
  :v-deep(.u-modal__button-group__wrapper__text.data-v-12b77a26){
     color: black;
  }

  //公告
  .home_accouncement image{
    //gap opacity有啥用？
    position: absolute;
    width: 353px;
    height: 56px;
    top: 159px;
    left: 18px;
    gap: 0px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0px;

  }

  //公告图内的内容-大盒子
  .home_accouncement_details{
    position: absolute;
    top: 178px;
    left: -10px;
    // width: 320px;
    width: 100%;
    height: 35px;
    // background-color: green;
    text-align: center;
  
  }

  //公告具体内容-公告
  .home_accouncement_details text:first-child{
      margin-left: 8px;
      color: rgba(127, 82, 255, 1);
      font-weight: bold;
  }

  //公告具体内容-分割线
  .home_accouncement_line{
    margin-left: 12px;
    font-weight: bold;
    height: 56px;
    border-right: 2px solid rgba(127, 82, 255, 1);

  }

// 公告具体内容-通知内容
  .home_accouncement_content{
    margin-left: 19px;
    font-size: 12px;
    font-weight: bold;
    
  }

  //公告具体内容-查看
  .home_accouncement_view{
    float: right;
    margin-right: 25px;
    font-size: 12px;
    margin-top: 4px;
    color: rgba(127, 82, 255, 1);
  }

  //工作室介绍和方向介绍盒子
  .home_content{
    position: absolute;
    padding-bottom: 43px;
    top: 183px;
    width: 393px;
    // height: 860px;
    // border-radius不生效
    border-radius: 16px, 16px, 0px, 0px;
    background-color: rgba(248, 247, 255, 1);
    z-index: -1
  }



  //工作室介绍-图标
  .home_studio_title image{
    
      width: 24px;
      height: 24px;
      margin-left: 34px;
      margin-top: 56px;
      vertical-align: -6px;
     
   }

   //工作室介绍-图标后面的字
   .home_studio_introduce{
    
      height: 24px;
      font-weight: bold;
      margin-left: 12px;
      font-size: 18px;
   }


  //  工作室介绍-介绍内容
.home_studio_content_box{
    padding: 15px;
    width: 301px;
    min-height: 200px;
    height:auto !important;
    margin: 16px auto;
 
    border-radius: 8px;
    box-shadow: 0 0 7px 0 rgba(189, 207, 243, 0.81);
    // background-color: pink;
}




//方向介绍-图标
.direction-box image{
      width: 24px;
      height: 24px;
      margin-left: 33px;
      margin-top: 19px;
      vertical-align: -6px;
}


//方向介绍-图标后面的字
.home_direction_introduce{
      height: 24px;
      font-weight: bold;
      margin-left: 12px;
      font-size: 18px;
}

//方向介绍-五个方向tag标签
.direction_tags{
  width: 331px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto;
    color: black;
    // background-color: rgba(248, 247, 255, 1);
}


// ::v-deep .u-subsection__item.data-v-7b2e14a2 {
//   background-color: rgba(248, 247, 255, 1);
// }

//修改五个方向的按钮样式
::v-deep .u-subsection__bar.data-v-7b2e14a2{
    width: 56px !important;
    height: 32px !important;
    background-color: rgba(127, 82, 255, 1);
    margin-left: 4px;
}

//修改方向按钮圆角度
::v-deep .u-subsection--button__bar.data-v-7b2e14a2 {
    border-radius: 50px !important;
}

// 修改方向大盒子
::v-deep .u-subsection--button.data-v-7b2e14a2 {
    margin-left: -8px;
}

//方向内容文本框
.direction_details{
  padding: 15px;
  width: 301px;
    min-height: 200px;
    height:auto !important;
    margin: 21px auto;
 
    border-radius: 8px;
    box-shadow: 0 0 7px 0 rgba(189, 207, 243, 0.81);
}


// 公告弹框
::v-deep .u-modal.data-v-12b77a26 {
    
    width: 300px !important;
    height: 260px;
}



// 修改公告弹框分隔线
::v-deep .u-line.data-v-bbd9963c {
  border-bottom-style: none !important;
}

// 修改按钮宽度
::v-deep .u-modal__button-group.data-v-12b77a26{
  width: 200px;
  margin-left: 53px;
    margin-top: 97px;
    margin-bottom: 31px;
    border-radius: 50px;
    background-color: rgba(127, 82, 255, 1);
}

//按钮高度
::v-deep .u-modal__button-group__wrapper.data-v-12b77a26{
  height: 36px;
}



// 修改公告内容居中
::v-deep .u-modal.data-v-12b77a26{
  text-align: center;
}


::v-deep .u-modal__button-group__wrapper__text.data-v-12b77a26 {
  color: white !important;
}
// 
</style>
