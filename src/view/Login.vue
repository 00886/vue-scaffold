<script setup>
import { reactive, ref, watch } from 'vue'
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '../api/login.js'
import { CONFIG } from '../config/index.js'
import { showSuccess } from '../util/message.js'
import { useRouter } from 'vue-router'

const router = useRouter()

const loginInfo = reactive({
    username: '',
    password: ''
})

const loginRef = ref()
const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 1, max: 10, message: '长度在1到10个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 1, max: 10, message: '长度在1到10个字符', trigger: 'blur' },
    ],
})

const loginButtonDisabled = ref(true)

// 监听用户名和密码的变化，动态设置登录按钮的禁用状态
watch(
    [() => loginInfo.username, () => loginInfo.password],
    () => {
        loginRef.value.validate(valid => {
            loginButtonDisabled.value = !valid
        })
    }
)

const submitForm = () => {
    login(loginInfo.username, loginInfo.password).then(res => {
        // console.log('登录成功', res)
        if (res.data.code === 0) {
            // 登录成功
            // 存储token到本地存储
            const token = res.data.data.token
            window.localStorage.setItem(CONFIG.TOKEN_NAME, token)
            
            showSuccess('登录成功')
            
            // 跳转到首页
            setTimeout(() => {
                router.replace('/dashboard')
            }, 1000)
        }
    }).catch(err => {
        console.log('登录失败', err)
    })
}
</script>

<template>
    <el-card style="max-width: 480px" class="box-card">
        <h2>后台管理系统</h2>

        <el-form ref="loginRef" style="max-width: 600px" :model="loginInfo" status-icon :rules="rules"
            label-width="auto" class="demo-ruleForm">
            <el-form-item label="" prop="username" class="form-item">
                <el-input v-model="loginInfo.username" :prefix-icon="User" clearable />
            </el-form-item>
            <el-form-item label="" prop="password" class="form-item">
                <el-input v-model="loginInfo.password" type="password" autocomplete="off" :prefix-icon="Lock" clearable
                    show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm()" :disabled="loginButtonDisabled" style="margin: 10px auto 10px auto;">
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

.form-item {
    width: 240px;
    margin: 20px auto 10px auto;
}
</style>