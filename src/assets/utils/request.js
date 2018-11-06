import Axios from 'axios'
import qs from 'qs'
let host = 'http://localhost:8899/'

Axios.defaults.baseURL = host
Axios.defaults.credentials = 'include'
Axios.defaults.headers['Accept'] = 'application/json'
Axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('blog_token') || ''}`

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(
  config => {
    // 在发送请求之前做某件事
    if (config.headers['Content-Type'] === 'application/json') {
      config.data = JSON.stringify(config.data)
    } else if (config.method === 'post' && (config.headers['Content-Type'] === undefined || config.headers['Content-Type'] === '')) {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    }
    return config
  },
  error => {
    return Promise.reject(error)
    //  _.toast("错误的传参", 'fail');
    // return Promise.reject(error);
  }
)

Axios.interceptors.response.use(response => {
  let res = response.data
  if (res.error) {
    location.href = location.orign + '/login'
  } else {
    if (res.code === 0) {
    // 返回正常
      return res
    } else if (res.code === 401) {
    // 异常处理
      return res
    }
  }
})
let request = config => {
  if (config.mock) {
    return new Promise((resolve) => {
      setTimeout(resolve(config.mock), 500)
    })
  } else {
    // 默认get请求
    return Axios[config.meth || 'get'](config.url, {data: config.data})
  }
}
export default request
