<template>
  <el-pagination
    v-show="pageParams.total>pageParams.limit"
    background
    class="m-pagination"
    layout="total, prev, pager, next"
    prev-text="上一页"
    next-text="下一页"
    :current-page="pageParams.page"
    @current-change="handlePageChange"
    :page-size="pageParams.limit"
    :total="pageParams.total"
  >
  </el-pagination>
</template>
<script>
export default {
  name: 'm-pagination',
  props: {
    pageParams: {
      type: Object
    }
  },
  methods: {
    handlePageChange(page) {
      this.$emit('changePage', page)
    }
  }
}
</script>
<style scoped></style>
