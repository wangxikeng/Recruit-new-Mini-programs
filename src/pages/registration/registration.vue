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
      <view class="input">
        <up-input placeholder="姓名" v-model="userDetailStore.user.userName"></up-input>
      </view>
      <view class="input">
        <up-input placeholder="学号" v-model="userDetailStore.user.account"></up-input>
      </view>
      <view class="input">
        <up-input placeholder="学院专业" v-model="userDetailStore.user.major"></up-input>
      </view>
      <view class="input">
        <up-input placeholder="手机号" v-model="userDetailStore.user.phone"></up-input>
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
      <up-checkbox-group shape="circle" v-model="checkboxValue1" @change="checkboxChange1">
        <up-checkbox
          :customStyle="{ marginBottom: '8px', marginRight: '25px' }"
          v-for="(item, index) in checkboxList1"
          :key="index"
          :label="item.name"
          :name="item.name"
          activeColor="#7F52FF"
          @change="checkChange(item.keyName)"
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
      <up-checkbox-group shape="circle" v-model="checkboxValue2" @change="checkboxChange2">
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
        v-model="userDetailStore.user.introduction"
        placeholder="可以介绍你的性格、所任职务及你对于所选发现的储备、已获得的成果噢~(10~200字)"
        maxlength="200"
        count
      ></up-textarea>
    </view>

    <!-- v-if="false" -->
    <!-- v-if="file_btn&&isShowFile==false" -->
    <!-- 上传作品或简历 -->
    <view class="career_plan works">上传作品或简历（可选）</view>
    <view>
      <view class="filechoose">
        <view class="filechoose_btn" v-if="file_btn">
          <up-button type="primary" text="选择文件" size="small" @click="Upload"></up-button>
        </view>

        <view :class="change_part ? classArray[1] : classArray[0]" v-if="isShowFile == false"
          >未选择文件</view
        >
        <view class="file-desc" v-else>
          <view :class="file_btn ? classArr[0] : classArr[1]" v-if="isShowFile"
            >{{ uploadFileName }}
            <up-icon name="close" @click="DeleteFile" customStyle="margin-left:5rpx"></up-icon>
          </view>
        </view>
      </view>
      <up-overlay
        :show="show"
        @click="show = false"
        duration="0"
        :opacity="0.2"
        :z-index="999"
      ></up-overlay>
      <view class="filebutton" v-if="saveSubmit_btn">
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
    <!-- <view
    class="change_part"
    v-if="change_part"
    @click="changedet"
  >
    <view class="change_detail">预约后不可修改报名信息~</view>
    <view class="footer_2"></view>
  </view> -->

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
    <template>
      <up-popup
        :show="userDetailStore.showError"
        :round="10"
        mode="center"
        :customStyle="{ width: '542rpx', height: '380rpx' }"
      >
        <view class="errorContainer">
          <view
            v-for="(error, index) in userDetailStore.errorRemindArr"
            :key="index"
            class="errorDetail"
          >
            <text>{{ error }}</text>
          </view>
        </view>
        <up-button
          text="关闭"
          type="primary"
          :customStyle="{ marginTop: '126rpx', width: '214rpx', borderRadius: '24rpx' }"
          @click="closeErrorBox"
        ></up-button>
      </up-popup>
    </template>
  </view>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { saveDetail, getDetail, fileUpload, fileGet, fileDelete } from '@/api/resgistration'
import type { IRequest } from '@/types/userdetail'
import { useUserDetailStore } from '@/stores/modules/registration'
import { useDirectionStore } from '@/stores/modules/reservation'
const userDetailStore = useUserDetailStore()
const userDirectionStore = useDirectionStore()

