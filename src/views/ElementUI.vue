<template>
  <div class="element-ui">
    <div class="element-ui-nav">
      <router-link :to="{ name: 'Upload' }">upload</router-link> |
      <router-link :to="{ name: 'Select' }">select</router-link> |
      <router-link :to="{ name: 'Cascader' }">cascader</router-link> |
      <router-link :to="{ name: 'Cascader2' }">cascader2</router-link> |
      <router-link :to="{ name: 'Scrollbar' }">scrollbar</router-link> |
      <router-link :to="{ name: 'ImgPreview' }">img-preview</router-link> |
      <router-link :to="{ name: 'Tree' }">tree</router-link> |
      <router-link :to="{ name: 'Pdf' }">pdf</router-link> |
      <router-link :to="{ name: 'Pdf2' }">pdf2</router-link> |
      <router-link :to="{ name: 'WangEditor' }">WangEditor</router-link> |
      <router-link :to="{ name: 'Sku' }">Sku</router-link> |
      <router-link :to="{ name: 'Sku2' }">Sku2</router-link> |
      <router-link :to="{ name: 'Ewm' }">Ewm</router-link> |
      <router-link :to="{ name: 'BaseTable' }">Table1</router-link> |
      <router-link :to="{ name: 'CountTo' }">count-to</router-link> |
      <router-link :to="{ name: 'Transition' }">transition</router-link> |
      <router-link :to="{ name: 'Clipboard' }">clipboard</router-link> |
    </div>
    <router-view></router-view>
  </div>
</template>
