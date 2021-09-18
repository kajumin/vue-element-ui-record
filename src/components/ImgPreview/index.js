import Vue from 'vue'
import ImgPreviewComponent from './ImgPreview.vue'

const createPreview = function(imgs) {
  const ImgConstructor = Vue.extend(ImgPreviewComponent)
  // propData 传递props数据
  const instance = new ImgConstructor({
    propsData: {
      imgs,
      isShow: true
    }
  }).$mount()

  document.body.appendChild(instance.$el)
  return instance
}

export default createPreview
