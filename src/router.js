import Vue from 'vue'
import Router from 'vue-router'
// Los Lazy Loading
const Index = () => import('./components/Index')
const SobreMi = () => import('./components/SobreMi')
const Contact = () => import('./components/Contact')
const Post = () => import('./components/Post')

import Article from './components/Article'
import NotFound from './components/NotFound'
import Admin from './components/Admin'

// Los que se quitaron
// import Index from './components/Index'
// import SobreMi from './components/SobreMi'
// import Contact from './components/Contact'
// import Post from './components/Post'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Index,
            name: 'index'
        },
        {
            path: '/home',
            redirect: {name: 'index'}  
        },
        {
            path: '/portada',
            redirect: {name: 'index'}  
        },
        {
            path: '/inicio',
            redirect: {name: 'index'}     
        },
        {
            path: '/administrador/:admin',
            component: Admin,
            name: 'administrador',
            props: (route) => ({
                admin: route.params.admin
            })
        },
        {
            path: '/sobremi',
            component: SobreMi,
            name: 'SobreMi',
            alias: ['/acerca']
        },
        {
            path: '/contact',
            component: Contact,
            name: 'Contact',
            alias: ['/contactame']
        },
        {
            path:'/post/:id',
            component: Post,
            name:'post',
            children:[{
                path:'article',
                component:Article,
                name:'article'
            }]
        },
        {
            path: '*',
            component: NotFound,
        },
    ]
})