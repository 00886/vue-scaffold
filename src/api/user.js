import { API_CONFIG } from '../config/index.js'
import request from './index.js'

export const fetchUserList = () => {
    return request({
        url: API_CONFIG.userListAPI,
    })
}

export const deleteUser = id => {
    return request({
        url: API_CONFIG.DelteUserAPI,
        data: { id },
    })
}

export const addUser = data => {
    return request({
        url: API_CONFIG.AddUserAPI,
        method: 'POST',
        data,
    })
}
