<script setup lang="ts">
  import { ref, reactive } from "vue";
  // 方向导航
  const direction_list=reactive([
    {name:'UI'},
    {name:'前端'},
    {name:'后台'},
    {name:'安卓'},
    {name:'深度学习'}
  ])
  let current=ref(1)

  // 签到弹出框确定
  const show=ref(false)
//点击签到按钮弹出确认框
  const signin=()=>{
      show.value=true
  }
  // 点击取消
  const cancleSignin=()=>{
      show.value=false
  }
  // 点击确定
  // const comfirm=()=>{
  //   show.value=false
  // }
</script>

<template>
  <view class="whole_box">
  <!-- 最上面的温馨提示 -->
    <view class="caution">
        <!-- 背景图 -->
         <image class="interview_bg" src="../../../static/interview/interview_background@3x.png" mode="scaleToFill"/>
         <image class="dialog_box" src="../../../static/interview/interview_dialog box@3x.png" mode="scaleToFill"/>
         <!-- <text class="caution_word_notcheck">请提前五分钟到达面试场地等待</text> -->
         <text class="caution_word_checked">祝你面试顺利哦~</text>
    </view>
    <!--剩下部分  -->
    <view class="below">
        <!-- 五个方向选择导航 -->
         <!-- 五个方向tag标签 -->
         <view class="direction-tags">
                <up-subsection :list="direction_list" :current="1" mode="button"  
                inactiveColor="black"  bgColor="rgba(248, 247, 255, 1)" activeColor="#fff"></up-subsection>
        </view>
         <!-- 预约时间确定 -->
        <view class="confirm-box">
          <view class="appointment-time">预约时间</view>
          <view class="parting-line"></view>
          <view class="detail-time">2024年6月4日9：00-9：10</view>
        </view>
        <!-- 按钮 暂未开启签到 签到 已签到 -->
         <!-- <button class="signin-inactive">暂未开启签到</button> -->
         <button class="signin-active" @click="signin">签到</button>
         <!-- <button class="have-signin">已签到 </button> -->
          <!-- 弹窗确定预约时间 -->
          <up-modal :show="show" content='是否确认签到？确认后不可更改' :showCancelButton="true"
          @cancel="cancleSignin" confirmColor="#fff" cancelColor="#7f52ff"
          ></up-modal>
    </view>
  </view>
</template>

<style lang="scss" scoped>

      //背景图
      .interview_bg{
          width: 393px;
          height: 115px;
      }

      // 对话框
      .dialog_box{
        position: absolute;
        top: 34px;
        left: 119px;
          width: 253px;
          height: 53px;
      }

      // 提示信息
      // 未签到时
      .caution_word_notcheck{
        color: white;
        font-size: 12px;
        position: absolute;
        top: 48px;
        left: 167px;
      }

      // 已签到时
      .caution_word_checked{
        color: white;
        font-size: 12px;
        position: absolute;
        top: 48px;
        left: 203px;
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



//修改五个方向的按钮样式
::v-deep .u-subsection__bar.data-v-7b2e14a2{
    width: 56px !important;
    height: 32px !important;
    background-color: rgba(127, 82, 255, 1);
    margin-left: 10px;
    margin-top: -2px;
}

//修改方向按钮圆角度
::v-deep .u-subsection--button__bar.data-v-7b2e14a2 {
    border-radius: 50px !important;
}

// 方向按钮大盒子
::v-deep .u-subsection--button.data-v-7b2e14a2 {
  margin-top: 16px;
  margin-left: -7px;
}


      // 剩下部分大盒子
      .below{
        position: absolute;
        top: 109px;
        width: 393px;
        height: 656px;
        background-color: rgba(248, 247, 255, 1);
        box-shadow: -2px -3px 14.9px 0 rgba(90, 109, 148, 0.2);
        border-radius: 16px 16px 0 0;
        text-align: center;
      }

      ::v-deep .u-tabs__wrapper__scroll-view.data-v-0546c3e4{
        margin-top: 20px;
      }


      ::v-deep .u-tabs__wrapper__nav__item.data-v-0546c3e4{
          // margin-left: 63px;
          border-radius: 50px;
          // background-color: rgba(127, 82, 255, 1);
      }

      // 预约时间确定框
      .confirm-box{
        width: 278px;
        height: 82px;
        border-radius: 16px;
        background-color: rgba(183, 158, 255, 1);
        margin: 30px auto;
        color: white;
        padding: 21px;
      }
        
      // 预约时间分割线
      .parting-line{
        width: 195px;
        height: 1px;
        background-color: white;
        margin: 18px auto;
      }

      //暂未开启签到按钮
      .signin-inactive{
        position: absolute;
        top: 473px;
        left: 52px;
          width: 288px;
          height: 48px;
          background-color: rgba(174, 180, 194, 1);
          color: white;
          font-weight: 600;
          text-align: center;
          border-radius: 16px;
         
      }

      // 签到按钮
      .signin-active{
        position: absolute;
        top: 473px;
        left: 52px;
          width: 288px;
          height: 48px;
          background-color: rgba(127, 82, 255, 1);
          color: white;
          font-weight: 600;
          text-align: center;
          border-radius: 16px;
      }
      



      // 已签到按钮
      .have-signin{
        position: absolute;
        top: 473px;
        left: 52px;
          width: 288px;
          height: 48px;
          background-color: rgba(174, 180, 194, 1);
          color: white;
          font-weight: 600;
          text-align: center;
          border-radius: 16px;
         
      }




      //弹窗
      // 弹窗高度
      ::v-deep .u-popup__content.data-v-74921bef {
        height: 179px;
      }

      // 弹窗内容
      ::v-deep .u-modal__content.data-v-12b77a26{
        padding-top: 48px !important;
      }

      // 弹窗分割线
      ::v-deep .u-line.data-v-bbd9963c{
        border-bottom-style: none !important;
      }

      // 取消确认按钮大盒子
      ::v-deep .u-modal__button-group.data-v-12b77a26{
        position: absolute;
        bottom: 27px;
      }

      // 取消 确定 单个按钮小盒子
      ::v-deep .u-modal__button-group__wrapper.data-v-12b77a26{
          border-radius: 10px !important;
          border: 2px solid rgba(127, 82, 255, 1);
          height: 32px;
          width: 80px;
          margin-left: 59px;
      }

      // 是否确定 字体
      ::v-deep .u-modal__content__text.data-v-12b77a26 {
        color: black;
      }

      // 确定按钮盒子
      ::v-deep .u-modal__button-group__wrapper--confirm.data-v-12b77a26, .u-modal__button-group__wrapper--only-cancel.data-v-12b77a26 {
          background-color: rgba(127, 82, 255, 1);
      }



</style>
  