import axios from 'axios'
import { getToken } from '@/utils/storage'

const baseURL = 'http://127.0.0.1:3000/'
const service = axios.create({
  timeout: 5000,
  baseURL
})

service.interceptors.request.use(
  config => {
    config.headers['Authorization'] = getToken()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// service.interceptors.response.use(
//   response => {
//     const res = response.data;
//     // 统一处理返回错误码，如 Token失效时提醒重新登录
//     // if (res.code !== 20000) {
//     //   Message({
//     //     message: res.message || 'Error',
//     //     type: 'error',
//     //     duration: 5 * 1000
//     //   })

//     //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//     //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {

//     //   }
//     //   return Promise.reject(new Error(res.message || 'Error'))
//     // } else {
//     //   return res
//     // }
//   },
//   error => {
//     // Any status codes that falls outside the range of 2xx cause this function to trigger
//     // Do something with response error
//     return Promise.reject(error);
//   }
// );

export default service
