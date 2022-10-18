import axios from 'axios'
import { ElMessage } from 'element-plus'
// import store from '@/store'
import { getToken, removeToken, removeUserInfo } from '../utile/myAuth.js'
import router from '../router/index.js'

// create an axios instance
const service = axios.create({
  baseURL: 'http://leju.bufan.cloud', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (config.method.toLowerCase() === 'get') {
      config.params = config.data
    }
    config.headers['token'] = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
 
  response => {
    const res = response.data
    // console.log(res)
    if (res.success) {
      return res
    } else {
      if (res.code === 20002) {
        ElMessage({
          message: '登录过期，请重新登录',
          type: 'error',
          duration: 5 * 1000
        })
        // 清除本地信息
        removeToken()
        removeUserInfo()
        // 跳转登录页面
        //  由于在这里 this 指向的不是 路由实例， 所以不能用 this.$router 需要将路由实例引入  router文件夹的index.js文件
        router.push('/login')
      } else {
        ElMessage({
          message: res.message || 'Error',
          type: 'error',
          duration: 5 * 1000
        })
      }
    }
  },
  error => {
    console.log('err' + error) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
