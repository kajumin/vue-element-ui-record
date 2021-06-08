import Vue from 'vue'
import ImgPreviewComponent from './ImgPreview.vue'

const ImgConstructor = Vue.extend(ImgPreviewComponent)
const instance = new ImgConstructor()

instance.$mount(document.createElement('div'))

document.body.appendChild(instance.$el)

instance.$imgPreview = (imgs) => {
  instance.imgs = imgs
  instance.isShowImageDialog = true
}

export default instance
