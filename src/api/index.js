import axios from 'axios'

const request = (url = "", method = "get", data = {}, timeout = 1000) => {
    console.log("使用封装函数去处理请求")

    return new Promise((resolve, reject) => {
        console.log("使用axios去请求接口")
        const methodCast = method.toLowerCase()

        if (methodCast === 'get') {
            axios({
                url: url,
                params: data,
                timeout: timeout,
            }).then(response => {
                resolve(response.data)
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
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        }
    })
}

export default request