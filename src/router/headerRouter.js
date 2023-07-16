import { RouterView } from 'vue-router'

/**
 * 带有头部导航栏的页面路由
 */
const headerRouter =
{
    path: '/',
    component: () => import('@/layout/HeaderMainLayout.vue'),
    children: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: 'tools/:toolId',
            props: true,    // 将路径参数转换为组件props
            meta: { title: '可微工具箱' },
            component: () => import('@/views/Test.vue')
        },
    ]

}
export default headerRouter