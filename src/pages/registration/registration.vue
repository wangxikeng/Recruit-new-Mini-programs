<template>
  <view class="wholepage" ref="blurpage">
    <!-- 基本信息 -->
    <view class="basic_detail">
      <image
        src="../../static/apply/apply_basic_information@3x.png"
        mode="scaleToFill"
        class="basic_icon"
      />
      <view class="basic_desc">基本信息</view>
    </view>
    <view class="input_all">
      <!-- <input placeholder="姓名" class="input" />
      <input placeholder="学号" class="input" />
      <input placeholder="学院专业" class="input" />
      <input placeholder="手机号" class="input" /> -->
      <view class="input">
        <up-input placeholder="姓名"></up-input>
      </view>
      <view class="input">
        <up-input placeholder="学号"></up-input>
      </view>
      <view class="input">
        <up-input placeholder="学院专业"></up-input>
      </view>
      <view class="input">
        <up-input placeholder="手机号"></up-input>
      </view>
    </view>
    <!-- 考核方向 -->
    <view class="basic_detail direction">
      <image
        src="../../static/apply/apply_direction@3x.png"
        mode="scaleToFill"
        class="basic_icon"
      />
      <view class="basic_desc">考核方向</view>
    </view>
    <view class="upcheckboxgroup direction_box">
      <up-checkbox-group shape="circle" v-model="checkboxValue1" @change="checkboxChange">
        <up-checkbox
          :customStyle="{ marginBottom: '8px', marginRight: '25px' }"
          v-for="(item, index) in checkboxList1"
          :key="index"
          :label="item.name"
          :name="item.name"
          activeColor="#7F52FF"
        >
        </up-checkbox>
      </up-checkbox-group>
    </view>

    <!-- 其他信息 -->
    <view class="basic_detail otherdetail">
      <image src="../../static/apply/apply_massage@3x.png" mode="scaleToFill" class="basic_icon" />
      <view class="basic_desc">其他信息</view>
    </view>
    <view class="career_plan">你的职业规划是</view>
    <view class="upcheckboxgroup">
      <up-checkbox-group shape="circle" v-model="checkboxValue1" @change="checkboxChange">
        <up-checkbox
          :customStyle="{ marginBottom: '8px', marginRight: '25px' }"
          v-for="(item, index) in checkboxList2"
          :key="index"
          :label="item.name"
          :name="item.name"
          activeColor="#7F52FF"
        >
        </up-checkbox>
      </up-checkbox-group>
    </view>

    <!-- 自我介绍 -->
    <view class="career_plan">自我介绍</view>
    <view class="text">
      <up-textarea
        v-model="workvalue"
        placeholder="可以介绍你的性格、所任职务及你对于所选发现的储备、已获得的成果噢~"
        maxlength="200"
        count
      ></up-textarea>
    </view>

    <!-- 上传作品或简历 -->
    <view class="career_plan works">上传作品或简历（可选）</view>
    <view>
      <view class="filechoose">
        <view class="filechoose_btn" v-if="file_btn">
          <up-button type="primary" text="选择文件" size="small"></up-button>
        </view>
        <view class="file-desc" v-if="false">未选择文件</view>
        <view class="file-desc" v-else>
          <view class="file-name">try.html</view>
          <up-icon name="close" v-if="file_btn"></up-icon>
        </view>
      </view>
      <view class="filebutton" v-if="file_btn">
        <view class="save_btn" @click="save_suc">
          <up-button type="primary" text="保存"></up-button>
        </view>
        <view class="submit_btn" @click="submit_suc">
          <up-button type="primary" text="提交"></up-button>
        </view>
        <view class="footer_1"></view>
      </view>
    </view>

    <view class="submit_pop" v-if="submit_pop">
      <up-icon name="checkmark-circle-fill" size="100px" color="#9773FFE5"></up-icon>
      <view class="submit_desc">保存成功</view>
    </view>
    <view class="submit_pop" v-if="submit_pop_1">
      <up-icon name="checkmark-circle-fill" size="100px" color="#9773FFE5"></up-icon>
      <view class="submit_desc">提交成功</view>
    </view>
    <view class="change_part" v-if="change_part" @click="changedet">
      <view class="change_detail">信息错误？点击重新提交</view>
      <view class="footer_2"></view>
    </view>

    <view class="save_pop" v-if="save_pop">
      <view class="save_pop">
        <view class="save_decs">是否确认重新填写信息</view>
        <view class="pop_btn">
          <view class="sure_btn" @click="sure_btn">
            <up-button type="primary" text="确认" size="small"></up-button>
          </view>
          <view class="cancel_btn" @click="cancel_btn">
            <up-button type="primary" text="取消" size="small"></up-button>
          </view>
        </view>
      </view>
    </view>
  </view>
  <view class="blur_page" v-if="submit_pop || submit_pop_1"></view>
  <view class="blur_page_1" v-if="save_pop"></view>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
