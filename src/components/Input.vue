<script setup>
import { ref, watch, onUpdated } from "vue";

import heightAni from "../utils/heightAni";

//验证状态
const check = ref(true);
//输入的值
const value = ref("");
const ipt = ref(null);
//验证
const emailValidate = ref(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const passValidate = ref(/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/);

const props = defineProps({
  placeholder: {
    type: String,
    default: "请输入你的邮箱",
  },
  type: {
    type: String,
    default: "text",
  },
  //错误提示
  tipMsg: {
    type: String,
    default: "账号不存在！",
  },
  //是否开启验证
  validate: {
    type: Boolean,
    default: false,
  },
  //是否为确认密码
  confirm: {
    type: Boolean,
    default: false,
  },
  confirmPass: String,
  modelValue: String,
});
const emit = defineEmits(["update:modelValue", "vetify"]);

const change = (el) => {
  value.value = el.target.value;
  emit("update:modelValue", value.value);
  //确认密码验证
  if (props.confirm) {
    check.value = value.value === props.confirmPass;
    return;
  }
  //邮箱/密码验证
  if (props.validate) {
    const reg =
      props.type === "text" ? emailValidate.value : passValidate.value;
    check.value = reg.test(value.value);
  }
};
watch(check, (newv) => {
  emit("vetify", newv);
});
</script>

<template>
  <div class="ipt" ref="ipt">
    <div class="ipt-container" v-bind="$attrs">
      <i class="left-icon">
        <slot name="leftIcon"><img src="../assets/user.png" alt="user" /></slot>
      </i>
      <input :type="type" :placeholder="placeholder" @change="change" />
      <span v-if="validate && value">
        <Transition>
          <i class="tip-icon" v-if="check">
            <slot name="tipIcon">
              <img src="../assets/check-one.png" alt="check" />
            </slot>
          </i>
          <i class="tip-icon" v-else>
            <slot name="tipIcon">
              <img src="../assets/close-one.png" alt="check" />
            </slot>
          </i>
        </Transition>
      </span>
    </div>
    <Transition
      enter-active-class="animate__animated animate__shakeX"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <p class="tip-msg" v-if="!check && validate && value">{{ tipMsg }}</p>
    </Transition>
  </div>
</template>

<style lang="scss">
$iconSize: 40px;
.ipt {
  transition: all 0.5s;
  height: $iconSize;
  .ipt-container {
    width: 100%;
    height: $iconSize;
    display: flex;
    background-color: #f4f4f4;
    border-radius: 4px;
    margin-top: 36px;
    .left-icon {
      background-color: #08d9d6;
      display: inline-block;
      height: 100%;
      border-radius: 4px;
      width: $iconSize;
      display: flex;
      justify-content: center;
      align-items: center;
      > img {
        height: 64%;
      }
    }
    input {
      background: none;
      flex-grow: 1;
      text-indent: 4px;
      font-size: 16px;
      outline: none;
      border: none;
      padding-right: 10px;
    }
    .tip-icon {
      @extend .left-icon;
      background: none;
      > img {
        height: 50%;
      }
    }
  }
  .tip-msg {
    margin: 0;
    padding: 4px 4px;
    color: red;
  }
}
</style>
