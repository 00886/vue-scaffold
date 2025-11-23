import axios from 'axios'
import { CONFIG } from '../config'
import router from '../router/index.js'

// 请求拦截器
axios.interceptors.request.use(config => {
    // console.log("请求拦截器：", config)
    // 在发送请求之前做些什么，比如添加token
    let timestamp = Date.now()
    if (config.method === 'get') {
        if (!config.params) {
            config.params = {}
        }
        config.params.timestamp = timestamp
    }

    // 添加token到请求头
    config.headers.set(CONFIG.TOKEN_NAME, window.localStorage.getItem(CONFIG.TOKEN_NAME) || '')
    return config
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
    // console.log("响应拦截器：", response)
    // 对响应数据做点什么，比如统一处理错误码

    return response
}, error => {
    if(error.code === 'ECONNABORTED') {
        // 超时错误，标记出来，由调用方处理 UI 提示
        error.isTimeout = true
        error.userFriendlyMessage = '请求超时，请稍后重试'
        // console.error('[API请求超时]',
        //     {
        //         url: error.config.url,
        //         error: error.message,
        //         stack: error.stack,
        //         timestamp: Date.now(),
        //         params: error.config.params,
        //         data: error.config.data,
        //     },
        // )
    }else if (error.response){
        const res = error.response
        if (res.status === 401) {
            // 未授权，标记并清理（可在调用方处理跳转和 token 清理）
            error.isUnauthorized = true
            error.userFriendlyMessage = '登录已过期，请重新登录'
            setTimeout(() => {
                router.push('/login')
            }, 1500)
        } else if(res.status === 403){
            // 权限不足
            error.userFriendlyMessage = '权限不足，请联系管理员'
            // console.error(
            //     '[API请求失败]',
            //     {
            //         url: error.config.url,
            //         error: error.message,
            //         stack: error.stack,
            //         timestamp: Date.now(),
            //         params: error.config.params,
            //         data: error.config.data,
            //     },
            // )
        }else if(res.status === 404){
            error.userFriendlyMessage = '请求的资源不存在'
        }else if(res.status === 500){
            error.userFriendlyMessage = '服务器错误，请稍后重试'
        }else{
            error.userFriendlyMessage = `请求失败，状态码：${res.status}`
        }
    }else {
        // 网络错误或其它未知错误
        error.userFriendlyMessage = '服务不可用，请稍后重试'
    }
    return Promise.reject(error)
})

const request = ({ url = '', method = 'get', data = {}, timeout = 1000}) => {
    // console.log("使用封装函数去处理请求")
    return new Promise((resolve, reject) => {
    // console.log("使用axios去请求接口")
        const methodCast = method.toLowerCase()

        if (methodCast === 'get') {
            axios({
                url: url,
                params: data,
                timeout: timeout,
            }).then(response => {
                // console.log("get", response)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        } else if (methodCast === 'post') {
            axios({
                url: url,
                method: methodCast,
                data: data,
                timeout: timeout,
            }).then(response => {
                // console.log("post", response)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        }
    })
}

export default request
