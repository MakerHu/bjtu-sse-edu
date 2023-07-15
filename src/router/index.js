// 此文件专门负责项目的路由

import { createRouter, createWebHistory } from 'vue-router'
import commonRouter from './commonRouter'
import headerRouter from './headerRouter'

// 引入组件
// import Tool from '@/views/Tool.vue'
// const Tool = ()=> import('@/views/Tool.vue')

const routes = [
    // 不带导航栏的公共部分
    commonRouter,
    // 带有头部导航栏的路由
    headerRouter,
    // // 管理端
    // manageRouter,
    // manageNavRouter,

    // // 客户端
    // clientRouter,
    // clientNavRouter,
]

// 创建并暴露一个路由器
const router = createRouter({
    // mode: 'history',    // 路由模式，该模式不会在地址中显示井号#
    history: createWebHistory('/bjtu-sse-edu/'),    // 路由模式，该模式不会在地址中显示井号#
    routes,
})


// 全局前置守卫，这里可以加入用户登录判断
router.beforeEach((to, from, next) => {
    // 继续前进 next()
    // 返回 false 以取消导航
    next()
})

// 全局后置钩子，这里可以加入改变页面标题等操作
router.afterEach((to, from) => {
    const _title = to.meta.title
    if (_title) {
        window.document.title = _title
    }
})


export default router 