<template>
  <el-dialog :visible.sync="isShowImageDialog" @close="handleClose">
    <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item v-for="src in imgs" :key="src">
        <img
          :src="src"
          style="max-width:100%;max-height:100%;display:block;margin:0 auto;"
        />
      </el-carousel-item>
    </el-carousel>
  </el-dialog>
</template>

<script>
export default {
  name: 'ImgPreview',
  props: ['imgs', 'isShow'],
  data() {
    return {
      isShowImageDialog: this.isShow
    }
  },
  // created() {
  //   console.log('created', this.imgs)
  // },
  methods: {
    handleClose() {
      // 销毁组件, 移除dom元素
      this.$destroy()
      document.body.removeChild(this.$el)
    }
  }
}
</script>
