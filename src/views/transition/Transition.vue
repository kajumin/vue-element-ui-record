<template>
  <div>
    <div>
      <el-button @click="changeAction('pwd')">账号密码</el-button
      ><el-button @click="changeAction('mobile')">手机号码</el-button>
    </div>
    <div class="login-box">
      <transition name="pwd">
        <div class="box" v-if="action ==='pwd'">pwd</div>
      </transition>
      <transition name="mobile">
        <div class="box" v-if="action ==='mobile'">mobile</div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      action: 'pwd'
    }
  },
  methods: {
    changeAction(action) {
      this.action = action
    }
  }
}
</script>
<style scoped lang="scss">
.box {
  width: 200px;
  height: 200px;
  border: 1px solid #eee;
}
.login-box {
  position: relative;
}
.mobile-enter-active,
.mobile-leave-active,
.pwd-enter-active,
.pwd-leave-active {
  transition-property: transform, opacity;
  transition-duration: 2s;
}
.mobile-leave-active,
.pwd-leave-active {
  position: absolute;
}
.mobile-leave-active {
  top: 0;
}
.mobile-enter,
.mobile-leave-to {
  opacity: 0;
  transform: translateX(90px);
}
.pwd-enter,
.pwd-leave-to {
  opacity: 0;
  transform: translateX(-90px);
}
</style>
