<template>
  <div class="upload">
    <el-form v-model="addCertForm">
      <el-form-item
        class="fix-update-upload"
        label="附件预览"
        label-width="104px"
      >
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :file-list="addCertForm.updateFileList"
          :on-change="handleFileChange"
          :auto-upload="false"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </el-form-item>
      <el-form-item class="fix-footer-btn">
        <el-button class="cancel" @click="dialogFormVisible3 = false"
          >取消</el-button
        >
        <el-button size="medium" @click="submitForm">上传</el-button>
      </el-form-item>
    </el-form>
    <img class="show-image" :src="imageURI">
  </div>
</template>
<script>
import config from '@/api/config.js'
import { uploadToQiniu, getQNToken } from '@/api/upload.js'
export default {
  data() {
    return {
      addCertForm: {
        avatar: '',
        updateFileList: [
          {
            url:
              'https://pic2.zhimg.com/v2-262af01c10ca972cd8cd4ab3b63a3d41_540x450.jpeg'
          }
        ]
      },
      token: '',
      key: null,
      imageURI: ''
    }
  },
  created() {
    // console.log('upload')
    console.log(config.qiniuDomain)
  },
  methods: {
    handleFileChange(file) {
      console.log(file)
      this.file = file.raw
    },
    submitForm() {
      // 如何生成预览图，相信不用再说了吧
      // 如何生成`files`，也不用我说了吧
      // `sendRequest`是我们自己封的请求API，向后端请求key和token
      getQNToken().then((res) => {
        console.log(res)
        if (res.code === 0) {
          console.log('获取到token')
          this.token = res.data.token
          uploadToQiniu(config.qiniuDomain, res.data.token, this.file).then((res) => {
            console.log(res)
            if (res.key) {
              this.imageURI = config.qiniuDomain + res.key
            }
          })
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
.upload {
  width: 800px;
  margin: auto;
}
</style>
