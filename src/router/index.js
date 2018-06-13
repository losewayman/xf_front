import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Main from '../components/Main.vue'
import Detail from '../components/Detail.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', redirect: '/login'},
    { path: '/login', component: Login},
    { path: '/index', component: Main},
    { path: '/detail', component: Detail},
]

const router = new VueRouter({
    routes
})

export default router