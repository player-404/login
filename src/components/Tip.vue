<script setup>
import { ref } from "vue";

const show = ref(false);
const emits = defineEmits(["toOther"]);
const toSignIn = () => {
  show.value = false;
  emits("toOther", "signIn");
};

const toSignUp = () => {
  show.value = true;
  emits("toOther", "signUp");
};
</script>

<template>
  <div class="tip">
    <div class="tip-container" :class="{ move: !show }">
      <Transition
        enter-active-class="animate__animated animate__fadeInUp animate__faster"
        leave-active-class="animate__animated animate__fadeOutDown animate__faster"
      >
        <div class="tip-login" v-if="show">
          <h1 class="title">已有账号?</h1>
          <p class="tip-msg">登录纵向丝滑~</p>
          <button class="to-login" @click="toSignIn">登录</button>
        </div>
        <div class="tip-login" v-else>
          <h1 class="title">没有账号?</h1>
          <p class="tip-msg">赶紧加入我们吧~</p>
          <button class="to-login" @click="toSignUp">注册</button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tip {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  .tip-container {
    width: 94%;
    height: 96%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("../assets/bg.jpg") no-repeat;
    background-position: left 0 top 0;
    border-radius: 10px;
    transition: all 0.5s;
    &.move {
      background-position: right 30% top 0;
    }
    .tip-login {
      position: absolute;
      width: 80%;
      .title {
        color: #fff;
        text-align: center;
        margin: 0;
        padding: 0;
      }
      .tip-msg {
        color: #fff;
        margin: 20px 0px;
        padding: 0;
        text-align: center;
        font-size: 16px;
      }
      .to-login {
        display: block;
        width: 100px;
        height: 40px;
        color: #fff;
        font-size: 20px;
        background: none;
        border: 2px solid #fff;
        border-radius: 4px;
        transition: all 0.5s;
        cursor: pointer;
        margin: 10px auto;
        &:hover {
          background-color: #08d9d6;
          border-color: #08d9d6;
        }
      }
    }
  }
}
</style>
