<template>
    <div class="container">

        <div class="left" :style="{width:active.isCollapse?'65px':'200px',background:currentColor}">
            <div class="logo">
                <div :style="{fontSize: active.isCollapse?'14px':'20px'}">{{!active.isCollapse?'四岁喜欢徐方清':'徐方清'}}</div>
            </div>
            <el-menu router active-text-color="#ffd04b" :background-color="currentColor" class="el-menu-vertical-demo"
                default-active="2" text-color="#fff" :collapse="active.isCollapse">
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon>
                            <CirclePlus />
                        </el-icon>
                        <span>内容管理</span>
                    </template>
                    <el-menu-item index="/layout/role">文章列表</el-menu-item>
                    <el-menu-item index="/layout/addmie">素材列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <PieChart />
                        </el-icon>
                        <span>客户管理</span>
                    </template>
                    <el-menu-item index="1-1">角色管理</el-menu-item>
                    <el-menu-item index="1-2">账户管理</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="3">
                    <template #title>
                        <el-icon>
                            <TurnOff />
                        </el-icon>
                        <span>信息管理</span>
                    </template>
                    <el-menu-item index="1-1">角色管理</el-menu-item>
                    <el-menu-item index="1-2">账户管理</el-menu-item>
                </el-sub-menu>

            </el-menu>
        </div>
        <div class="right">
            <div class="top" :style="{background:currentColor}">

                <div class="icon_top" @click="active.isCollapse = !active.isCollapse">
                    <el-icon v-show="active.isCollapse">
                        <Expand />
                    </el-icon>
                    <el-icon v-show="!active.isCollapse">
                        <Fold />
                    </el-icon>
                </div>
                <div class="menu">
                    <el-menu :default-active="active.activeIndex2" class="el-menu-demo" mode="horizontal"
                        :background-color="currentColor" text-color="#fff" active-text-color="#ffd04b">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">邮箱</el-menu-item>
                        <el-menu-item index="3">消息</el-menu-item>

                        <el-sub-menu index="4">
                            <template #title>切换皮肤</template>
                            <el-menu-item @click="changeColor(index)" :index="`4-${index}`"
                                v-for="(item,index) in getColorNames">
                                {{item}}主题
                            </el-menu-item>

                        </el-sub-menu>
                        <el-sub-menu index="5">
                            <template #title>管理员</template>
                            <el-menu-item index="5-1">个人中心</el-menu-item>
                            <el-menu-item index="5-2">修改密码</el-menu-item>
                            <el-menu-item index="5-3" @click="logout">退出系统</el-menu-item>
                        </el-sub-menu>
                    </el-menu>
                </div>
            </div>
            <div class="bottom" :style="{padding:'10px'}">
                <RouterView></RouterView>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import {useRouter} from 'vue-router'

import { useStore } from 'vuex'
import {
    CirclePlus, PieChart, TurnOff, Fold, Expand
} from '@element-plus/icons-vue'
let $store = useStore()
const router=useRouter()

let active = reactive({
    activeIndex2: '1',
    isCollapse: false,//左侧是否展开
})

let getColorNames = computed(() => {
    return $store.getters['color/getColorNames']
})
let currentColor = computed(() => {
    return $store.state.color.currentColor.color
})


const changeColor = (index) => {
    let color = $store.state.color.colors[index]

    $store.dispatch('color/updatedColorName', color)
}

const logout=()=>{
      router.push('/login')
}




</script>

<style scoped lang="less">
.container {
    width: 100vw;
    height: 100vh;
    display: flex;

    .left {
        // background-color: #545c64;
        transition: all 0.5s;

        .logo {
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;

            div {
                color: #ffffff;
                font-size: 20px;
                border: 1px solid #fffdff;
                padding: 4px 10px;
                border-radius: 5px;
            }
        }

    }

    .right {
        flex: 1;
        // background-color: #c69e9e;
        display: flex;
        flex-direction: column;

        .top {
            height: 60px;
            // background-color: #545c64;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .icon_top {
                color: #fff;
                padding-left: 10px;
            }

            .menu {
                width: 500px;
            }
        }

        .bottom {
            flex: 1
        }
    }
}
</style>