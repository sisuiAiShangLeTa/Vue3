<template>
    <div class="roule">
        <div>
            <el-button type="success" @click="add">增加</el-button>
        </div>
        <el-table size="mini" :data="data.tableData" border style="width: 100%" max-height="80%">
            <el-table-column prop="roleTd" label="角色编号" />
            <el-table-column prop="roleName" label="角色名称" />
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="EditClick(scope.$index,scope.row)">编辑
                    </el-button>
                    <el-button link type="primary" size="small" @click="DelClick(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-drawer v-model="data.drawer" title="角色表单">
            <span>Hi, there!</span>
        </el-drawer>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

let data = reactive({
    tableData: [],
    drawer: false,
    direction: 'rtl'
})
let newlist = []
for (let i = 0; i < 10; i++) {
    newlist.push({
        roleTd: `${i + 1}`,
        roleName: `名称：${i + 1}`
    })
}
onMounted(() => {
    data.tableData = newlist
})

const EditClick = (index, ele) => {
    console.log('编辑', index, ele)
}
const DelClick = (index, ele) => {
    console.log('删除', index, ele)
}
const add = () => {
    data.drawer = true
}


</script>

<style scoped lang='less'>
.roule {}
</style>