//复选框
const checkboxValue1 = reactive([])
const checkboxValue2 = reactive([])
// 基本案列数据
const checkboxList1 = reactive([
  {
    name: '前端',
    disabled: false
  },
  {
    name: '后台',
    disabled: false
  },
  {
    name: '安卓',
    disabled: false
  },
  {
    name: 'UI',
    disabled: false
  },
  {
    name: '深度学习',
    disabled: false
  }
])
const checkboxList2 = reactive([
  {
    name: '就业',
    disabled: false
  },
  {
    name: '考研',
    disabled: false
  },
  {
    name: '保研',
    disabled: false
  },
  {
    name: '考公',
    disabled: false
  },
  {
    name: '其他',
    disabled: false
  }
])
const checkboxChange = (n: Number) => {
  console.log('change', n)
}

//自我介绍
const workvalue = ref('')

//保存弹窗
const blurpage = ref()
const submit_pop = ref(false)
const file_btn = ref(true)
const change_part = ref(false)
const savesuccess = () => {
  submit_pop.value = true
  setTimeout(function () {
    submit_pop.value = false
    // file_btn.value = false
    // change_part.value = true
  }, 2000)
}
const save_suc = () => {
  savesuccess()
}

//确认弹窗
const submit_pop_1 = ref(false)
const submitsuccess = () => {
  submit_pop_1.value = true
  setTimeout(function () {
    submit_pop_1.value = false
    file_btn.value = false
    change_part.value = true
  }, 2000)
}
const submit_suc = () => {
  submitsuccess()
}

//修改弹窗
const save_pop = ref(false)
const changedet = () => {
  save_pop.value = true
}
const sure_btn = () => {
  save_pop.value = false
  submitsuccess()
}
const cancel_btn = () => {
  save_pop.value = false
}
</script>

<style lang="scss" scoped>
//设置整页颜色
.wholepage {
  background-color: #f8f7ff;
  position: relative;
}

//基本信息
.basic_detail {
  display: flex;
}
.basic_icon {
  width: 24px;
  height: 24px;
  margin-left: 144px;
  margin-top: 30px;
}
.basic_desc {
  margin-left: 12px;
  margin-top: 32px;
  width: 72px;
  height: 22px;
  font-weight: bold;
}
.input_all {
  // margin: auto;
  margin-left: 54px;
  margin-top: 24px;
  width: 268px;
  height: 244px;
}
.input {
  box-shadow: 0 0 4px #b2cafccf;
  width: 268px;
  margin-bottom: 16px;
  border-radius: 8px;
}
.last_input {
  margin-bottom: 24px;
}
.input::placeholder {
  margin-top: 13.5px !important;
  margin-left: 20px;
  height: 17px;
  width: 28px;
}

//考核方向
.direction {
  margin-bottom: 24px;
}
.upcheckboxgroup {
  height: 54px;
  width: 246px;
  margin: auto;
  // background: linear-gradient(to bottom, #4f81fe, #c971e7db);
}
::v-deep .u-checkbox-group {
  display: flex;
  gap: 3px;
}
::v-deep .direction_box .u-checkbox:last-child {
  margin-left: 13px;
}
::v-deep .u-checkbox-row {
  // width: 28px;
  height: 17px;
}
::v-deep .u-checkbox__icon-wrap--circle {
  width: 14px;
  height: 14px;
}

