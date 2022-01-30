<script setup>
import { ref, watch } from "vue";

import ipt from "./Input.vue";
import LoginBtn from "./LoginBtn.vue";
import OtherLogin from "./OtherLogin.vue";

const account = ref("");

defineProps({
  status: {
    type: Boolean,
  },
});
const signin = () => {
  console.log("登录中");
};

const forgetPass = () => {
  console.log("foeget pass");
};

watch(account, (newv) => {
  console.log(newv);
});
</script>

<template>
  <div class="sign-in-layer">
    <Transition
      leave-active-class="animate__animated animate__rotateOutDownLeft animate__faster"
      enter-active-class="animate__animated animate__rotateInUpLeft animate__faster"
    >
      <div class="sign-in" v-if="status">
        <div class="sign-in-container">
          <div class="header">登录</div>
          <div class="form">
            <!-- 用户名 -->
            <ipt v-model="account" />
            <!-- 密码 -->
            <ipt placeholder="请输入你的密码" type="password">
              <template #leftIcon> <img src="../assets/lock.png" /> </template>
            </ipt>
          </div>
          <!-- 登录按钮 -->
          <login-btn class="login-btn" height="36px" @click="signin" />
          <!-- 忘记密码 -->
          <p class="forget-pass" @click="forgetPass">忘记密码?</p>
          <!-- 其他登录方式 -->
          <other-login />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.sign-in-layer {
  width: 100%;
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
      .login-btn {
        margin: 34px auto;
      }
      .forget-pass {
        text-align: center;
        margin: 0;
        color: #08d9d6;
        font-size: 16px;
        cursor: pointer;
      }
    }
  }
}
</style>
