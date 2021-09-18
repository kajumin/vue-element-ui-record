import axios from 'axios'
// import store from '@/store/index.js'
import config from './config.js'

const service = axios.create({
  baseURL: config.base_url,
  timeout: 10000,
  // 请求超时时间
  auth: { username: 'dev', password: 'dev' }
})

service.interceptors.request.use(
  config => {
    // 这里定义一些config配置
    // console.log(config)
    // loading + 1
    // store.dispatch('SetLoading', true)
    config.headers['x-app-domain'] = 'srcm.enterprise.web.dev.feibaos.cn'
    config.headers['x-access-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJkZWZhdWx0XzYwOTY4NzhmMTg5MGMyNTdlMjcxNWNlMiIsImlhdCI6MTYyOTA5NTQ5OCwibmJmIjoxNjI5MDk1NDk4LCJleHAiOjE2MjkxODE4OTgsImFwcF9pZCI6IjYwOTY4NzhmY2QwNGYyNWY1YjBkZDU5OCIsInVzZXJfaWQiOiI2MDk2ODc4ZjE4OTBjMjU3ZTI3MTVjZTIiLCJ1c2VybmFtZSI6ImFkbWluIiwibW9iaWxlIjoiMTUyMTc2MTExNzYiLCJhY2NvdW50X3R5cGUiOiJhcHBfYWRtaW4iLCJqd3Rfc2NlbmUiOiJkZWZhdWx0In0.BfofFxhoohn0WDT08z1cc4CFDcFBGoLtmicpeC92jJM'
    return config
  },
  error => {
    // 这里处理一些请求错误的情况
    // loading 清 0
    // setTimeout(function () {
    //   store.dispatch('SetLoading', 0)
    // }, 300)

    console.log(error)
    Promise.reject(error)
  }
)
service.interceptors.response.use(
  response => {
    // 这里定义一些config配置
    const res = response.data
    // token失效, 未登陆, 跳转到登陆页面
    // if (res.code === 10011) {
    //   const href = encodeURI(location.href)
    //   location.href = config.login_url + '?redirect=' + href + '&&app_type=1'
    // }
    // 处理一些response正常放回时的逻辑
    // loading - 1
    // store.dispatch('SetLoading', false)
    // console.log(response)
    // 获取用户信息 主动报错, 方便测试
    // if (response.data.data.token) {
    //   throw new Error('Uh-oh!')
    // }
    return res
  },
  error => {
    // 这里处理一些reponse出错时的逻辑
    // loading - 1
    // store.dispatch('SetLoading', false)
    // console.log(error)
    return Promise.reject(error)
  }
)
export default service
