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
        {
            path: 'course',
            meta: { title: '课程' },
            component: () => import('@/views/DiversityVideo.vue')
        },
        {
            path: 'video',
            meta: { title: '视频内容' },
            component: () => import('@/views/DiversityVideo.vue')
        },
    ]

}
export default commonRouter