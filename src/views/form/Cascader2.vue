<template>
  <div>
    <el-cascader-panel
      ref="cascader"
      :options="casData"
      :props="defaultProp"
      v-model="goodsCategoryValue"
      @expand-change="handleChange"
      @input="handleInput"
    ></el-cascader-panel>
    <el-button @click="handleClick">清除</el-button>

    <div>{{Compute1(value)}}</div>
    <div>{{Compute1(value)}}</div>
    <div><el-button @click="handleChangeValue">测试computed使用函数</el-button></div>
  </div>
</template>
<script>
import { casData } from '@/utils/Data.js'
export default {
  data() {
    return {
      casData: casData,
      // 添加商品表单
      defaultProp: {
        label: 'name',
        value: 'id'
      },
      goodsCategoryValue: [],
      value: 1
    }
  },
  created() {
    console.log(this.casData)
  },
  computed: {
    Compute1() {
      return function(val) {
        console.log(val)
        return val + 'input'
      }
    }
  },
  methods: {
    handleChange(list) {
      console.log(list)
      console.log(this.$refs.cascader)
      console.log(this.$refs.cascader.getCheckedNodes())
    },
    handleClick() {
      console.log(this.$refs.cascader.clearCheckedNodes())
    },
    handleInput() {
      console.log('input')
    },
    handleChangeValue() {
      this.value = 2
    }
  }
}
</script>
<style scoped></style>
