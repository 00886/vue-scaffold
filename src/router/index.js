import { createWebHistory, createRouter } from 'vue-router'

const indexRoute = {
    path: '/',
    component: () => import('../view/Index.vue'),
}
const routes = [
    indexRoute,
    { path: '/login', component: () => import('../view/Login.vue') },
    { path: '/dashboard', component: () => import('../view/Dashboard.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
