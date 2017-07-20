import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
    totalTime: 0,
    list: []
};

const mutations = {
    ADD_TOTAL_TIME(state, time) {
        state.totalTime += parseInt(time);
    },
    DEC_TOTAL_TIME(state, time) {
        state.totalTime -= parseInt(time);
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