<template>
    <el-aside width="240px" style="border-right: 1px #cccccc solid;">
        <!-- logo -->
        <div class="aside-logo">
            <router-link to="/">
                <el-button text style="font-size: 25px;">
                    <el-icon :size="24" style="margin-right: 10px;">
                        <MoonNight />
                    </el-icon>
                    管理后台
                </el-button>
            </router-link>
        </div>
        <!-- menu -->
        <div>
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-sub-menu index="/user">
                    <template #title>
                        <el-icon>
                            <location />
                        </el-icon>
                        <span>用户管理</span>
                    </template>
                    <el-menu-item index="/user/list">
                        <el-icon><icon-menu /></el-icon>
                        <template #title>用户列表</template>
                    </el-menu-item>
                    <el-menu-item index="/user/add">
                        <el-icon><icon-menu /></el-icon>
                        <template #title>添加用户</template>
                    </el-menu-item>
                </el-sub-menu>
                <el-menu-item index="/asset">
                    <el-icon><icon-menu /></el-icon>
                    <template #title>资产管理</template>
                </el-menu-item>
            </el-menu>
        </div>
    </el-aside>
</template>

<script setup>
import { MoonNight } from '@element-plus/icons-vue'
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