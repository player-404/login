<script setup>
import { reactive } from "@vue/reactivity";

const style = reactive({
  width: props.width,
  height: props.height,
});

const props = defineProps({
  width: {
    type: String,
    default: "80%",
  },
  height: {
    type: String,
    default: "36px",
  },
});

const emit = defineEmits(["click"]);

const click = () => {
  emit("click");
};
</script>

<template>
  <button :style="style" @click="click">
    <slot>登录</slot>
  </button>
</template>

<style lang="scss" scoped>
button {
  display: block;
  border: none;
  color: #fff;
  background-color: #08d9d6;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  outline: none;
  transition: all 0.5s;
  font: {
    size: 16px;
    weight: bold;
  }
  &:hover {
    box-shadow: 0 0 10px #08d9d6;
  }
}
</style>