//其他信息
.otherdetail {
  margin-top: 24px;
}
.career_plan {
  margin-top: 24px;
  font-size: 14px;
  margin-left: 52px;
  margin-bottom: 16px;
  font-weight: 600;
  width: 98px;
  height: 17px;
}

//自我介绍
::v-deep .u-textarea__field {
  height: 200px !important;
  width: 80% !important;
  font-size: 12px;
  padding: 8px;
  letter-spacing: 2px;
}
::v-deep .u-textarea--radius.data-v-31706dd7 {
  border-radius: 10px;
  font-size: 14px;
}
::v-deep .u-textarea__field.data-v-31706dd7 {
  font-size: 14px;
  letter-spacing: 2px;
  word-spacing: 2px;
  line-height: 1.5;
}
.text {
  width: 291px;
  height: 106px;
  margin: auto;
  font-size: 12px;
}

//上传作品或简历
.works {
  width: 154px;
  height: 17px;
  margin-top: 154px;
}
.filechoose {
  display: flex;
  gap: 12px;
  margin-left: 52px;
  align-items: center;
}
.filechoose_btn {
  width: 72px;
  height: 24px;
  margin-top: 16px;
}
::v-deep .filechoose_btn .u-button--square.data-v-461e713c {
  width: 72px;
  height: 24px;
  border-radius: 8px;
}
::v-deep .u-square {
  width: 72px !important;
  height: 24px;
}
.file-desc {
  font-size: 12px;
  margin-top: 16px;
  display: flex;
  gap: 12px;
  align-items: center;
}
.filebutton {
  margin-top: 64px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.file-name {
  font-size: 14px;
  font-weight: 500;
  color: #7f52ff;
}
.save_btn {
  margin-left: 35px;
  margin-bottom: 64px;
}
.submit_btn {
  margin-right: 35px;
  margin-bottom: 64px;
}
::v-deep .save_btn .u-button {
  width: 144px;
  height: 35px;
  border-radius: 24px;
  background-color: #fff;
  color: #7f52ff;
}
::v-deep .submit_btn .u-button {
  width: 144px;
  height: 35px;
  border-radius: 24px;
}
//保存弹窗
.submit_pop {
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 20.4px 0px #00000040;
  position: fixed;
  top: 154px;
  left: 64px;
  background-color: #ffffff;
  z-index: 999;
}
.submit_desc {
  font-size: 16px;
  font-weight: 500;
}

//修改信息
.change_detail {
  color: #7f52ff;
  font-size: 12px;
  font-weight: 500;
  margin-left: 235px;
  margin-top: 24px;
}

//确认弹窗
.save_pop {
  width: 320px;
  height: 179px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 10px;
  box-shadow: 0px 4px 20.4px 0px #00000040;
  position: fixed;
  top: 154px;
  left: 36px;
  background-color: #ffffff;
  z-index: 999;
}
.pop_btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
}
.save_decs {
  font-size: 14px;
  font-weight: 400;
  margin-top: 24px;
  // margin: auto;
  padding-bottom: 24px;
  color: #1a1a1a;
}
::v-deep .cancel_btn .u-button {
  background-color: #ffffff;
  color: #7f52ff;
}

::v-deep .pop_btn .u-button--square.data-v-461e713c {
  border-radius: 8px;
  height: 32px;
  width: 72.52px;
}

//底下留白
.footer_1 {
  height: 64px;
  width: 100%;
}
.footer_2 {
  height: 48px;
  width: 100%;
}

.blur_page {
  width: 100%;
  height: 179vh;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.3;
  position: absolute;
  top: 0%;
}
.blur_page_1 {
  width: 100%;
  height: 166vh;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0.3;
  position: absolute;
  top: 0%;
}
</style>
