import { createWebHistory, createRouter, } from 'vue-router'

const indexRoute = {
    path:'/',
    component: () => import('../view/Index.vue'),
}
const routes = [
    indexRoute,
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router