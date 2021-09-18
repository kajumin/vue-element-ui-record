<template>
  <div class="margin-xs">
    <el-form :rules="formRules" :model="addForm" :status-icon="false">
      <el-form-item label="密码" prop="password" label-width="104px">
        <el-input :type="password.type" v-model="addForm.password" placeholder="请输入密码"></el-input>
        <i :class="password.icon" @click="changePasswordIcon"></i>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formRules: {
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      addForm: {
        password: ''
      },
      password: {
        icon: 'fa fa-eye-slash',
        type: 'password'
      }
    }
  },
  methods: {
    changePasswordIcon() {
      this.password.icon = this.password.icon === 'fa fa-eye' ? 'fa fa-eye-slash' : 'fa fa-eye'
      this.password.type = this.password.type === 'password' ? 'input' : 'password'
    }
  }
}
</script>
<style scoped lang="scss">
.el-form /deep/ {
  width: 300px;
  .fa-eye,
  .fa-eye-slash {
    position: absolute;
    margin-left: -35px;
    margin-top: 6px;
    padding: 5px;
    font-size: 20px;
    color: #999;
    cursor: pointer;
    &:hover {
      color: #666;
    }
  }
}
// .flex {
//   display: flex;
// }
// @for $i from 1 through 3 {
//   .flex-#{$i} {
//     flex: $i;
//     }
// }
// $justify: ('justify-start': flex-start, 'justify-end': flex-end, 'justify-center': center, 'justify-between':  space-between, 'justify-around': space-around);
// @each $key, $value in $justify {
//   .#{$key} {
//     justify-content: $value;
//   }
// }

// $text-align: left, center, right;
// @each $value in $text-align {
//   .text-#{$value} {
//     text-align: $value;
//   }
// }
// $align-items: ('align-start': flex-start, 'align-center': center, 'align-end': flex-end, 'align-stretch':  stretch);
// @each $key, $value in $align-items {
//   .#{$key} {
//     align-items: $value;
//   }
// }

$map: ('color-rimary': #33cfc2, 'color-dark-blur': #2988f2, 'color-peacock-blue': #3045ff);
@each $variables, $value in $map {
  .#{$variables} {
    color: $value;
  }
  .icon {
    content: $variables;
    font-size: $value;
  }
  // .#{$animal}-icon {
  //   background-image: url('/images/#{$animal}.png');
  // }
}
</style>
