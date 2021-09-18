<template>
  <div>
    <el-tree
      ref="tree"
      :data="data"
      show-checkbox
      node-key="id"
      :default-expand-all="true"
      :default-checked-keys="defaultData"
      :props="defaultProps"
    >
    </el-tree>
    <div><el-button @click="clearTree">清空</el-button><el-button @click="addTree">添加</el-button><el-button @click="getTree">获取</el-button></div>
    <!--
      1.清空tree 通过this.$refs.tree.setCheckedKeys([])
      2.获取半选择状态的keys this.$refs.tree.getHalfCheckedKeys()

     -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      defaultData: [],
      data: [
        {
          id: 1,
          label: '一级 1',
          children: [
            {
              id: 4,
              label: '二级 1-1',
              children: [
                {
                  id: 9,
                  label: '三级 1-1-1'
                },
                {
                  id: 10,
                  label: '三级 1-1-2'
                }
              ]
            }
          ]
        },
        {
          id: 2,
          label: '一级 2',
          children: [
            {
              id: 5,
              label: '二级 2-1'
            },
            {
              id: 6,
              label: '二级 2-2'
            }
          ]
        },
        {
          id: 3,
          label: '一级 3',
          children: [
            {
              id: 7,
              label: '二级 3-1'
            },
            {
              id: 8,
              label: '二级 3-2'
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  created() {
    setTimeout(() => {
      this.defaultData = [7, 8]
    }, 300)
  },
  methods: {
    clearTree() {
      this.defaultData = []
      this.$refs.tree.setCheckedKeys([])
    },
    addTree() {
      this.defaultData = [5, 6]
      this.$refs.tree.setCheckedKeys([5, 6])
    },
    getTree() {
      console.log(this.$refs.tree.getHalfCheckedKeys())
      console.log(this.defaultData)
    }
  }
}
</script>
