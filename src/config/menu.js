export const MENU_CONFIG = [
    {
        name: ' 用户管理',
        icon: 'iconfont icon-yonghuguanli',
        index: '/user',
        item: [
            {
                name: '用户列表',
                icon: '',
                index: '/user/list',
            },
            {
                name: '添加用户',
                icon: '',
                index: '/user/add',
            },
        ],
    },
    {
        name: ' API管理',
        icon: 'iconfont icon-APIguanli-01',
        index: '/api',
        children: [
            {
                name: '接口管理',
                icon: 'iconfont icon-APIguanli',
                item: [
                    {
                        name: '接口版本管理',
                        icon: '',
                        index: '/api/version',
                    },
                    {
                        name: '接口文档',
                        icon: '',
                        index: '/api/document',
                    },
                    {
                        name: '接口测试',
                        icon: '',
                        index: '/api/test',
                    },
                ],
            },
        ],
    },
]
