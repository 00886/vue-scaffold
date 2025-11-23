const Layout = () => import('../view/layout/Layout.vue')
const List = () => import('../view/user/List.vue')
const Add = () => import('../view/user/Add.vue')

const userRoutes = {
    path: '/user',
    component: Layout,
    children: [
        {
            path: 'list',
            component: List,
        },
        {
            path: 'add',
            component: Add,
        },
    ],
}

export default userRoutes
