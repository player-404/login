<script setup>
import { reactive, ref } from "vue";

import ipt from "./Input.vue";
import LoginBtn from "./LoginBtn.vue";
import OtherLogin from "./OtherLogin.vue";

const confirmPass = ref("");
const email = ref("");
const pass = ref("");
const checks = reactive({
  passcheck: false,
  emailcheck: false,
  confirmPasscheck: false,
});

defineProps({
  status: {
    type: Boolean,
  },
});

const passVetify = (check) => {
  checks.passcheck = check;
};
const emailCheck = (check) => {
  checks.emailcheck = check;
};
const confirmCheck = (check) => {
  checks.confirmPasscheck = check;
};
const signup = () => {
  if (!checks.passcheck || !checks.emailcheck || !checks.confirmPasscheck) {
    console.log("验证失败，无法登录");
    return;
  }
  console.log("登录中");
};
</script>

<template>
  <div class="sign-in-layer">
    <Transition
      enter-active-class="animate__animated animate__lightSpeedInRight "
      leave-active-class="animate__animated animate__fadeOutRight "
    >
      <div class="sign-in" v-if="!status">
        <div class="sign-in-container">
          <div class="header">注册</div>
          <div class="form">
            <!-- 用户名 -->
            <ipt :validate="true" tipMsg="邮箱格式错误" @vetify="emailCheck" />
            <!-- 密码 -->
            <ipt
              placeholder="请输入你的密码"
              type="password"
              :validate="true"
              tipMsg="密码需包含大写，数字，长度6位"
              v-model="confirmPass"
              @vetify="passVetify"
            >
              <template #leftIcon> <img src="../assets/lock.png" /> </template>
            </ipt>
            <!-- 确认密码 -->
            <ipt
              placeholder="请输入你的确认密码"
              :validate="true"
              type="password"
              :confirm="true"
              :confirmPass="confirmPass"
              tipMsg="两次密码不一致"
              @vetify="confirmCheck"
            >
              <template #leftIcon> <img src="../assets/lock.png" /> </template>
            </ipt>
          </div>
          <!-- 登录按钮 -->
          <login-btn class="login-btn" height="36px" @click="signup"
            >注册</login-btn
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.sign-in-layer {
  width: 100%;
  overflow: hidden;
  .sign-in {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    .sign-in-container {
      width: 80%;
      .header {
        font: {
          size: 32px;
        }
        color: #333;
        text-align: center;
        margin-bottom: 36px;
      }
      .form {
        transition: height 0.5s;
      }
      .login-btn {
        margin: 34px auto;
      }
    }
  }
}
</style>
