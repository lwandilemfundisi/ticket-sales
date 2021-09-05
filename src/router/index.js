import Vue from 'vue'
import Router from 'vue-router'
import EventCatalog from '@/components/EventCatalog'
import EventDetails from '@/components/EventDetails'
import EventTicketBasket from '@/components/EventTicketBasket'

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
            path: '/eventTicketBasket/:basketId',
            name: 'EventTicketBasket',
            component: EventTicketBasket,
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})