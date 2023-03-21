<template>
  <div class="patient-page">
    <NavBar
      :title="'家庭档案'"
      :isleftarrow="true"
      :left-text="''"
      @onClickLeft="handleOnClickLeft"
      :rightText="''"
    ></NavBar>
    <div class="patient-list">
      <div class="patient-item" v-for="item in list" :key="item.id">
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <span class="id">{{ hideMiddle(item.idCard) }}</span>
          <div class="infos">
            <span>{{ item.genderValue }}</span>
            <span>{{ item.age }}岁</span>
          </div>
        </div>
        <div class="icon">
          <van-icon
            name="edit"
            style="margin-left: 40px"
            @click="editPatient(item)"
          />
        </div>
        <div class="tag">默认</div>
      </div>
      <div
        class="patient-add"
        @click="showPopup"
        v-if="(list?.length as number)< 6"
      >
        <van-icon name="add-o" />
        <p>添加患者</p>
      </div>
      <div class="patient-tip">最多可添加 6 人</div>
    </div>
  </div>
  <van-popup
    v-model:show="showRight"
    position="right"
    close-icon-position="top-right"
    :style="{ width: '100%', height: '100%' }"
  >
    <NavBar
      :title="'添加患者'"
      :isleftarrow="true"
      :left-text="''"
      @onClickLeft="handleBack"
      @onClickRight="handleSave"
      :rightText="'保存'"
    ></NavBar>
    <van-form @submit="onSubmit" ref="formRef">
      <van-cell-group inset>
        <!-- 通过 pattern 进行正则校验 -->
        <van-field
          v-model="patient.name"
          name="name"
          placeholder="请输入真实姓名"
          label="姓名"
          :rules="nameRules"
        />
        <van-field
          v-model="patient.idCard"
          name="idCard"
          label="身份证"
          placeholder="请输入身份证号"
          :rules="idCardRules"
        />
        <van-field label="性别" name="gender">
          <!-- 单选按钮组件 -->
          <template #input>
            <RadioBtn
              name="gender"
              :options="options"
              v-model="patient.gender"
            ></RadioBtn>
          </template>
        </van-field>
        <van-field label="默认就诊人" name="defaultFlag">
          <template #input>
            <van-checkbox v-model="patient.defaultFlag" :icon-size="18" round />
          </template>
        </van-field>
      </van-cell-group>
    </van-form>
    <van-action-bar v-if="patient.id">
      <van-action-bar-button @click="remove">删除</van-action-bar-button>
    </van-action-bar>
  </van-popup>
</template>
<script setup lang="ts">
import type { patientList, Patient } from '@/types/user'
import { ref, onMounted } from 'vue'
import { getPatientList } from '@/api/user'
import { patientAdd } from '@/api/address'
import { updatePatient, delPatient } from '@/api/patient'
import { nameRules, idCardRules } from '@/utils/rules'
import type { FormInstance } from 'vant'
import { showConfirmDialog, showSuccessToast } from 'vant'

const formRef = ref<FormInstance>()
const list = ref<patientList>()
const initPatient: Patient = {
  name: '',
  idCard: '',
  gender: 1,
  defaultFlag: 0
}
let patient = ref<Patient>({ ...initPatient })
const handleOnClickLeft = async () => {
  history.back()
}
const options = [
  { label: '男', value: 1 },
  { label: '女', value: 0 }
]
const initList = async () => {
  const res = await getPatientList()
  list.value = JSON.parse(JSON.stringify(res.data))
}

const hideMiddle = (name: string) => {
  // eslint-disable-next-line no-useless-escape
  return name.replace(/^(.{6}).+(.{4})$/, '\$1********\$2')
}

const showRight = ref(false)

const showPopup = () => {
  showRight.value = true
  patient = ref<Patient>({ ...initPatient })
}

const handleBack = () => {
  showRight.value = false
}
const handleSave = async () => {
  const gender = +patient.value.idCard.slice(-2, -1) % 2
  if (gender !== patient.value.gender) {
    await showConfirmDialog({
      title: '温馨提示',
      message: '填写的性别和身份证号中的不一致\n您确认提交吗？'
    })
  }
  patient.value.id
    ? await updatePatient({
        ...patient.value,
        defaultFlag: patient.value.defaultFlag ? 1 : 0
      })
    : await patientAdd({
        ...patient.value,
        defaultFlag: patient.value.defaultFlag ? 1 : 0
      })
  showRight.value = false
  patient.value.id ? showSuccessToast('修改成功') : showSuccessToast('添加成功')
  initList()
}
const onSubmit = async () => {
  await formRef.value?.validate()
}
const editPatient = async (item: Patient) => {
  if (item) {
    // 如果点的是编辑，解构出后台需要的数据
    const { id, gender, name, idCard, defaultFlag } = item
    patient.value = { id, gender, name, idCard, defaultFlag }
  } else {
    patient.value = { ...initPatient }
  }
  showRight.value = true
  // let res = await getPatientDetail(id)
  // patient.value = {
  //   ...res.data,
  //   defaultFlag: res.data.defaultFlag ? true : false
  // }
}
const remove = async () => {
  if (patient.value.id) {
    await showConfirmDialog({
      title: '温馨提示',
      message: `您确认要删除 ${patient.value.name} 患者信息吗 ？`
    })
    await delPatient(patient.value.id)
    showRight.value = false
    initList()
    showSuccessToast('删除成功')
  }
}
onMounted(() => {
  initList()
})
</script>
<style lang="scss" scoped>
.patient-list {
  padding: 4vw;
  margin-bottom: 4vw;
  .patient-item,
  .patient-add {
    display: flex;
    align-items: center;
    padding: 4vw;
    background-color: var(--cp-bg);
    margin-bottom: 4vw;
    border-radius: 10px;
    position: relative;
    .info {
      .name {
        display: inline-block;
        width: 21.3333vw !important;
        font-size: 4.26667vw;
        color: var(--cp-text1);
        margin-right: 0px;
        margin-bottom: 18px;
      }
      span {
        color: var(--cp-tip);
      }
      .id {
        display: inline-block;
        width: 48vw;
      }
      .infos {
        span {
          &:first-child {
            margin-right: 20px;
          }
        }
      }
    }
    .tag {
      position: absolute;
      right: 16vw;
      top: 5.6vw;
      width: 8vw;
      height: 4.26667vw;
      font-size: 2.66667vw;
      color: rgb(255, 255, 255);
      background-color: var(--cp-primary);
      border-radius: 0.53333vw;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .patient-add {
    display: flex;
    flex-direction: column;
    color: var(--cp-primary);
    border-radius: 2.13333vw;
    .van-icon-add-o {
      font-size: 6.4vw;
    }
    p {
      margin-top: 5px;
    }
  }
  .patient-tip {
    color: var(--cp-tag);
    padding: 3.2vw 0px;
  }
}
.van-action-bar {
  padding: 0 10px;
  margin-bottom: 10px;
  .van-button {
    color: var(--cp-price);
    background-color: var(--cp-bg);
  }
}
</style>
