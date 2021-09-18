<template>
  <!-- <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="beforeLeave" :stretch="true"> -->
  <el-tabs v-model="activeName" @tab-click="handleClick" :before-leave="beforeLeave">
    <template v-for="tab in tabPane">
      <el-tab-pane :label="tab.label" :name="tab.name" :key="tab.label">
        <!-- 下划线变宽的处理办法 通过span标签加padding -->
        <slot slot="label">
          <span class="pdx15">{{tab.label}}</span>
        </slot>
        {{tab.value}}
      </el-tab-pane>
    </template>
  </el-tabs>
</template>
<script>
export default {
  data() {
    return {
      activeName: 'settings',
      tabPane: [
        {
          label: '用户管理',
          name: 'user',
          value: 'user'
        },
        {
          label: '配置管理',
          name: 'settings',
          value: 'settings'
        },
        {
          label: '角色管理',
          name: 'role',
          value: 'role'
        },
        {
          label: '定时任务补偿',
          name: 'work',
          value: 'work'
        }
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name, event)
    },
    beforeLeave() {
      console.log('离开')
      // Expected the Promise rejection reason to be an Error primise对象的失败原因应该是一个错误
      // return Promise.reject(new Error(1))
      // return false
    }
  }
}
</script>
<style lang="scss" scoped>
.el-tabs /deep/ {
  .el-tabs__header {
    // width: 450px;
  }
}
</style>
