<template>
  <div class="base-table">
    <div class="checked-all">
      <el-checkbox v-model="checkedAll" @change="changeAllCheck"
        >全选(支持跨分页)</el-checkbox
      >
      <span class="mgl10" v-show="checkedAll"
        >一共选择了<span class="color-primary mgx5">{{
          checkedAll ? pageParams.total : ''
        }}</span
        >个</span
      >
    </div>
    <el-table :data="userList" style="width: 100%" ref="m-table" @selection-change="handleSelectionChange">
      <el-table-column type="selection" label="日期" width="80">
      </el-table-column>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <m-pagination
      :pageParams="pageParams"
      @changePage="changePage"
    ></m-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedAll: false,
      pageParams: {
        page: 1,
        limit: 2,
        total: 0
      },
      exportForm2: {
        query: { ids: [] }
      },
      userList: [],
      userData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-05',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  created() {
    this.pageParams.total = this.userData.length
    this.changePage(1)
  },
  methods: {
    getData() {
      const start = (this.pageParams.page - 1) * this.pageParams.limit
      const end = start + this.pageParams.limit
      this.userList = this.userData.slice(start, end)
    },
    changeAllCheck(val) {
      console.log(
        '全选是否为真',
        val && this.exportForm2.query.ids.length !== this.pageParams.limit
      )
      if (val) {
        this.exportForm2.query.ids.length !== this.userList.length &&
          this.$refs['m-table'].toggleAllSelection(val)
      } else {
        this.$refs['m-table'].clearSelection()
      }
    },
    handleSelectionChange(data) {
      console.log(data)
      if (data.length < this.userList.length) {
        this.checkedAll = false
      }
      this.exportForm2.query.ids = data.map((item) => item.id)
    },
    changePage(page) {
      console.log(page)
      this.pageParams.page = page
      this.getData(1)
    }
  }
}
</script>
<style scoped lang="scss">
.base-table {
}
</style>
