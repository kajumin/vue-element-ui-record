<template>
  <div class="show-pdf">
    <pdf v-for="i in numPages" :key="i" :src="url" :page="i"></pdf>
  </div>
</template>
<script>
import pdf from 'vue-pdf'
export default {
  components: {
    pdf
  },
  data() {
    return {
      url: '',
      numPages: 1
    }
  },
  mounted: function() {
    this.getNumPages(
      'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf'
    )
  },
  methods: {
    getNumPages(url) {
      var loadingTask = pdf.createLoadingTask(url)
      console.log(loadingTask)
      console.log(Object.prototype.toString.call(loadingTask))
      loadingTask.promise
        .then((pdf) => {
          this.url = loadingTask
          this.numPages = pdf.numPages
        })
        .catch((err) => {
          console.log(err, 'pdf加载失败')
        })
    }
  }
}
</script>
<style scoped lang="scss">
.show-pdf {
  width: 600px;
  margin: 0 auto;
}
</style>
