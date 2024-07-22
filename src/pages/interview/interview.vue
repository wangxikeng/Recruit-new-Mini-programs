<script setup lang="ts">
   import { ref, reactive } from "vue";
   const toSignin=()=>{
      // console.log(111);
      wx.navigateTo({
         url:'/pages/interview/components/interview_signin'
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
       <!-- 下面按钮选择部分-->
        <view class="select">
           <view class="select_boxes">
            <view class="select_box1">
               <image src="../../static/interview/interview_interview appointment_icon.png" mode="scaleToFill"/>
               <text>面试预约</text>
            </view>
            <view class="select_box2" @click="toSignin">
               <image src="../../static/interview/interview_sign-in_icon.png" mode="scaleToFill"  />
               <text  >面试签到</text>
            </view>
            <view class="select_box3">
               <image src="../../static/interview/interview_interview progress_icon.png" mode="scaleToFill"/>
               <text>进度查看</text>
               
            </view>
         </view>
        </view>
 </view> 
  </template>
 
<style lang="scss" scoped>
      // 大盒子
     .whole_interview_box{
        width: 393px;
        height: 694px;
       
        background-color: rgba(248, 247, 255, 1);
     }

     //温馨提示
     .remind{
      width: 100%;
      height: 240px;
      // background-color: pink;
     }

   //   温馨提示盒子公共部分
     .remind_box1,.remind_box2,.remind_box3{
      position: absolute;
      border-radius: 15px;
      background-color: rgba(127, 82, 255, 0.7);
         text-align: center;
      line-height: 31px;
     }

     .remind_box1{
      top: 36px;
      left: 109px;
         width: 208px;
         height: 35px;
        

     }

     
     .remind_box2{
      top: 101px;
      left: 49px;
         width: 128px;
         height: 32px;
        
     }

     
     .remind_box3{
     
      top: 167px;
      left: 127px;
         width: 236px;
         height: 35px;
        
     }


     //温馨提示文字
     .remind text{
         font-size: 12px;
         color: white;
     }


   //   选择框
      .select{
         position: relative;
         width: 393px;
         height: 454px;
         margin-top: -8px;
         border-radius: 34px 34px 0 0;
         background: linear-gradient(to bottom, rgb(215, 185, 245,.5), rgb(229, 196, 230,.1));
         text-align: center;
         overflow: hidden;
      }

      // 选择框盒子公共部分
      .select_box1,.select_box2,.select_box3{
        position: relative;
        margin-bottom: 23px;
      }

      .select_boxes{
        margin-top: 62px;
        margin-left: -3px;
      }

      

      //按扭框图片
      .select_box1 image,
      .select_box2 image,
      .select_box3 image{
         width: 211px;
         height: 82px;
         
      }

      //按钮框字体
      .select_box1 text,
      .select_box2 text,
      .select_box3 text{
         position: absolute;
         line-height: 63px;
         font-weight: bold;
         font-size: 18px;
         left: 184px;
      }


      .select_box1 text{
         color:rgb(79,129,254) ;
        
         top: 9px;
      }

      .select_box2 text{
         color:rgb(137,45,207) ;
         top: 11px;
      }
     
     .select_box3 text{
      color: rgb(217,0,221);
      top: 10px;
     }
</style>
  