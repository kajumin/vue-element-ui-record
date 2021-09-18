<template>
  <div class="cascader">
    <el-form>
      <el-form-item label="所在地区" label-width="120px">
        <el-cascader
          :show-all-levels="true"
          :props="companyRegion"
          v-model="companyForm.company_region"
        ></el-cascader>
        {{ companyForm.company_region }}
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getRegionList } from '@/api/settings/enter.js'
export default {
  data() {
    let rid = 0
    return {
      companyForm: {
        company_region: []
      },
      companyRegion: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node
          rid = node.data && node.data.value
          console.log(node)
          console.log(level)
          console.log(rid)
          getRegionList({ parent_id: rid }).then((res) => {
            console.log(res)
            if (res.code === 0) {
              const nodes = res.data.map((item) => ({
                value: item.rid,
                label: item.name,
                leaf: level >= 2
              }))
              resolve(nodes)
            }
          })
        }
      }
    }
  },
  created() {
    // 设置默认值, 需要提前获取到数据
    this.companyForm.company_region = [1, 2, 3]
    // 异步接口获取回来数据再赋值, 无效
    setTimeout(() => {
      this.companyForm.company_region = [1, 2, 3]
      // this.companyRegion.lazyLoad({ data: { value: 1 } }, Promise.resolve)
    }, 1000)
  },
  mounted() {
    console.log('mounted')
  }
}
</script>
<style scoped lang="scss">
.cascader {
  height: 300px;
}
</style>
