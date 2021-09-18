<template>
  <div>
    <el-scrollbar class="scrollbar">
      <div class="content"></div>
    </el-scrollbar>
    <el-scrollbar class="scrollbar2">
      <div class="content">
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
        <span>中国中国</span>
      </div>
    </el-scrollbar>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style scoped lang="scss">
.scrollbar /deep/ {
  width: 300px;
  // 设置高度
  height: 500px;
  margin: 0 auto;
  .el-scrollbar__wrap {
    // 重要的设置
    overflow-x: auto;
  }
  .content {
    // 超出父元素高度
    height: 700px;
    background-color: red;
  }
}
.scrollbar2 /deep/ {
  margin-top: 200px;
  // width: 300px;
  // .el-scrollbar__view {
  //   white-space: nowrap;
  // }
  .content {
    display: flex;
    flex-wrap: nowrap;
    height: 100px;
    // background-color: #f1f1f1;
    span {
      height: 30px;
      line-height: 30px;
      flex-shrink: 0;
    }
  }
}
</style>
