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
            redirect: '/home'
        },
    ]

}
export default commonRouter