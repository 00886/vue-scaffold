<template>
    <div>
        <el-header class="el-header">
            <el-button aria-label="折叠菜单">
                <el-icon :size="25"><span class="iconfont icon-appshouqi"></span></el-icon>
            </el-button>
            <el-button @click="handleLogout" aria-label="退出系统"
                ><el-icon :size="25"><span class="iconfont icon-dengchutuichuguanbi"></span></el-icon
            ></el-button>
        </el-header>
    </div>
</template>

<script setup>
import '../../../assets/iconfont/iconfont.css'
import { CONFIG } from '../../../config/index.js'
import { useRouter } from 'vue-router'
import { ElMessageBox } from 'element-plus'
import { showWarning } from '../../../util/message.js'

const router = useRouter()

const handleLogout = () => {
    ElMessageBox.confirm('确认退出吗？', '', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning',
    })
        .then(() => {
            // 移除token
            window.localStorage.removeItem(CONFIG.TOKEN_NAME)
            showWarning('退出成功')
            setTimeout(() => {
                router.replace('/login')
            }, 1500)
        })
        .catch(() => {})
}
</script>

<style lang="less" scoped>
.el-header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        border: 0;
    }
}
</style>
