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
        path: '/main',
        name: 'Main Page',
        component: ()=>import("../views/MainPage.vue")
    },
    {
        path: '/mybook',
        name: 'My Book Page',
        component: ()=>import("../views/MyBookPage.vue")
    },
    {
        path: '/customerRegister',
        name: 'Customer Register Page',
        component: ()=>import("../views/CustomerRegisterPage.vue")
    },
    {
        path: '/manual',
        name: 'Manual Page',
        component: ()=>import("../views/ManualPage.vue")
    },
    {
        path: '/cart/:cartId',
        name: 'Cart Page',
        component: ()=>import("../views/CartPage.vue")
    },
    {
        path: '/payment/:cartId',
        name: 'Payment Page',
        component: ()=>import("../views/PaymentPage.vue")
    },
    {
        path: '/profile/:id',
        name: 'Manage Profile Page',
        component: ()=>import("../views/ManageProfilePage.vue")
    },
    {
        path: '/paymenthistory/:id',
        name: 'Payment History Page',
        component: ()=>import("../views/PaymentHistoryPage.vue")
    },
    {
        path: '/reviewhistory/:id',
        name: 'Review History Page',
        component: ()=>import("../views/ReviewHistoryPage.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router