<template>
  <div>
    <div class="images-show-item" v-for="img in imgs" :key="img.id" @click="handlePreview(img.imageSrc)">
      <template v-for="imgSrc in img.imageSrc">
        <img :src="imgSrc" alt="" :key="imgSrc">
      </template>
    </div>
  </div>
</template>
<script>
import imgPreview from '@/components/ImgPreview/index.js'
export default {
  data() {
    return {
      imgs: [
        {
          id: 1,
          imageSrc: ['https://photo.feibaos.cn/1620731345000icon-01.png', 'https://photo.feibaos.cn/webs/saas/uploads/cert/2021-5-24/1621842356285.png']
        },
        {
          id: 2,
          imageSrc: ['https://photo.feibaos.cn/1620731345000icon-01.png', 'https://photo.feibaos.cn/webs/saas/uploads/cert/2021-5-24/1621842356285.png']
        },
        {
          id: 3,
          imageSrc: ['https://photo.feibaos.cn/1620731345000icon-01.png', 'https://photo.feibaos.cn/webs/saas/uploads/cert/2021-5-24/1621842356285.png']
        },
        {
          id: 4,
          imageSrc: ['https://photo.feibaos.cn/1620731345000icon-01.png', 'https://photo.feibaos.cn/webs/saas/uploads/cert/2021-5-24/1621842356285.png']
        }
      ]
    }
  },
  methods: {
    handlePreview(imgs) {
      console.log(imgs)
      imgPreview.$imgPreview(imgs)
    }
  }
}
</script>
<style scoped lang="scss">
.images-show-item {
  float: left;
  width: 100px;
  margin-right: 20px;
  img {
    width: 100px;
  }
}
</style>
