import { RouterView } from 'vue-router'

/**
 * 带有返回、标题和底部导航栏的路由
 */
const headerTabbarRouter =
{
    path: '/',
    component: () => import('@/layout/HeaderTabbarLayout.vue'),
    children: [
        
    ]

}
export default headerTabbarRouter