<template>
    <div class="roule">
        
        <div>
            <el-button type="success" @click="add">增加</el-button>
        </div>
        <el-table size="mini" :data="data.tableData" border style="width: 100%" max-height="80%">
            <el-table-column type="index" label="#" width="50" />
        <el-table-column prop="title" label="文章标题" width="150px" />
        <el-table-column prop="coverImg" label="展示图片">
          <template v-slot="sisui">
            <img
              style="width: 100px; height: 100px"
              :src="sisui.row.coverImg"
              alt=""
            >
          </template>
        </el-table-column>
        <el-table-column prop="createTime" label="添加时间" />
        <el-table-column prop="author" label="文章作者" />
        <el-table-column prop="isShow" label="文章是否展示">
          <template v-slot="sisui">
            <el-switch
              v-model="sisui.row.isShow"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="switchEvent(sisui.row)"
            />
          </template>
        </el-table-column>
        <el-table-column prop="content1" label="内容">
          <template v-slot="sisui">
            <div v-html="sisui.row.content1" />
          </template>
        </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="EditClick(scope.$index,scope.row)">编辑
                    </el-button>
                    <el-button link type="primary" size="small" @click="DelClick(scope.$index,scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { findArticles, changeShowStatus, del } from '../api/index'

let data = reactive({
    tableData: [],
     // 页数
     start: 1,
      // 条数
      limit: 100000,
      total: 0,
      // 表单数据
      fromData: {
        author: '',
        collectCount: '',
        content1: '',
        content2: '',
        coverImg: '',
        createTime: '',
        editorType: '',
        id: '',
        isShow: '',
        modifyTime: '',
        summary: '',
        title: '',
        viewCount: '',
        zanCount: ''
      }
})
onMounted(() => {
    findArticles(data.start, data.limit, data.fromData).then(res=>{
        console.log('文张列表',res)

        data.total = res.data.total
        res.data.rows.forEach(row => {
          row.isShow = !!row.isShow
        })

        data.tableData = res.data.rows
    console.log('文张列表=====',data.tableData)

        
    })
})

const EditClick = (index, ele) => {
    console.log('编辑', index, ele)
}
const DelClick = (index, ele) => {
    console.log('删除', index, ele)
}
const add = () => {
}


</script>

<style scoped lang='less'>
.roule {}
</style>