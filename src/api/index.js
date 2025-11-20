import axios from 'axios'
import { CONFIG } from '../config'

// 请求拦截器
axios.interceptors.request.use(config => {
    console.log("请求拦截器：", config)
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

const request = ({ url = "", method = "get", data = {}, timeout = 1000 }) => {
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