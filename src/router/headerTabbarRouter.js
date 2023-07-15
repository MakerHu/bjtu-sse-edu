import { RouterView } from 'vue-router'

/**
 * 带有返回、标题和底部导航栏的路由
 */
const headerTabbarRouter =
{
    path: '/',
    component: () => import('@/layout/HeaderTabbarLayout.vue'),
    children: [
        {
            path: 'primary',
            meta: { title: '学习' },
            component: () => import('@/views/Test.vue')
        },
        {
            path: 'tools/:toolId',
            props: true,    // 将路径参数转换为组件props
            meta: { title: '可微工具箱' },
            component: () => import('@/views/Test.vue')
        },
    ]

}
export default headerTabbarRouter