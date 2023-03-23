import Home from '@/components/HelloWorld.vue'





export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'home',
        component: Home
    }
]