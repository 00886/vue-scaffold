import { API_CONFIG } from '../config/index.js'
import request from './index.js'

export const login = (username, password) => {
    return request({
        url: API_CONFIG.LoginAPI,
        method: 'post',
        data: {
            username,
            password,
        },
    })
}
