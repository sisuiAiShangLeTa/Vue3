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