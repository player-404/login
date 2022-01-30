<script setup>
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import Tip from "./components/Tip.vue";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";

const move = ref("signIn");
const siwtch = (value) => {
  console.log("value", value);
  move.value = value;
};

const status = computed(() => {
  return move.value === "signIn";
});
</script>

<template>
  <div class="container">
    <div class="layer" :class="move">
      <sign-in class="sign-in" :status="status" />
      <tip class="tip" @toOther="siwtch" />
      <sign-up :status="status" class="sign-up"></sign-up>
    </div>
  </div>
</template>

<style lang="scss">
$width: 800px;
$height: 530px;
.container {
  border-radius: 14px;
  width: $width;
  height: $height;
  transition: all 0.5s;
  overflow: hidden;
  box-shadow: 0 0 10px #333;
  margin: 100px auto;
  .layer {
    display: flex;
    flex-wrap: nowrap;
    transform: translateZ(0);
    transition: all 0.5s;
    &.signUp {
      transform: translateX(-$width / 2);
    }
    &.signIn {
      transform: translateX(0);
    }
    .sign-up {
      width: $width / 2;
      height: $height;
      flex-shrink: 0;
    }
    .sign-in {
      @extend .sign-up;
    }
    .tip {
      @extend .sign-up;
    }
  }
}
</style>
