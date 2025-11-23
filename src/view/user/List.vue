<template>
    <el-card v-loading="loading" element-loading-text="努力加载中..." style="max-width: 100%">
        <template #header>
            <div class="card-header">
                <span>用户列表</span>
                <div>
                    <el-button text @click="addUserDialogVisible">添加用户</el-button>
                    <el-button text @click="">批量删除</el-button>
                </div>
            </div>
        </template>


        <el-table ref="multipleTableRef" :data="userData" row-key="id" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="id" label="Id" width="120" />
            <el-table-column prop="username" label="Username" width="120" />
            <el-table-column prop="password" label="Password" width="120" />
            <el-table-column prop="sex" label="Sex" width="120" />
            <el-table-column prop="phone" label="Phone" />
            <el-table-column prop="city" label="City" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" text type="primary" @click="handleEdit(scope.$index, scope.row)">
                        编辑
                    </el-button>
                    <el-button size="small" type="danger" text @click="handleDeleteUser(scope.row.id)">
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog v-model="addUserDialog" title="添加用户" width="500">
            <Add></Add>
        </el-dialog>
    </el-card>


</template>


<script setup>
import { onBeforeMount, reactive, ref, toRefs } from 'vue'
import { fetchUserList, deleteUser } from '../../api/user.js'
import { showError, showSuccess } from '../../util/message.js'
import { ElMessageBox } from 'element-plus'
import Add from './Add.vue'

// 加载状态
const loading = ref(false)

onBeforeMount(() => {
    handleUserList()
})

const data = reactive({
    userData: [],
})

const { userData } = toRefs(data)

// 获取用户列表
const handleUserList = () => {
    loading.value = true
    fetchUserList().then((res) => {
        data.userData = res.data.data
        // 关闭加载状态
        loading.value = false
    }).catch((err) => {
        // 关闭加载状态
        loading.value = false
        showError(err.userFriendlyMessage)
    })
}

// 删除用户
const handleDeleteUser = (id) => {
    ElMessageBox.confirm(
        `确认删除 ${id} 的用户吗？`,
        '',
        {
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        deleteUser(id).then((res) => {
            showSuccess('删除成功')
            handleUserList()
        })
    }).catch(() => { })
}

const addUserDialog = ref(false)

const addUserDialogVisible = () => {
    addUserDialog.value = true
}
</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>