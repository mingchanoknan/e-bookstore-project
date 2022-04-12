import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main page',
        component: () => import('../components/pages/MainPage.vue')
    },
    {
        path: '/detail/:bookId',
        name: 'Detail Page',
        component: () => import("../components/pages/DetailPage.vue")
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router