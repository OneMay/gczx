import Vue from 'vue'
import Router from 'vue-router'
//import database from '@/components/database'
//import canvas from '@/components/canvas'
//import products from '@/components/products'
//import detail from '@/components/the-product'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/wuling',
            name: 'wuling',
            component: resolve => require(['./../components/wuling.vue'], resolve)
        },
        {
            path: '/environment',
            name: 'environment',
            component: resolve => require(['./../components/database.vue'], resolve)
        }
    ]
})