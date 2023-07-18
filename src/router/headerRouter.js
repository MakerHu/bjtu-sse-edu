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
    ]

}
export default headerRouter