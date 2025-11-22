<template>
    <el-card style="max-width: 100%">
        <template #header>
            <div class="card-header">
                <span>用户列表</span>
                <div>
                    <el-button text @click="getUserList">添加用户</el-button>
                    <el-button text @click="ww">批量删除</el-button>
                </div>
            </div>
        </template>


        <el-table ref="multipleTableRef" :data="userData" row-key="id" style="width: 100%">
            <el-table-column type="selection" width="55" />
            <el-table-column prop="id" label="Id" width="120" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column property="sex" label="Sex" width="120" />
            <el-table-column property="phone" label="Phone" />
            <el-table-column property="city" label="City" />
            <el-table-column label="操作">
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
                        Edit
                    </el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">
                        Delete
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>


</template>


<script setup>
import { reactive, toRefs } from 'vue'
import { userList } from '../../api/user.js'

const data = reactive({
    userData: [],
})

const getUserList = () => {
    userList().then((res) => {
        data.userData = res.data.data
    })
}

const { userData } = toRefs(data)
</script>

<style scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>