<script setup>
import { reactive } from 'vue'
import { User,Lock } from '@element-plus/icons-vue'

const loginInfo = reactive({
    username: '',
    password: ''
});
</script>

<template>
    <el-card style="max-width: 480px" class="box-card">
        <h2>后台管理系统</h2>

        <el-form ref="ruleFormRef" style="max-width: 600px" :model="loginInfo" status-icon :rules="rules"
            label-width="auto" class="demo-ruleForm">
             <el-form-item label="Username" prop="username">
                <el-input v-model="loginInfo.username" :prefix-icon="User" clearable/>
            </el-form-item>
            <el-form-item label="Password" prop="password">
                <el-input v-model="loginInfo.password" type="password" autocomplete="off" :prefix-icon="Lock" clearable show-password/>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    登录
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<style scoped>
.text {
    font-size: 14px;
}

.item {
    padding: 18px 0;
}

.box-card {
    width: 480px;
}
</style>