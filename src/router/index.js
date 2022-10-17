import {createRouter,createWebHashHistory} from 'vue-router'
const routes=[
    {
        path:'/',
        name:'Index',
        component:()=>import('../App.vue')
    },
    {
        path:'/layout',
        name:'Layout',
        component:()=>import('../page/Layout.vue')
    }
]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router