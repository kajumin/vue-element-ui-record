<template>
  <div>
    <div>SKU组合demo</div>
    <div v-for="(v, i) in list" :key="i" class="mt-20">
      <b>{{ v.name }}：</b> 4
      <el-checkbox-group v-model="checkList[i].list">
        <el-checkbox v-for="(k, j) in v.list" :key="j" :label="k" /> 6
      </el-checkbox-group>
    </div>
    <div class="mt-20">
      <el-button type="primary" @click="handleClick">确定</el-button> 10
    </div>
    <div class="mt-20">
      <el-tag
        v-for="(item, index) in skuList"
        :key="index"
        style="margin:10px 10px;"
        >{{ item }}</el-tag
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { name: '尺码', list: ['S', 'M', 'L', 'XL', 'XXL'] },
        { name: '颜色', list: ['红色', '黄色', '蓝色', '粉色', '紫色'] },
        { name: '图案', list: ['猫咪', '人物', '飞机', '闪电', '字母'] }
      ],
      checkList: [
        { name: '尺码', list: [] },
        { name: '颜色', list: [] },
        { name: '图案', list: [] }
      ],
      skuArray: [],
      skuList: []
    }
  },
  methods: {
    handleClick() {
      // 先清空数据，保证连续点击按钮，数据不会重复
      this.skuArray = []
      this.skuList = []
      // 将选中的规格组合成一个大数组 [[1, 2], [3, 4]...]
      // 将选中的规格组合成一个大数组 [{"name_en": 'color', value: [1, 2]}, {"name_en": 'size', value: [3, 4]}...]
      const names = ['size', 'color', 'meal']
      this.checkList.forEach((element, index) => {
        if (element.list.length > 0) {
          // this.skuArray.push(element.list)
          this.skuArray.push({ name_en: names[index], value: element.list })
        }
      })
      // 勾选了规格，才调用方法
      if (this.skuArray.length > 0) {
        console.log(this.skuArray)
        this.getSkuData([], 0, this.skuArray)
      } else {
        this.$message.error('请先勾选规格')
      }
    },
    // 递归获取每条SKU数据
    getSkuData(skuArr = [], i, list) {
      console.log(skuArr, i, list)
      for (let j = 0; j < list[i].value.length; j++) { // i = 0  如果只有一层输出[1]  //现在 list[i].value.length
        // console.log(i < list.length - 1)
        if (i < list.length - 1) {
          skuArr[i] = list[i][j] // [1]
          const obj = {}
          obj[list[i].name_en] = list[i].value[j]
          skuArr[i] = obj
          this.getSkuData(skuArr, i + 1, list) // 递归循环
        } else {
          const obj = {}
          obj[list[i].name_en] = list[i].value[j]
          const data = [...skuArr, obj]
          const pushData = {}
          data.forEach(item => {
            console.log(item)
            Object.assign(pushData, item)
          })
          this.skuList.push(pushData)
          // this.skuList.push() // 扩展运算符，连接两个数组
          // const data = [...skuArr, list[i][j]]
          // for (let i = 0; i < data.length; i++) {
          //   this.skuList.push({ i: data[i] })
          // }
          console.log(this.skuList)
        }
      }
    }
  }
}
</script>
<style scoped></style>
