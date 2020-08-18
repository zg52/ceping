// import request from '@/utils/request'
import axios from 'axios'

// // 超时时间
// axios.defaults.timeout = 5000
// // http请求拦截器
// let loadinginstace
// axios.interceptors.request.use(config => {
//    // element ui Loading方法
//    loadinginstace = Loading.service({ fullscreen: true })

//    return config
// }, error => {
//    loadinginstace.close();

// 　　return Promise.reject(error)
// })

// // http响应拦截器
// axios.interceptors.response.use(data => {
//    // 响应成功关闭loading
//    loadinginstace.close();
// 　　const code = data.data.code;
// 　　if(code == 501) {  
// 　　}

// 　　return data
// }, error => {
//    loadinginstace.close();
// 　　const code = error.data.code;
// 　　// 此处判断拦截需要处理的错误状态码并处理
// 　　if(code == 502) {
// 　　
// 　　}
// 　　return Promise.reject(error)
// })

 
 
/*
 * @export
 * @param {*} data
 * @returns
 */
let URL = 'https://bj.wdzxx.com'  //https://bj.wdzxx.com
export function getList (data) {
  return axios({
    url: URL + '/getList',
    method: 'get',
    data
  })
}
