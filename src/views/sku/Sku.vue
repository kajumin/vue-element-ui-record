<template>
  <div>
    <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="商品规格：" required>
        <el-button @click="addNature" :disabled="!editType" type="success"
          >增加属性</el-button
        >
        <el-button @click="addSku" type="success">增加SKU</el-button>
        <el-button @click="logData" type="success">打印tableData数据</el-button>
      </el-form-item>
      <el-form-item>
        <el-table :data="tableData" style="width: 100%">
          <!-- 自定义部分 -->
          <el-table-column
            v-for="col in attr_names"
            :prop="col.prop"
            :key="col.prop"
          >
            <template slot="header" slot-scope="scope">
              <span
                class="del"
                v-on:click="delColumn(scope.$index)"
                v-if="editType"
                >X</span
              >
              <el-input
                v-model="col.label"
                size="mini"
                class="f-cent"
                :disabled="!editType"
              />
            </template>
            <template slot-scope="scope">
              <el-input
                size="mini"
                v-model="scope.row[col.prop]"
                :disabled="!scope.row['editable']"
              >
              </el-input>
            </template>
          </el-table-column>

          <!-- 固定写死的部分 -->
          <!-- <el-table-column prop="cost_price" label="成本">
            <template slot-scope="scope">
              <el-input
                size="mini"
                v-model="scope.row['cost_price']"
                :disabled="!scope.row['editable']"
              ></el-input>
            </template>
          </el-table-column> -->
          <el-table-column prop="price" label="单价(元)">
            <template slot-scope="scope">
              <el-input
                size="mini"
                v-model="scope.row['price']"
                :disabled="!scope.row['editable']"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="sku" label="sku编码">
            <template slot-scope="scope">
              <el-input
                size="mini"
                v-model="scope.row['sku']"
                :disabled="!scope.row['editable']"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column prop="quantity" label="库存">
            <template slot-scope="scope">
              <el-input
                size="mini"
                v-model="scope.row['quantity']"
                :disabled="!scope.row['editable']"
              ></el-input>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="80">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index)"
                type="text"
                size="small"
                v-if="scope.row['editable']"
              >
                移除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      editType: true, // 判定商品属性标签是否可编辑
      attr_names: [
        // 为了方便理解用 保留
        // {label: '成本', prop: 'cost_price'},
        // {label: '售价', prop: 'price'},
        // {label: '库存', prop: 'quantity'},
        // {label: '货号', prop: 'no'},
      ],
      tableData: [
        {
          cost_price: '', // 成本价
          price: ' ', // 售价
          quantity: '', // 库存
          sku: '', // sku编码
          img: '', // 图片
          editable: true // 判定SKU是否可编辑
        }
      ]
    }
  },
  created() {
    // editType：用于判断是否可添加删除商品的属于，例如商品发布过SKU，并已经有客户购买，那么该商品的属性值理应是无法更改的。
    // editable：用于判断商品该SKU是否可修改/删除，如iphone X  颜色：土豪金  内存:64G 已经有用户购买并生成购买订单(记录)。那么该条sku是不能更改/删除的。
  },
  methods: {
    // 增加商品属性
    addNature() {
      const len = this.attr_names.length
      // 新增以 attr_ 开关，也可以自行定义
      this.attr_names.push({ label: '商品属性', prop: `attr_${len}` })
    },
    // 增加商品SKU
    addSku() {
      const data = this.tableData[0]
      const keys = Object.keys(data)
      const obj = {}
      for (let i = 0; i < keys.length; i++) {
        if (keys[i] === 'editable') {
          obj[keys[i]] = true
        } else {
          obj[keys[i]] = ''
        }
      }
      this.tableData.push(obj)
    },
    // 删除一排 tableData ARR
    deleteRow(index) {
      this.tableData.splice(index, 1)
    },
    // 删除SKU列 每次删除最后一列数据
    delColumn(index) {
      const len = this.attr_names.length - 1
      const str = this.attr_names[len].prop
      this.tableData.map((item) => {
        delete item[str]
      })
      this.attr_names.pop()
    },
    // 调试代码信息用
    logData() {
      console.log('this.attr_names', this.attr_names)
      console.log('this.tableData', this.tableData)
    }
  }
}
</script>
<style scoped></style>
