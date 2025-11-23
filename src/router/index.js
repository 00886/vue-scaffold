import { createWebHistory, createRouter } from 'vue-router'
import { CONFIG } from '../config/index.js'
import userRoutes from './user.js'

const routes = [
    userRoutes,
    { path: '/login', component: () => import('../view/Login.vue') },
    { path: '/dashboard', component: () => import('../view/Dashboard.vue') },
    { path: '/', component: () => import('../view/layout/Layout.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

/*
 全局导航守卫：基于本地存储中的 token 做简单的路由拦截和重定向

 逻辑说明：
 1. 读取本地存储中的 token（通过 CONFIG.TOKEN_NAME 指定的键）。
 2. 若没有 token：
    - 若目标路由不是 /login，重定向到 /login（强制用户登录）。
    - 若目标是 /login，允许访问。
 3. 若有 token：
    - 若目标是 /login 或根路径 /，重定向到 /dashboard（避免已登录用户访问登录页或根页）。
    - 其他情况允许访问目标路由。
*/
router.beforeEach((to, from, next) => {
    const token = window.localStorage.getItem(CONFIG.TOKEN_NAME)
    if (!token) {
        if (to.path !== '/login') {
            // 没有token，并且未访问/login
            next('/login')
            return
        }
        // 访问了/login
        next()
    } else {
        if (to.path === '/login') {
            // 有token，并且访问了/login
            next('/')
            return
        }
        next()
    }
})

export default router
