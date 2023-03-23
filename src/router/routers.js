import Login from '@/view/login/login'
import test from '@/view/test'





export default [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
]