import { ref } from 'vue'
import router from '../router/index.js'
import { showError, showWarning } from '../util/message.js'

/**
 * 统一的请求处理函数（基于 Composition API）
 * @param {Function} requestFn - 一个返回 Promise 的请求函数，比如 () => axios.get(...) 或你自己的 request(...)
 * @returns {{ loading: Ref<boolean>, error: Ref<any>, execute: Function }}
 */
export const handleRequest = requestFn => {
    const loading = ref(false) // loading 状态
    const error = ref(null) // 错误对象，可用于展示详细错误

    // 执行请求并处理 loading / 错误 / 401 等
    const execute = async () => {
        loading.value = true
        error.value = null
        try {
            const res = await requestFn() // 调用传入的请求函数
            return res
        } catch (err) {
            error.value = err
            if (err.isTimeout) {
                // 处理超时错误
                showError(err.userFriendlyMessage || '请求超时，请稍后重试')
            } else if (err.isUnauthorized) {
                // 处理 HTTP 401：未授权，提示并跳转登录
                showWarning('登录已过期，请重新登录')
                setTimeout(() => {
                    router.push('/login')
                }, 1500)
            } else {
                // 其它错误，统一提示
                const status = err.response?.status
                showError(status ? `请求失败，状态码：${status}` : '网络或请求异常，请稍后重试')
            }

            // 可以选择是否将错误继续抛出，如果调用方还想额外处理
            throw err
        } finally {
            loading.value = false
        }
    }

    return {
        loading, // loading 状态，可在模板中绑定
        error, // 错误对象，可用于展示错误详情
        execute, // 执行请求的方法
    }
}
