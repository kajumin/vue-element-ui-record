<template>
  <div class="cascader">
    <el-cascader :props="props"  v-model="value"></el-cascader>
  </div>
</template>

<script>
import { getRegionList } from '@/api/settings/enterprise.js'
export default {
  data() {
    let rid = 0
    return {
      value: [2702, 2780, 2794],
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          rid = node.data && node.data.value
          console.log(node)
          console.log(level)
          console.log(rid)
          getRegionList({ parent_id: rid }).then(res => {
            console.log(res)
            if (res.code === 0) {
              const nodes = res.data.map(item => ({
                value: item.rid,
                label: item.name,
                leaf: level >= 2
              }))
              resolve(nodes)
            }
          })
          // setTimeout(() => {
          //   const nodes = Array.from({ length: level + 1 }).map((item) => ({
          //     value: ++id,
          //     label: `选项${id}`,
          //     leaf: level >= 2
          //   }))
          //   // 通过调用resolve将子节点数据返回，通知组件数据加载完成
          //   resolve(nodes)
          // }, 1000)
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.cascader {
  height: 300px;
}
</style>
