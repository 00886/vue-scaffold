<template>
    <div>
        <el-form ref="userFormRef" :model="userForm" :rules="rules">
            <el-form-item prop="username" label="用户名：" :label-width="formLabelWidth">
                <el-input v-model="userForm.username" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="password" label="密码：" :label-width="formLabelWidth">
                <el-input v-model="userForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="sex" label="性别：" :label-width="formLabelWidth">
                <el-select v-model="userForm.sex" placeholder="请选择">
                    <el-option label="男" value="男" />
                    <el-option label="女" value="女" />
                </el-select>
            </el-form-item>
            <el-form-item prop="phone" label="电话：" :label-width="formLabelWidth">
                <el-input v-model="userForm.phone" autocomplete="off" />
            </el-form-item>
            <el-form-item prop="city" label="城市：" :label-width="formLabelWidth">
                <el-input v-model="userForm.city" autocomplete="off" />
            </el-form-item>
        </el-form>
        <div class="dialog-footer">
            <el-button @click="clearForm"> 清空 </el-button>
            <el-button type="primary" @click="submitForm"> 提交 </el-button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
import { ElForm } from 'element-plus'
import { addUser } from '../../api/user.js'
import { showError, showSuccess } from '../../util/message'

const data = reactive({
    userForm: {
        username: '',
        password: '',
        sex: '',
        phone: '',
        city: '',
    },
})

const userFormRef = ref()
const { userForm } = toRefs(data)
const formLabelWidth = '100px'

const rules = reactive({
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 1, max: 10, message: '长度在1到10个字符', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 1, max: 10, message: '长度在1到10个字符', trigger: 'blur' },
    ],
    sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
    phone: [
        { required: true, message: '请输入电话', trigger: 'blur' },
        { min: 1, max: 15, message: '长度在1到15个字符', trigger: 'blur' },
    ],
    city: [
        { required: true, message: '请输入城市', trigger: 'blur' },
        { min: 1, max: 20, message: '长度在1到20个字符', trigger: 'blur' },
    ],
})

// 清空表单
const clearForm = () => {
    userFormRef.value.resetFields()
}

// 提交表单
const submitForm = () => {
    userFormRef.value.validate(valid => {
        if (valid) {
            // 提交表单逻辑
            addUser(userForm.value)
                .then(res => {
                    if (res.data.code === 0) {
                        showSuccess('用户添加成功')
                        clearForm()
                    } else {
                        showError(res.data.message)
                    }
                })
                .catch(err => {
                    console.log('添加用户出错:', err)
                })
        } else {
            return false
        }
    })
}
</script>

<style scoped></style>
