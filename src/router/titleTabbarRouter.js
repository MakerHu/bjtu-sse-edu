import { RouterView } from 'vue-router'

/**
 * 带有标题和底部导航栏的路由
 */
const titleTabbarRouter =
{
    path: '/',
    component: () => import('@/layout/TitleTabbarLayout.vue'),
    children: [
        {
            path: 'home',
            meta: { title: '首页' },
            component: () => import('@/views/Home.vue')
        },
        {
            path: 'learn',
            meta: { title: '学习' },
            component: () => import('@/views/Learn.vue')
        },
        {
            path: 'expand',
            meta: { title: '拓展' },
            component: () => import('@/views/Expand.vue')
        },
        {
            path: 'experience',
            meta: { title: '经验' },
            component: () => import('@/views/Experience.vue')
        },
    ]

}
export default titleTabbarRouter