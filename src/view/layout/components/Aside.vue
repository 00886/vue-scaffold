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