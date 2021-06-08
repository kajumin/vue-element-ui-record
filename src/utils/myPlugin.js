import { Button, Form, FormItem, Input, Upload, Scrollbar, Dialog, Carousel, CarouselItem, Tree, Select, OptionGroup, Option, Cascader } from 'element-ui'

export default {
  install: function(Vue) {
    Vue.component(Input.name, Input)
    Vue.component(Form.name, Form)
    Vue.component(FormItem.name, FormItem)
    Vue.component(Upload.name, Upload)
    Vue.component(Select.name, Select)
    Vue.component(Cascader.name, Cascader)
    Vue.component(OptionGroup.name, OptionGroup)
    Vue.component(Option.name, Option)
    Vue.component(Button.name, Button)
    Vue.component(Scrollbar.name, Scrollbar)
    Vue.component(Dialog.name, Dialog)
    Vue.component(Carousel.name, Carousel)
    Vue.component(Tree.name, Tree)
    Vue.component(CarouselItem.name, CarouselItem)
  }
}
