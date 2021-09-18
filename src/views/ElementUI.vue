<template>
  <div class="element-ui">
    <div class="element-ui-nav">
      <router-link :to="{ name: 'Upload' }">upload</router-link> |
      <router-link :to="{ name: 'Select' }">select</router-link> |
      <router-link :to="{ name: 'DynInput' }">DynInput</router-link> |
      <router-link :to="{ name: 'Cascader' }">cascader</router-link> |
      <router-link :to="{ name: 'Cascader2' }">cascader2</router-link> |
      <router-link :to="{ name: 'Scrollbar' }">scrollbar</router-link> |
      <router-link :to="{ name: 'ImgPreview' }">img-preview</router-link> |
      <router-link :to="{ name: 'Tree' }">tree</router-link> |
      <router-link :to="{ name: 'Sku' }">Sku</router-link> |
      <router-link :to="{ name: 'Sku2' }">Sku2</router-link> |
      <router-link :to="{ name: 'BaseTable' }">Table1</router-link> |
      <router-link :to="{ name: 'Transition' }">transition</router-link> |
      <router-link :to="{ name: 'FormDefaultAction' }">FormDefaultAction</router-link> |
      <router-link :to="{ name: 'Tabs' }">Tabs</router-link> |
      <router-link :to="{ name: 'Password' }">Password</router-link> |
    </div>
    <router-view></router-view>
  </div>
</template>
