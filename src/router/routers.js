



export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/view/login/login.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('@/view/test.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/view/home/home.vue')
    }
]