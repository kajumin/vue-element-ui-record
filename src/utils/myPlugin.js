import {
  Button,
  Form,
  FormItem,
  Input,
  Upload,
  Scrollbar,
  Dialog,
  Carousel,
  CarouselItem,
  Tree,
  Select,
  OptionGroup,
  Option,
  Cascader,
  Table,
  TableColumn,
  CheckboxGroup,
  Checkbox,
  Tag,
  CascaderPanel,
  Pagination,
  Message
} from 'element-ui'
import NoData from '@/components/no-data/NoData.vue'
import MPagination from '@/components/pagination/Pagination.vue'

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
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
    Vue.component(CheckboxGroup.name, CheckboxGroup)
    Vue.component(Checkbox.name, Checkbox)
    Vue.component(Tag.name, Tag)
    Vue.component(Pagination.name, Pagination)
    Vue.component(CascaderPanel.name, CascaderPanel)
    Vue.prototype.$message = Message
    // 自定义组件
    Vue.component(NoData.name, NoData)
    Vue.component(MPagination.name, MPagination)
  }
}
