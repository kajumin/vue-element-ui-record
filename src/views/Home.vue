<template>
  <div class="home">
    <div class="nav-wrap">
      <nav class="big-nav" v-for="(menu, key) in menuList" :key="key">
        <div class="big-nav-wrap" v-for="item in menu" :key="item.name">
          <router-link class="nav-link" :to="{ name: item.name }">{{
            item.path
          }}</router-link>
          <div class="big-nav-line">
            <div class="line-left"></div>
            <div class="line-right"></div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
import { menuList } from '@/router/index.js'
export default {
  name: 'HomeView',
  data() {
    return {
      menuList
    }
  }
}
</script>
<style lang="scss">
.home {
  height: 100%;
  .nav-wrap {
    overflow: hidden;
    padding-bottom: 20px;
  }
}
.big-nav {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding-left: 20px;
  .big-nav-wrap {
    position: relative;
    margin-right: 16px;
    &:hover {
      color: #1890ff;
    }
    &:hover .big-nav-line {
      background-color: #ddd;
    }
    &:hover .line-left {
      opacity: 1;
      flex: 1;
    }
    &:hover .line-right {
      opacity: 1;
      flex: 1;
    }
  }
  .big-nav-line {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    left: 0;
  }
  .line-left,
  .line-right {
    transition-property: flex, opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    width: 0;
    height: 2px;
    opacity: 0.6;
    background-color: #1890ff;
  }
}
.nav-link {
  display: block;
  padding: 10px 10px;
  color: #333;
}
</style>
