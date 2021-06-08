import qiniu from 'qiniu'
// const qiniu = require('qiniu')
const accessKey = 'AySqDg4cCOdjOHqI9VtGoF8Iqca2cCIqoarRVjvf'
const secretKey = 'bTO46bmjKeVgL21phTS89ZhiLO4tvZ6sOXElBskZ'
const bucket = 'develop'

const mac = new qiniu.auth.digest.Mac(accessKey, secretKey)

const options = {
  scope: bucket
}
const putPolicy = new qiniu.rs.PutPolicy(options)
const uploadToken = putPolicy.uploadToken(mac)
console.log(uploadToken)

// export default {
//   uploadToken
// }
