<template>
  <div class="rich-text">
    <div ref="rich--text-box"></div>
  </div>
</template>
<script>
import WangEditor from 'wangeditor'
export default {
  data() {
    return {}
  },
  mounted() {
    const text = this.$refs['rich--text-box']
    const editor = new WangEditor(text)
    editor.config.placeholder = '请输入产品详细！'
    editor.config.focus = false
    editor.config.customAlert = function(s, t) {
      switch (t) {
        case 'success':
          this.$message.success(s)
          break
        case 'info':
          this.$message.info(s)
          break
        case 'warning':
          this.$message.warning(s)
          break
        case 'error':
          this.$message.error(s)
          break
        default:
          this.$message.info(s)
          break
      }
    }
    editor.create()
  }
}
</script>
<style scoped lang="scss">
.rich-text {
  margin: 10px 0;
}
</style>
