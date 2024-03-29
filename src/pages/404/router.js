import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        component: () => import('@/components/page1.vue')
    },
    {
        path:"/login",
        component:() => import('@/components/PageLogin.vue')
    }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
