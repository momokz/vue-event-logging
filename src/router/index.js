import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'

import timeEntries from '@/components/timeEntries'
import logTime from '@/components/logTime';

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: home
    }, {
        path: '/home',
        name: 'home',
        component: home
    }, {
        path: '/time-entries',
        name: 'timeEntries',
        component: timeEntries,
        children: [{
            path: 'log-time',
            name: 'log-time',
            component: logTime
        }]
    }, {
        path: '*',
        redirect: '/'
    }]
})