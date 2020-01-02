import Vue from 'vue'
import  VueRouter from 'vue-router'
import login from '../views/login/login.vue'
import index from '../views/index/index.vue'
Vue.use(VueRouter)
const router = new VueRouter({
    routes:[
        {
            path:'/login',
            component:login
        },
        {
            path:'/index',
            component:index
        },
    ]
})

export default router