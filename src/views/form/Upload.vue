<template>
  <div class="upload-wrap">
    <el-form v-model="formData">
      <el-form-item
        class="fix-update-upload"
        label="附件预览"
        label-width="104px"
      >
        <el-upload
          ref="add-upload"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :file-list="formData.updateFileList"
          :on-change="handleFileChange"
          :on-remove="handleRemove"
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
    <img class="show-image" :src="formData.imageURI" />
    <el-button @click="clearFiles">清除</el-button>
  </div>
</template>
<script>
import config from '@/api/config.js'
import { uploadToQiniu, getQNToken } from '@/api/upload.js'
export default {
  data() {
    return {
      formData: {
        avatar: '',
        updateFileList: [],
        imageURI: '',
        token: ''
      }
    }
  },
  created() {
    // console.log('upload')
    console.log(config)
    setTimeout(() => {
      this.formData.updateFileList.push({
        url:
          'https://pic2.zhimg.com/v2-262af01c10ca972cd8cd4ab3b63a3d41_540x450.jpeg'
      })
    }, 2000)
  },
  methods: {
    clearFiles() {
      this.$refs['add-upload'].clearFiles()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
      console.log(this.formData.updateFileList)
    },
    handleFileChange(file) {
      console.log(file)
      this.file = file.raw
      console.log(this.formData.updateFileList)
    },
    submitForm() {
      getQNToken().then((res) => {
        console.log(res)
        if (res.code === 0) {
          console.log('获取到token')
          this.formData.token = res.data.token
          uploadToQiniu(config.qiniuDomain, res.data.token, this.file).then(
            (res) => {
              console.log(res)
              if (res.key) {
                this.imageURI = config.qiniuDomain + res.key
              }
            }
          )
        }
      })
    }
  }
}
</script>
<style scoped lang="scss"></style>
