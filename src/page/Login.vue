<template>
    <div class="login">
        <div class="login_div">
            <el-form :model="loginForm" label-width="120px">
                <el-form-item label="登录名">
                    <el-input v-model="loginForm.username" />
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="loginForm.password" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import {useRouter} from 'vue-router'
import { setToken, setUserInfo } from '../utile/myAuth.js'
import {login} from '../api/index'
let data = reactive({
    list: []
})
const router=useRouter()

const loginForm = reactive({
    username: 'admin',
    password: '123456',
})

const onSubmit = () => {
  //console.log('submit!',loginForm)

  login({
        'password': loginForm.password,
        'username': loginForm.username
      }).then(res => {
        console.log(res)
        // 把登录信息存储到本地
        setToken(res.data.token)
        setUserInfo(res.data.userInfo)
        router.push('/')
      })


}

</script>

<style scoped lang='less'>
.login {
    width: 100%;
    height: 100vh;
    background-color: #44b774;
}
</style>