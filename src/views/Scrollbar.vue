<template>
  <div class="scrollbar">
    <el-scrollbar>
      <div class="content"></div>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.el-scrollbar /deep/ {
  width: 300px;
  height: 500px;
  margin: 0 auto;
  .el-scrollbar__wrap {
    // 重要的设置
    overflow-x: auto;
  }
}
.content {
  height: 700px;
  background-color: red;
}
</style>