const show = ref(false)
//复选框
const nameToIndexMap = new Map()
const checkboxValue1: any = reactive([])
const checkboxValue2: any = reactive([])
// 基本案列数据
enum KeyNameType {
  HEADEND = 'headend',
  BACKEND = 'backend',
  ANDROID = 'android',
  UIDESIGN = 'uidesign',
  DEEPLEAEN = 'deeplearn',
  HARDWARE = 'hardware'
}
const checkboxList1 = reactive([
  {
    name: '前端',
    keyName: KeyNameType.HEADEND,
    disabled: false,
    checked: false
  },
  {
    name: '后台',
    keyName: KeyNameType.BACKEND,
    checked: false,
    disabled: false
  },
  {
    name: '安卓',
    keyName: KeyNameType.ANDROID,
    disabled: false,
    checked: false
  },
  {
    name: 'UI',
    keyName: KeyNameType.UIDESIGN,
    checked: false,
    disabled: false
  },
  {
    name: '深度学习',
    keyName: KeyNameType.DEEPLEAEN,
    disabled: false,
    checked: false
  },
  {
    name: '硬件',
    keyName: KeyNameType.HARDWARE,
    disabled: false,
    checked: false
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

const plan = ref<string>('')
const checkboxChange1 = (n: any) => {
  const selectedIndices = n.map((name: any) => nameToIndexMap.get(name))
  userDetailStore.directionNum = selectedIndices
  console.log(userDetailStore.directionNum)
}
const checkboxChange2 = (n: any) => {
  userDetailStore.user.plan = n.join('-')
}

const checkChange = (keyName: KeyNameType) => {
  //找到对应keyName的index
  const index = checkboxList1.findIndex((item) => item.keyName === keyName)
  checkboxList1[index].checked = !checkboxList1[index].checked
  userDetailStore.user[keyName] = checkboxList1[index].checked
}

//自我介绍
const workvalue = ref('')

//保存弹窗
const blurpage = ref()
const submit_pop = ref(false)
const file_btn = ref(true)
const saveSubmit_btn = ref(true)
const change_part = ref(false)
const savesuccess = () => {
  submit_pop.value = true
  show.value = true
  setTimeout(function () {
    submit_pop.value = false
    show.value = false
  }, 2000)
}
const save_suc = async () => {
  savesuccess()
  // 保存的时候committed不是false吗
  userDetailStore.setUerDetailInfo()
}

//确认弹窗
const submit_pop_1 = ref(false)
const submitsuccess = async () => {
  // 确认之前先进行校验  新加的
  console.log(userDetailStore.directionNum)
  const isValid = userDetailStore.validate()
  if (!isValid) {
    return
  }
  await userDetailStore.setUerDetailInfo()
  if (userDetailStore.showError === false) {
    submit_pop_1.value = true
    show.value = true
    setTimeout(function () {
      submit_pop_1.value = false
      if (isShowFile.value == true) {
        file_btn.value = false
      } else {
        file_btn.value = true
      }
      saveSubmit_btn.value = false
      change_part.value = true
      show.value = false
    }, 2000)
    // userDetailStore.setUerDetailInfo()
  }
}

const submit_suc = () => {
  submitsuccess()
}
const closeErrorBox = () => {
  userDetailStore.showError = false
}

//修改弹窗
const save_pop = ref(false)
const changedet = () => {
  show.value = true
  save_pop.value = true
}
const sure_btn = () => {
  save_pop.value = false
  submitsuccess()
  console.log(userDirectionStore.alreadyChooseTime)
}
const cancel_btn = () => {
  save_pop.value = false
  show.value = false
}
onLoad(async () => {
  checkboxList1.forEach((item, index) => {
    nameToIndexMap.set(item.name, index)
  })
  const res = await getDetail()
  if (res.hasOwnProperty('data')) {
    userDetailStore.user = res.data

    checkboxList1[0].checked = userDetailStore.user.headend
    checkboxList1[1].checked = userDetailStore.user.backend
    checkboxList1[2].checked = userDetailStore.user.android
    checkboxList1[3].checked = userDetailStore.user.uidesign
    checkboxList1[4].checked = userDetailStore.user.deeplearn
    checkboxList1[5].checked = userDetailStore.user.hardware

    // 方向数组
    checkboxValue1.length = 0
    if (res.data.android) checkboxValue1.push('安卓')
    if (res.data.backend) checkboxValue1.push('后台')
    if (res.data.deeplearn) checkboxValue1.push('深度学习')
    if (res.data.headend) checkboxValue1.push('前端')
    if (res.data.uidesign) checkboxValue1.push('UI')
    if (res.data.hardware) checkboxValue1.push('硬件')

    // 规划数组
    checkboxValue2.length = 0
    res.data.plan.split('-').forEach(function (item: string) {
      checkboxValue2.push(item)
      console.log(checkboxValue2)
    })
    // file_btn.value = false
    if (isShowFile.value == true) {
      file_btn.value = false
    } else {
      file_btn.value = true
    }
    saveSubmit_btn.value = false
    change_part.value = true
  }
})

//文件部分
import { uploadMyFile } from '@/api/uploadFile'
import { deleteMyFile } from '@/api/deleteFile'
import { showMyFile } from '@/api/showFiles'
import { onLoad } from '@dcloudio/uni-app'
import { getTargets } from '@/api/reservation'

// 是否显示文件名
const isShowFile = ref(false)
// 上传文件名字
const uploadFileName = ref('')

const Upload = () => {
  wx.chooseMessageFile({
    type: 'all',
    count: 1,
    success: async function (res) {
      // 保存上传文件名

      uploadFileName.value = res.tempFiles[0].name

      // 发送上传文件请求
      const response: any = await uploadMyFile(res.tempFiles[0].path, uploadFileName.value)
      const res_format = JSON.parse(response)

      //根据响应码提示用户
      if (res_format.code == 200) {
        uni.showToast({
          title: '上传成功',
          icon: 'success'
        })
        file_btn.value = false
        // 显示文件名
        isShowFile.value = true
      } else if (res_format.code == 402) {
        uni.showToast({
          title: '已上传过该文件',
          icon: 'error'
        })
      } else {
        uni.showToast({
          title: '上传失败',
          icon: 'error'
        })
        isShowFile.value = false
      }
    }
  })
}
// 动态显示文件名的位置
const classArr = ['file-name', 'file-name-inactive']
// 动态显示“未选择文件”的位置
const classArray = ['file-desc', 'file-desc-change']
//删除文件
const DeleteFile = async () => {
  // 发送删除文件请求
  const res: any = await deleteMyFile(uploadFileName.value)
  // 根据响应码判断是否删除成功
  if (res.code == 200) {
    uni.showToast({
      title: '删除成功',
      icon: 'success'
    })
    uploadFileName.value = ''
    isShowFile.value = false
    file_btn.value = true
  }
}

// 获取文件显示
onLoad(async () => {
  const res = await showMyFile()
  if (res.data.length > 0) {
    uploadFileName.value = res.data[res.data.length - 1].fileName
    isShowFile.value = true
  } else {
    isShowFile.value = false
  }
})
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
  width: 48rpx;
  height: 48rpx;
  margin-left: 288rpx;
  margin-top: 55rpx;
}
.basic_desc {
  margin-left: 16rpx;
  margin-top: 64rpx;
  width: 144rpx;
  height: 44rpx;
  font-weight: bold;
}
.input_all {
  // margin: auto;
  margin-left: 108rpx;
  margin-top: 48rpx;
  width: 536rpx;
  height: 428rpx;
}
.input {
  box-shadow: 0 0 4px #b2cafccf;
  width: 536rpx;
  margin-bottom: 32rpx;
  border-radius: 16rpx;
}
.last_input {
  margin-bottom: 24rpx;
}
.input::placeholder {
  margin-top: 27rpx !important;
  margin-left: 40rpx;
  height: 34rpx;
  width: 46rpx;
}

//考核方向
.direction {
  margin-bottom: 48rpx;
}
.upcheckboxgroup {
  height: 108rpx;
  width: 536rpx;
  margin-left: 140rpx;
  // background: linear-gradient(to bottom, #4f81fe, #c971e7db);
}
::v-deep .u-checkbox-group {
  display: flex;
  gap: 6rpx;
}
::v-deep .direction_box .u-checkbox:last-child {
  margin-left: 28rpx;
}
::v-deep .u-checkbox-row {
  // width: 28px;
  height: 34rpx;
}
::v-deep .u-checkbox__icon-wrap--circle {
  width: 28rpx;
  height: 28rpx;
}

//其他信息
.otherdetail {
  margin-top: 48rpx;
}
.career_plan {
  margin-top: 48rpx;
  font-size: 28rpx;
  margin-left: 104rpx;
  margin-bottom: 32rpx;
  font-weight: 600;
  // width: 96rpx;
  height: 34rpx;
}

//自我介绍
::v-deep .u-textarea__field {
  height: 400rpx !important;
  width: 80% !important;
  font-size: 24rpx;
  padding: 16rpx;
  letter-spacing: 4rpx;
}
::v-deep .u-textarea--radius.data-v-31706dd7 {
  border-radius: 20rpx;
  font-size: 28rpx;
}
::v-deep .u-textarea__field.data-v-31706dd7 {
  font-size: 28rpx;
  letter-spacing: 4rpx;
  word-spacing: 4rpx;
  line-height: 1.5;
}
.text {
  width: 582rpx;
  height: 212rpx;
  margin: auto;
  font-size: 24rpx;
}

//上传作品或简历
.works {
  width: 308rpx;
  height: 34rpx;
  margin-top: 308rpx;
}
.filechoose {
  display: flex;
  gap: 24rpx;
  margin-left: 104rpx;
  align-items: center;
}
.filechoose_btn {
  width: 144rpx;
  height: 48rpx;
  margin-top: -10rpx;
}
::v-deep .filechoose_btn .u-button--square.data-v-461e713c {
  width: 144rpx;
  height: 48rpx;
  border-radius: 16rpx;
}
::v-deep .u-square {
  width: 144rpx !important;
  height: 48rpx;
}
.file-desc {
  font-size: 24rpx;
  margin-top: 32rpx;
  display: flex;
  gap: 24rpx;
  transform: translate(-164rpx, 66rpx);
}

.file-desc-change {
  font-size: 24rpx;
  margin-top: 32rpx;
  display: flex;
  gap: 24rpx;
  transform: translate(-164rpx, 48rpx);
}

.filebutton {
  margin-top: 128rpx;
  display: flex;
  gap: 40rpx;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  margin-left: 48rpx;
}
.file-name {
  font-size: 28rpx;
  font-weight: 500;
  color: #7f52ff;
  transform: translate(-4rpx, -7rpx);
}
::v-deep .file-name.data-v-5727c6f2 {
  align-items: center;
  display: flex;
  white-space: nowrap;
}
.file-name-inactive {
  font-size: 28rpx;
  font-weight: 500;
  display: flex;
  color: #7f52ff;
  transform: translate(166rpx, -74rpx);
}

.save_btn {
  margin-left: 70rpx;
  margin-bottom: 128rpx;
}
.submit_btn {
  margin-right: 70rpx;
  margin-bottom: 128rpx;
}
::v-deep .save_btn .u-button {
  width: 288rpx;
  height: 70rpx;
  border-radius: 48rpx;
  background-color: #fff;
  color: #7f52ff;
}
::v-deep .submit_btn .u-button {
  width: 288rpx;
  height: 70rpx;
  border-radius: 48rpx;
}
//保存弹窗
.submit_pop {
  width: 500rpx;
  height: 400rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32rpx;
  border-radius: 20rpx;
  box-shadow: 0px 4px 20.4px 0px #00000040;
  position: fixed;
  top: 308rpx;
  left: 128rpx;
  background-color: #ffffff;
  z-index: 999;
}
.submit_desc {
  font-size: 32rpx;
  font-weight: 500;
}

//修改信息
.change_detail {
  color: #7f52ff;
  font-size: 24rpx;
  font-weight: 500;
  margin-left: 470rpx;
  margin-top: 93rpx;
}

//确认弹窗
.save_pop {
  width: 640rpx;
  height: 358rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32rpx;
  border-radius: 20rpx;
  box-shadow: 0px 4px 20.4px 0px #00000040;
  position: fixed;
  top: 308rpx;
  left: 56rpx;
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
  margin-top: 48rpx;
  // margin: auto;
  padding-bottom: 48rpx;
  color: #1a1a1a;
}
::v-deep .cancel_btn .u-button {
  background-color: #ffffff;
  color: #7f52ff;
}

::v-deep .pop_btn .u-button--square.data-v-461e713c {
  border-radius: 8px;
  height: 64rpx;
  width: 145rpx;
}

//底下留白
.footer_1 {
  height: 128rpx;
  width: 100%;
}
.footer_2 {
  height: 96rpx;
  width: 100%;
}
.errorContainer {
  text-align: center;
  margin-top: 63rpx;
}

.errorDetail {
  margin-top: 16rpx;
}
</style>
