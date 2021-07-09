<template>
  <div class="show-pdf">
    <div class="tools">
      <el-button
        type="submit"
        @click.stop="prePage"
        class="mr10"
      >
        上一页</el-button
      >
      <el-button
        type="submit"
        @click.stop="nextPage"
        class="mr10"
      >
        下一页</el-button
      >
      <div class="page">{{ pageNum }}/{{ pageTotalNum }}</div>
      <el-button
        type="submit"
        @click.stop="clock"
        class="mr10"
      >
        顺时针</el-button
      >
      <el-button
        type="submit"
        @click.stop="counterClock"
        class="mr10"
      >
        逆时针</el-button
      >
    </div>
    <pdf
      ref="pdf"
      :src="url"
      :page="pageNum"
      :rotate="pageRotate"
      @progress="loadedRatio = $event"
      @page-loaded="pageLoaded($event)"
      @num-pages="pageTotalNum = $event"
      @error="pdfError($event)"
      @link-clicked="page = $event"
    >
    </pdf>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  name: 'Home',
  components: {
    pdf
  },
  data() {
    return {
      url:
        // 'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
        'https://photo.feibaos.cn/webs/saas/uploads/property/知识产权维权扶持政策汇编-2021.pdf',
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0
    }
  },
  mounted: function() {},
  methods: {
    // 上一页函数，
    prePage() {
      var page = this.pageNum
      page = page > 1 ? page - 1 : this.pageTotalNum
      this.pageNum = page
    },
    // 下一页函数
    nextPage() {
      var page = this.pageNum
      page = page < this.pageTotalNum ? page + 1 : 1
      this.pageNum = page
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e
    },
    // 其他的一些回调函数。
    pdfError(error) {
      console.error(error)
    }
  }
}
</script>
<style scoped lang="scss">
.show-pdf {
  width: 600px;
  margin: 0 auto;
}
</style>
