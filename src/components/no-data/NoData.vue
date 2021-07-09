<template>
  <div class="empty-box" :style="{height}">
    <div class="empty-box-content">
      <img src="../../assets/images/common/no-data.png" alt="" :width="imageWidth">
      <div class="text-box">{{text}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'no-data',
  props: {
    text: {
      default: '暂无数据'
    },
    imageWidth: {
      default: '258px'
    },
    height: {
      default: '300px'
    }
  },
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.empty-box {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  text-align: center;
  color: #999;
}
</style>
