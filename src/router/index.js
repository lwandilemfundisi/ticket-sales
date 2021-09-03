import Vue from 'vue'
import Router from 'vue-router'
import EventCatalog from '@/components/EventCatalog'
import EventDetails from '@/components/EventDetails'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'EventCatalog',
            component: EventCatalog
        },
        {
            path: '/details/:id',
            name: 'EventDetails',
            component: EventDetails,
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})