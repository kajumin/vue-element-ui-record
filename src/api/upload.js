import request from './request.js'
import * as qiniu from 'qiniu-js'
export function getQNToken() {
  return request.get('/enterprise/upload/token', {
    headers: {
      'x-app-domain': 'srcm.business-management',
      'x-app-source-type': 1,
      'x-access-token':
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkZWZhdWx0XzYwOTY4NzhmMTg5MGMyNTdlMjcxNWNlMiIsImlhdCI6MTYyMDczMTI4NSwibmJmIjoxNjIwNzMxMjg1LCJleHAiOjE2MjA3Mzg0ODUsImFwcF9pZCI6IjYwOTY4NzhmY2QwNGYyNWY1YjBkZDU5OCIsInVzZXJfaWQiOiI2MDk2ODc4ZjE4OTBjMjU3ZTI3MTVjZTIiLCJ1c2VybmFtZSI6ImFkbWluIiwibW9iaWxlIjoiMTU2MDcwMDg4NjMiLCJhY2NvdW50X3R5cGUiOiJhcHBfYWRtaW4iLCJqd3Rfc2NlbmUiOiJkZWZhdWx0In0.dzvGGeD_L0CrVkh_0_4C0-R6To8NTmZaNebYILIyECA'
    }
  })
}
/**
 * qiniu 上传实现
 * (1)从后端接口中获取到token值
 * (2)token files domain三个参数 外加生成一个key(取文件名, 可以加上路径, 不能保留原来的文件扩展名)
 * @param {*} file
 * @returns
 */
export function transferImgToBase64WithoutHead(file) {
  return new Promise((resolve, reject) => {
    if (typeof FileReader === 'undefined') {
      alert('您的浏览器不支持图片上传，请升级您的浏览器')
      return false
    }
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      // 这里是唯一的区别，把转换后的base64编码的前面那一部分字符串去掉，参见下图，七牛只接受这样的格式作为body
      const result = e.target.result.replace(/^data:image\/\w+;base64,/, '')
      resolve(result)
    }
    reader.onerror = (err) => {
      reject(err)
    }
  })
}

export async function uploadToQiniu(qiniuDomain, token, file) {
  // const key = new Date().getTime() + file.name.replace(/.*\./, '.')
  const d = new Date()
  // filename替换很重要
  const key = 'webs/saas/uploads/cert/' + d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + '/' + d.getTime() + file.name.replace(/.*\./, '.')
  const config = {
    // useCdnDomain: true,
    region: qiniu.region.z2, // z2华南
    uptoken: token,
    domain: qiniuDomain, // 配置好的七牛云域名 如https://cdn.qniyun.com/
    unique_names: true
  }
  const putExtra = {
    // fname: file.name,
    // params: {},
    // mimeType: [] || null
    ...config
  }
  const observable = qiniu.upload(file, key, token, putExtra, config)
  return new Promise((resolve, reject) => {
    const observer = {
      error: function(err) {
        reject(err)
      },
      complete: function(data) {
        resolve(data)
      }
    }
    const subscription = observable.subscribe(observer)
    console.log(subscription)
  })
}
