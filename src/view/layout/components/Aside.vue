<template>
    <el-aside width="240px" style="border-right: 1px #cccccc solid">
        <!-- logo -->
        <div class="aside-logo">
            <router-link to="/">
                <el-button text style="font-size: 25px">
                    <el-icon :size="24" style="margin-right: 10px">
                        <MoonNight />
                    </el-icon>
                    管理后台
                </el-button>
            </router-link>
        </div>
        <!-- menu -->
        <div>
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" router>
                <el-sub-menu v-for="menu in MENU_CONFIG" :key="menu.index" :index="menu.index">
                    <template #title>
                        <el-icon>
                            <span :class="menu.icon" />
                        </el-icon>
                        <span>{{ menu.name }}</span>
                    </template>
                    <template v-if="menu.children">
                        <el-sub-menu v-for="(child, index) in menu.children" :key="child.index" :index="child.index">
                            <template #title>
                                <el-icon>
                                    <span :class="child.icon" />
                                </el-icon>
                                <span>{{ child.name }}</span>
                            </template>
                            <el-menu-item v-for="item in child.item" :key="item.index" :index="item.index">
                                <span :class="item.icon" />
                                <template #title>
                                    {{ item.name }}
                                </template>
                            </el-menu-item>
                        </el-sub-menu>
                    </template>
                    <template v-else>
                        <el-menu-item v-for="item in menu.item" :key="item.index" :index="item.index">
                            <el-icon>
                                <span :class="item.icon" />
                            </el-icon>
                            <template #title>
                                {{ item.name }}
                            </template>
                        </el-menu-item>
                    </template>
                </el-sub-menu>
            </el-menu>
        </div>
    </el-aside>
</template>

<script setup>
import { MoonNight } from '@element-plus/icons-vue'
import { MENU_CONFIG } from '../../../config/menu.js'
import '../../../assets/iconfont/iconfont.css'
</script>

<style lang="less" scoped>
.aside-logo {
    height: 50px;

    button {
        width: 100%;
        height: 100%;
    }
}
</style>
