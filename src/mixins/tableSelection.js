export default function({ namespace = 'rowSelection', key = 'id' }) {
  return {
    data() {
      return {
        [namespace]: {
          selectedRowKeys: [], // NOTE: 真正改变表格选中的变量
          selections: []
        }
      }
    },
    methods: {
      selectionChange(val) {
        console.log('val', val)
        this[namespace].selections = val
        this[namespace].selectedRowKeys = val.map((item) => item[key])
      }
    }
  }
}
