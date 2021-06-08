<template>
  <div class="element-ui">
    <router-link :to="{name:'Upload'}">upload</router-link> |
    <router-link :to="{name:'Select'}">select</router-link> |
    <router-link :to="{name:'Cascader'}">cascader</router-link> |
    <router-link :to="{name:'Scrollbar'}">scrollbar</router-link> |
    <router-link :to="{name:'ImgPreview'}">img-preview</router-link> |
    <router-link :to="{name:'Tree'}">tree</router-link> |
    <router-link :to="{name:'Pdf'}">pdf</router-link> |
    <router-link :to="{name:'Pdf2'}">pdf2</router-link> |
    <router-view></router-view>
  </div>
</template>
