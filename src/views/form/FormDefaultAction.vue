<template>
  <div>
    <el-form @submit.native.prevent>
      <el-form-item label="订单号">
        <el-input
          v-model="query.orderNo"
          placeholder="输入订单号查询"
          clearable
          @keyup.enter.native="enterInput"
        />
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item>
        {{ form.retailMinOrder }}
        <el-input
          v-model="form.retailMinOrder"
          placeholder="请输入"
          @keyup.native="
            form.retailMinOrder = form.retailMinOrder.replace(/[^\d.]/g, '')
          "
        />
      </el-form-item>
    </el-form>
    <el-popconfirm title="这是一段内容确定删除吗？" @confirm="handleComfirm">
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>

    <el-form :model="userForm" :rules="formRules" ref="user-form">
      <el-form-item prop="user_name">
        <el-input v-model="userForm.user_name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="userForm.password"
          type="password"
          placeholder="请输入用户名"
        />
      </el-form-item>
      <el-form-item prop="user.age">
        <el-input v-model="userForm.user.age" placeholder="请输入年龄" />
      </el-form-item>
      <el-button @click="handleSubmitForm">提交</el-button>
    </el-form>
    <el-table
      row-key="id"
      :data="showData"
      @selection-change="handleSelect"
      :row-class-name="tableRowClassName"
    >
      <el-table-column type="selection" reserve-selection></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="date" label="日期"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="年龄">
        <template slot-scope="{row}">
          <el-input ref="input-ref" v-model="row.age" />
        </template>
      </el-table-column>
    </el-table>
    <button @click="handleClick">提交</button>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="pageParams.total"
      :page-size="pageParams.limit"
    >
    </el-pagination>
  </div>
  <!--
    1. form表单中只有一个输入框时, 回车键会触发提交行为
    2. confirm事件
    3. 非数字删除
    4. 表单验证  'user.age'
    5. 根据条件高亮行并去除默认hover颜色
   -->
</template>
<script>
export default {
  data() {
    return {
      query: {
        orderNo: ''
      },
      form: { retailMinOrder: '' },
      userForm: {
        user_name: '',
        user: {
          age: ''
        }
      },
      formRules: {
        user_name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
        'user.age': [{ required: true, message: '请输入年龄', trigger: 'blur' }]
      },
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: 1
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status: 2
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          status: 2
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          status: 2
        }
      ],
      pageParams: { total: 5, limit: 2, page: 1 }
    }
  },
  computed: {
    showData() {
      const start = (this.pageParams.page - 1) * this.pageParams.limit
      const end = start + this.pageParams.limit
      return this.tableData.slice(start, end)
    }
  },
  methods: {
    tableRowClassName({ row }) {
      return row.status === 2 ? 'highlight' : ''
    },
    enterInput() {},
    handleComfirm() {
      console.log('comfirm')
    },
    handleSubmitForm() {
      this.$refs['user-form'].validate((valid) => {
        console.log(valid)
        if (!valid) {
          console.log('发送请求')
        }
      })
    },
    handleSelect(data) {
      console.log(data)
    },
    handleClick() {
      console.log(this.$refs['input-ref'].focus())
    }
  }
}
</script>
<style scoped lang="scss"></style>
