import { defineStore } from 'pinia'

//  `defineStore()` 的返回值的命名是自由的
// 但最好含有 store 的名字，且以 `use` 开头，以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useStoreDemo = defineStore('storeDemo', {
    // 其他配置...
    state: () => {
        return {
            msg: 'hello pinia store',
        }
    },
    getters: {},
    actions: {
        changeStoreDemo(value) {
            this.msg = value
        },
    },
})
