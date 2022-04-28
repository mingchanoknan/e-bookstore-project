import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main page',
        component: () => import('../views/MainPage.vue')
    },
    {
        path: '/detail/:bookId',
        name: 'Detail Page',
        component: () => import("../views/DetailPage.vue")
    },
    {
        path: '/test',
        name: 'Test Page',
        component: ()=>import("../views/TestPage.vue")
    },
    {
        path: '/myBook',
        name: 'My Book Page',
        component: ()=>import("../views/MyBookPage.vue")
    },
    {
        path: '/customerLogin',
        name: 'Customer Login Page',
        component: ()=>import("../views/CustomerLoginPage.vue")
    },
    {
        path: '/customerRegister',
        name: 'Customer Register Page',
        component: ()=>import("../views/CustomerRegisterPage.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router