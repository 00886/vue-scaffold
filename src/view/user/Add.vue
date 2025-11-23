<template>
    <div>
        <el-form :ref="userFormRef" :model="userForm">
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
            <el-button>清空</el-button>
            <el-button type="primary">
                提交
            </el-button>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref, toRefs } from 'vue'
import { ElForm } from 'element-plus'

const data = reactive({
    userForm: {
        username: '',
        password: '',
        sex: '',
        phone: '',
        city: '',
    }
})

const userFormRef = ref()
const { userForm } = toRefs(data)
const formLabelWidth = '100px'
</script>

<style scoped></style>