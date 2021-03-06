// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import axios from 'axios';
import router from './router';
import store from './vuex/store';
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false
Vue.prototype.$http = axios;

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: {
        App
    }
});