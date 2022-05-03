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
        path: '/bookdetail/:bookId',
        name: 'Book Detail Page',
        component: ()=>import("../views/DetailPage.vue")
    },
    {
        path: '/addBookForm',
        name: 'Add Book Form',
        component: ()=>import("../views/AddBook.vue")
    },
    {
        path: '/report',
        name: 'Report',
        component: ()=>import("../views/Report.vue")
    },
    {
        path: '/cart',
        name: 'Cart Page',
        component: ()=>import("../views/CartPage.vue")
    },
    {
        path: '/payment',
        name: 'Payment Page',
        component: ()=>import("../views/PaymentPage.vue")
    },
    {
        path: '/profile',
        name: 'Manage Profile Page',
        component: ()=>import("../views/ManageProfilePage.vue")
    },
    {
        path: '/paymenthistory',
        name: 'Payment History Page',
        component: ()=>import("../views/PaymentHistoryPage.vue")
    },
    {
        path: '/reviewhistory',
        name: 'Review History Page',
        component: ()=>import("../views/ReviewHistoryPage.vue")
    },
    {
        path: '/wishlist',
        name: 'Wish list Page',
        component: ()=>import("../views/WishlistPage.vue")
    },
    {
        path: '/addbook',
        name: 'Add Book Page',
        component: ()=>import("../views/AddBook.vue")
    },
    {
        path: '/report',
        name: 'Report Page',
        component: ()=>import("../views/Report.vue")
    },
    {
        path: '/editprofile',
        name: 'Edit profile Page',
        component: ()=>import("../views/Editprofile.vue")
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router