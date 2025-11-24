console.log('获取环境变量：', import.meta.env)
const BASE_URL = import.meta.env.VITE_BASE_URL

// 用来放项目的配置信息
export const API_CONFIG = {
    LoginAPI: `${BASE_URL}/auth/login`,
    LogoutAPI: `${BASE_URL}/auth/logout`,
    userListAPI: `${BASE_URL}/user/list`,
    DelteUserAPI: `${BASE_URL}/user/delete`,
    AddUserAPI: `${BASE_URL}/user/add`,
    UpdateUserAPI: `${BASE_URL}/user/update`,
}

export const CONFIG = {
    TOKEN_NAME: `Authorization`,
}
