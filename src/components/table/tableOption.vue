<template>
  <div class="ebig-table-option">
    <el-tooltip placement="leftTop" title="表格列显示配置">
      <span class="optionBtn"
        ><i @click.stop="handleClick" class="fa fa-table" aria-hidden="true"></i
      ></span>
    </el-tooltip>
    <div v-show="visible" class="table-select" v-click-outside="onClickOutside">
      <el-checkbox
        class="all-check"
        :checked="options.length === checkedValues.length"
        @change="onCheckAllChange"
      >
        全选/反选
      </el-checkbox>
      <el-checkbox-group v-model="checkedValues" @change="selectChange">
        <div v-for="item in options" :key="item.value">
          <el-checkbox :label="item.value">{{ item.label }}</el-checkbox>
        </div>
      </el-checkbox-group>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import vClickOutside from 'v-click-outside'

Vue.use(vClickOutside)
const componentName = 'ebig-table-option'

const EbigVerticalTable = {
  name: componentName,
  props: {
    columns: { type: Array, default: () => [] },
    noCheckedValues: { type: Array, default: () => [] }
  },
  data() {
    return {
      checkedValues: [],
      visible: false
    }
  },
  watch: {
    noCheckedValues: {
      handler(val) {
        this.checkedValues = this.options
          .filter((col) => !val.includes(col.value))
          .map((c) => c.value)
      },
      immediate: true
    }
  },
  computed: {
    options() {
      console.log('options', this.columns)
      return this.columns.map((col) => {
        const key = col.prop || col.key
        return { label: col.label || col.slots.label, value: key + '' }
      })
    },
    allKeys: (vm) => vm.options.map((o) => o.value)
  },
  methods: {
    onClickOutside() {
      this.visible = false
    },
    handleClick() {
      this.visible = !this.visible
      // 方法1
      // 方法2: 阻止冒泡
      // setTimeout(() => {
      //   console.log('this.visible2')
      //   this.visible = !this.visible
      // })
    },
    onCheckAllChange(checked) {
      this.checkedValues = checked ? this.allKeys : []
      const noCheckedValues = checked ? [] : this.allKeys
      this.$emit('filter', noCheckedValues)
    },
    selectChange(checkedValues) {
      const noCheckedValues = this.allKeys.filter(
        (key) => !checkedValues.includes(key)
      )
      this.$emit('filter', noCheckedValues)
    }
  }
}

export default EbigVerticalTable
</script>

<style lang="scss">
.ebig-table-option {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
.optionBtn {
  padding: 0 4px !important;
  height: auto !important;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
}
.all-check,
.ant-checkbox-group-item {
  display: block !important;
}
.table-select {
  position: absolute;
  background: #fff;
  border: 1px solid #ecedef;
  top: 20px;
  right: 0;
  z-index: 100;
  padding: 10px 0 10px 10px;
  width: 180px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: rgb(177, 175, 175);
  }
  &::-webkit-scrollbar-thumb:hover {
    border-radius: 10px;
    background-color: #22212177;
  }
}
</style>
