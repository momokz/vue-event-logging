export const addTotalTime = ({
    commit
}, time) => {
    commit('ADD_TOTAL_TIME', time)
};

export const decTotalTime = ({
    commit
}, time) => {
    commit('DEC_TOTAL_TIME', time)
};

export const savePlan = ({
    commit
}, plan) => {
    commit('SAVE_PLAN', plan);
};

export const deletePlan = ({
    commit
}, index) => {
    commit('DELETE_PLAN', index);
}