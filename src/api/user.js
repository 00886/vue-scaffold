import { API_CONFIG } from '../config/index.js'
import request from './index.js'

export const userList = () => {
    return request({
        url: API_CONFIG.userListAPI,
    })
}
