import Vue from 'vue'
import { Table } from 'element-ui'
import tableOption from './tableOption.vue'
import './table.scss'
const componentName = 's-table'

Vue.component('table-option', tableOption)

export default {
  data() {
    return {
      pagination: {
        page: 1,
        limit: 10,
        total: 0
      },
      localLoading: false,
      localData: [],
      localDataSource: [],
      filterValue: []
    }
  },
  // 需要声明拷贝出来
  props: Object.assign({}, Table.props, {
    border: { type: Boolean, default: true },
    size: { type: String, default: 'small' },
    loadData: { type: Function, default: () => {} },
    columns: { type: Array, default: () => [] },
    showIndex: { type: Boolean, default: false },
    rowSelection: { type: Object },
    showPagination: { type: Boolean, default: true }
  }),
  created() {
    this.getData()
  },
  computed: {
    // 筛选配置显示的列 - 去除隐藏的列
    localColumns() {
      return this.columns.filter(
        (col) => !this.filterValue.includes(col.prop || col.key)
      )
    }
  },
  watch: {
    loading(val) {
      this.localLoading = val
    },
    // 表格源数据
    dataSource: {
      handler(val) {
        this.localDataSource = val || []
      },
      immediate: true
    }
  },
  render() {
    console.log(
      'this.$scopeSlots',
      this.$scopedSlots,
      this.$slots,
      this.$props,
      this.$listeners,
      this
    )
    const values = Object.values(this.$scopedSlots).map((item) => item())
    const slots = Object.values(this.$slots)
    console.log('this.columns', this.columns, Table.props)
    const $props = {}
    Object.keys(Table.props).forEach((k) => {
      const localKey = `local${k.substring(0, 1).toUpperCase()}${k.substring(
        1
      )}`
      if (this[localKey]) {
        $props[k] = this[localKey]
      } else if (this[k]) {
        $props[k] = this[k]
      }
    })
    if (this.localDataSource.length) {
      $props.data = this.localDataSource
    }
    delete $props.columns
    const $on = Object.assign({}, this.$listeners)
    console.log('$on', $on, $props)
    const elColumns = this.localColumns.map((item) => {
      return (
        <el-table-column
          {...{
            props: { ...item },
            scopedSlots: {
              default: ({ row }) => {
                if (typeof item.customRender === 'function') {
                  return item.customRender(row)
                } else if (
                  item.scopedSlots &&
                  this.$scopedSlots[item.scopedSlots.customRender]
                ) {
                  return this.$scopedSlots[item.scopedSlots.customRender](row)
                }
                return row[item.prop]
              }
            }
          }}
        ></el-table-column>
      )
    })
    if (this.showIndex) {
      elColumns.unshift(
        <el-table-column
          type="index"
          label="序号"
          width="60"
          index={this.indexMethod}
        ></el-table-column>
      )
    }
    if (this.rowSelection) {
      elColumns.unshift(
        <el-table-column type="selection" width="50"></el-table-column>
      )
    }
    console.log('this.rowSelection', this.rowSelection)
    console.log(values, slots, elColumns)
    let pagination = null
    if (this.showPagination) {
      console.log('this.showPagination', this.showPagination)
      pagination = (
        <el-pagination
          {...{
            on: {
              'size-change': this.handleSizeChange,
              'current-change': this.handleCurrentChange
            },
            props: {
              small: true,
              'current-page': this.pagination.page,
              'page-sizes': [10, 20, 30, 40],
              'page-size': this.pagination.limit,
              total: this.pagination.total,
              layout: 'total, sizes, prev, pager, next, jumper'
            }
          }}
        ></el-pagination>
      )
    }
    const tableOption = (
      <table-option
        {...{
          props: {
            columns: this.columns,
            noCheckedValues: this.filterValue
          },
          on: {
            filter: (noCheckedValues) => (this.filterValue = noCheckedValues)
          }
        }}
      ></table-option>
    )
    return (
      <div class={componentName + '-wrapper'}>
        {tableOption}
        <el-table {...{ on: { ...$on }, props: $props }}>{elColumns}</el-table>
        <div class="pagination-wrap">
          <div class="pagination-wrap-left" style={{ color: '#979CA2' }}>
            {this.rowSelection
              ? `已选 ${this.rowSelection.selectedRowKeys.length} 条记录 / `
              : ''}
            {`共有 ${
              this.pagination ? this.pagination.total : this.dataSource.length
            } 条记录`}
          </div>
          <div class="pagination-wrap-right">{pagination}</div>
        </div>
      </div>
    )
  },
  methods: {
    indexMethod(index) {
      return (this.pagination.page - 1) * this.pagination.limit + ++index
    },
    getData() {
      this.loadData(this.pagination).then((res) => {
        console.log('res', res)
        res = res || { list: [], total: 0 }
        this.localData = res.list
        this.pagination.total = res.total
      })
    },
    handleSizeChange(size) {
      console.log('size', size)
      this.pagination.limit = size
    },
    handleCurrentChange(page) {
      console.log('page', page)
      this.pagination.page = page
      this.getData()
    }
  }
}
