<template>
  <div class="login-page">
    <NavBar :right-text="rightText" @onClickRight="handleOnClickRight"></NavBar>
    <div class="content">
      <div class="login-head">
        <h3>{{ show ? '密码登录' : '短信验证码登录' }}</h3>
        <a href="javascript:;">
          <span @click="codeLogin">{{
            show ? '短信验证码登录' : '密码登录'
          }}</span>
          <van-icon name="arrow"></van-icon>
        </a>
      </div>
      <div class="login-content">
        <van-form @submit="onSubmit" ref="formRef">
          <van-cell-group inset>
            <van-field
              v-model.trim="mobile"
              name="mobile"
              placeholder="请输入手机号"
              :rules="[{ pattern, message: '请输入正确的手机号' }]"
            />
            <van-field
              v-if="show"
              v-model.trim="password"
              :type="passwordType ? 'text' : 'password'"
              name="password"
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
              :right-icon="passwordType ? 'eye' : 'closed-eye'"
              @click-right-icon="passwordType = !passwordType"
            >
            </van-field>
            <van-field
              v-if="!show"
              v-model.trim="code"
              name="code"
              :placeholder="`${placeholder}`"
              :rules="[{ required: true, message: '请输入验证码' }]"
            >
              <template #button>
                <van-button
                  style="border: 0; background-color: #fff"
                  class="btn-send"
                  @click="sendCode"
                  :disabled="disabledEl"
                >
                  {{ counter > 0 ? `${counter}再次发送验证码` : '发送验证码' }}
                </van-button>
              </template>
            </van-field>
          </van-cell-group>
          <div class="item">
            <van-checkbox v-model="checked" icon-size="16px">
              <span>我已同意</span>
              <a href="javascript:;">用户协议</a>
              <span>及</span>
              <a href="javascript:;">隐私条款</a></van-checkbox
            >
          </div>
          <div style="margin: 20px">
            <van-button round block type="primary" native-type="submit">
              登录
            </van-button>
          </div>
          <div class="forgetPassword">忘记密码?</div>
        </van-form>
      </div>
      <div class="login-sso">
        <hr />
        <div>第三方登录</div>
        <hr />
      </div>
      <i class="iconfont icon-QQ"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onUnmounted, watch } from 'vue'
import NavBar from './compoents/cp-nav-bar.vue'
import { login, getCode, loginCode } from '@/api/user'
import { showToast, showSuccessToast, Toast } from 'vant'
import type { FormInstance } from 'vant'
import { useUserStore } from '@/stores/modules/user'
import { useRouter } from 'vue-router'
const rightText = ref<string>('注册')
const handleOnClickRight = () => {
  console.log('x')
}
const passwordType = ref(false)
const mobile = ref('13230000001')
const password = ref('abc12345')
const checked = ref(false)
const code = ref('')
const pattern = /^1[3-9]\d{9}$/
const store = useUserStore()
const show = ref(true)
let placeholder = ref<string | number>('请输入验证码')
const formRef = ref<FormInstance>()
let counter = ref(0)
let timeId: number
const disabledEl = ref(false)
const router = useRouter()
//密码登录
const onSubmit = async (values: Object) => {
  if (!checked.value) return showToast('请勾选我已同意')
  try {
    const res =
      code.value.length > 0
        ? await loginCode(mobile.value, code.value)
        : await login(values)
    store.setUser(res.data)
    router.replace('/user')
    showSuccessToast('登录成功')
  } catch (error) {
    console.log(error)
  }
}

//短信验证吗登录
const codeLogin = async () => {
  show.value = !show.value
  formRef.value?.resetValidation()
  mobile.value = ''
  password.value = ''
  code.value = ''
}

//发送验证码
const sendCode = async () => {
  await formRef.value?.validate('mobile')
  const { data } = await getCode(mobile.value, 'login')
  placeholder.value = data.code
  showSuccessToast('获取验证码成功')
  disabledEl.value = true
  if (counter.value > 0) return
  counter.value = 60
  window.clearInterval(timeId)
  timeId = window.setInterval(() => {
    counter.value--
    if (counter.value < 0) {
      window.clearInterval(timeId)
      disabledEl.value = false
      code.value = ''
    }
  }, 1000)
}
//监听手机号长度变化，将验证吗清空
watch(mobile, () => {
  if (mobile.value.length < 11) {
    code.value = ''
  }
})

onUnmounted(() => {
  window.clearInterval(timeId)
})
</script>
<style lang="scss" scoped>
.content {
  .login-head {
    margin-top: 20px;
    margin-bottom: 50px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      font-size: 25px;
    }
  }
  .login-content {
    .item {
      font-size: 12px;
      margin-top: 20px;
      .van-checkbox {
        margin-left: 31px;
        a {
          color: #16c2a3;
          margin: 0 5px;
        }
      }
    }
    .forgetPassword {
      font-size: 12px;
      text-align: center;
      margin-top: 25px;
      color: #adadad;
      margin-bottom: 100px;
    }
    .btn-send {
      color: #16c2a3;
      font-size: 12px;
    }
  }
  .login-sso {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: #adadad;
    padding: 0 40px;
    hr {
      width: 80px;
      background-color: #adadad;
    }
  }
  .iconfont.icon-QQ {
    display: flex;
    justify-content: center;
    font-size: 40px !important;
    color: #00a2ff;
    margin-top: 20px;
  }
}
</style>
