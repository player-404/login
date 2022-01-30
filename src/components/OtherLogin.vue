<script setup>
defineProps({
  icon: {
    type: Array,
    default: [require("../assets/QQ.png"), require("../assets/weixin.png")],
  },
});

const sign = (index) => {
  console.log(`其他登录方式${index}`);
};
</script>

<template>
  <ul>
    <li v-for="(item, index) in icon" :key="index" @click="sign(index)">
      <img :src="item" alt="loginIcon" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
  li {
    width: 30px;
    height: 30px;
    margin: 0 10px;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.5s;
    > img {
      height: 100%;
      transform: scale(1.2);
    }
    &:hover {
      box-shadow: 0 0 10px #333;
    }
  }
}
</style>
