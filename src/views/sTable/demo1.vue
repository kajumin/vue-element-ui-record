<template>
  <div>
    <div>stable</div>
    <STable
      :loadData="loadData"
      :columns="columns"
      :showIndex="true"
      :row-selection="rowSelection"
      @selection-change="selectionChange"
    >
      <template #name="row">{{ row.name + 1 }}</template>
      <template #action="record">
        <!-- <ebig-seperated-bar>
          <el-button type="text" @click="edit(record)">编辑</el-button>
          <el-button type="text" @click="detailed(record)">详细</el-button>
        </ebig-seperated-bar> -->
        <el-button type="text" @click="edit(record)">编辑</el-button>
        <el-button type="text" @click="detailed(record)">详细</el-button>
      </template>
    </STable>
  </div>
</template>

<script>
import STable from '@/components/table/table.js'
import tableSelection from '@/mixins/tableSelection'
export default {
  components: {
    STable
  },
  filters: {
    showName(val) {
      console.log('val', val)
      return val
    }
  },
  mixins: [tableSelection({ key: 'name' })],
  data() {
    return {
      columns: [
        {
          label: '姓名',
          prop: 'name',
          width: '100',
          scopedSlots: { customRender: 'name' }
        },
        {
          label: '日期',
          prop: 'date',
          width: '150',
          customRender: (row) => +new Date(row.date)
        },
        { label: '地址', prop: 'address' },
        {
          label: '操作',
          prop: 'action',
          scopedSlots: { customRender: 'action' },
          width: 150
        }
      ],
      tableData: [
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
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ]
    }
  },
  methods: {
    loadData(pagination) {
      return Promise.resolve(
        JSON.parse(
          JSON.stringify({
            list: this.tableData,
            total: 30
          })
        )
      )
    },
    edit(row) {
      console.log('row', row)
    },
    detailed(row) {
      console.log('row', row)
    }
  }
}
</script>

<style lang="scss" scoped></style>
