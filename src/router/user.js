const Layout = () => import('../view/layout/Layout.vue')
const List = () => import('../view/user/List.vue')
const Test = () => import('../view/user/Test.vue')

const userRoutes = {
    path: '/user',
    component: Layout,
    children: [
        {
            path: 'list',
            component: List,
        },
        {
            path: 'test',
            component: Test,
        },
    ],
}

export default userRoutes
