<template>
  <div id="app">
    <el-container>
      <m-aside></m-aside>
      <el-container direction="vertical">
        <m-header></m-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import MAside from './MAside.vue'
import MHeader from './MHeader.vue'
export default {
  components: {
    MAside,
    MHeader
  }
}
</script>

<style></style>
