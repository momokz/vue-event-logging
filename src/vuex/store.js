import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
    totalTime: 6,
    list: [{
        name: '二者',
        avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
        date: '2016-12-25',
        totalTime: 6,
        comment: '12月25日完善，陪女朋友一起过圣诞节需要6个小时'
    }]
};

const mutations = {
    ADD_TOTAL_TIME(state, time) {
        state.totalTime += parseInt(time);
    },
    DEC_TOTAL_TIME(state, time) {
        state.totalTime -= time;
        if (state.totalTime < 0) {
            state.totalTime = 0;
        }
    },
    SAVE_PLAN(state, plan) {
        state.list.push(plan);
    },
    DELETE_PLAN(state, index) {
        state.list.splice(index, 1);
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});