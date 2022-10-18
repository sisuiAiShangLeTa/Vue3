import {createRouter,createWebHashHistory} from 'vue-router'
import { getToken, removeToken, removeUserInfo } from '../utile/myAuth.js'


const routes=[
    {
        path:'/',
        name:'Index',
        redirect:'/layout',
        component:()=>import('../App.vue')
    },
    {
        path:'/login',
        name:'Login',
        component:()=>import('../page/Login.vue')
    },
    {
        path:'/layout',
        name:'Layout',
        component:()=>import('../page/Layout.vue'),
        children:[
            {
                path:'role',
                name:'Role',
                component:()=>import('../page/Role.vue')
            },
            {
                path:'addmie',
                name:'addmie',
                component:()=>import('../page/addmie.vue')
            },
            
        ]
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router