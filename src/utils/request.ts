import axios, { AxiosError, type Method } from 'axios'
import { useUserStore } from '../stores'
import { showToast, showFailToast } from 'vant'
import router from '@/router'
const baseURL = 'https://consult-api.itheima.net/'
const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000
})
instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const store = useUserStore()
    if (store.user?.token && config.headers) {
      config.headers.Authorization = `Bearer ${store.user?.token}`
    }
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => {
    // eslint-disable-next-line no-debugger
    if (response.data?.code !== 1000 && response.data.success === false) {
      return Promise.reject(showFailToast(response.data?.message || '业务失败'))
    }
    return response.data
  },
  (error) => {
    // Do something with response error
    if (error.response.status === 401) {
      const store = useUserStore()
      store.delUser()
      router.push({
        path: '/login',
        query: { url: router.currentRoute.value.fullPath }
      })
    }
    return Promise.reject(error)
  }
)

type Data<T> = {
  code: number
  message: string
  data: T
}
const request = <T>(
  url: string,
  method: Method = 'GET',
  submitData?: Object
) => {
  return instance.request<T, Data<T>>({
    url,
    method,
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
export { instance, request, baseURL }
