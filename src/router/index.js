import Vue from 'vue'
import Router from 'vue-router'
import EventCatalog from '@/components/EventCatalog'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'EventCatalog',
            component: EventCatalog
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})