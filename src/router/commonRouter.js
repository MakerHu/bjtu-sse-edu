import { RouterView } from 'vue-router'

/**
 * 不带导航栏的页面路由
 */
const commonRouter =
{
    path: '/',
    component: RouterView,
    children: [
        {
            path: '',
            redirect: '/tools'
        },
        {
            path: 'test',
            meta: { title: '测试页面' },
            component: () => import('@/views/Test.vue')
        },
    ]

}
export default commonRouter