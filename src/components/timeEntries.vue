<template>
    <div class="timeEntries">
        <router-link v-if="$route.path!=='/time-entries/log-time'" to="/time-entries/log-time" class="btn btn-primary">
            创建
        </router-link>
        <div v-if="$route.path=='/time-entries/log-time'">
            <h3>创建</h3>
        </div>
        <hr>
        <router-view></router-view>
        <div class="time-entries">
            <p v-if="!plans.length">
                <strong>还没有任何计划</strong>
            </p>
            <div class="list-group">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(plan, index) in plans">
                        <div class="row">
                            <div class="col-sm-3 user-details">
                                <img :src="plan.avatar" alt="" class="avatar img-circle img-responseive">
                                <p class="text-center">{{plan.name}}</p>
                            </div>
                            <div class="col-sm-2 text-center time-block">
                                <h3 class="list-group-item-text total-time">
                                    <i class="glyphicon glyphicon-time"></i>
                                    {{plan.totalTime}}
                                </h3>
                                <p class="label label-primar text-center" style="color:#000;">
                                    <i class="glyphicon glyphicon-calendar"></i> {{plan.date}}
                                </p>
                            </div>
                            <div class="col-sm-6 comment-section">
                                <p>{{plan.comment}}</p>
                            </div>
                            <div class="col-sm-1">
                                <button class="btn btn-xs btn-danger delete-button" @click.prevent="deletePlan(index)">X</button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapState
} from 'vuex';

export default {
    name: 'timeEntries',
    computed: {
        ...mapState({
            plans: 'list'
        })
    },
    methods: {
        deletePlan(index) {
            // 减去总时间
            this.$store.dispatch('decTotalTime', this.plans[index].totalTime);
            // 删除该计划
            this.$store.dispatch('deletePlan');
        }
    }
}
</script>
<style scoped>
.avatar {
    display: block;
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
}
.user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
}
.time-block {
    padding: 10px;
}
.comment-section {
    padding: 20px;
    font-size: 24px;
}
label{
    color: #000;
}
.total-time {
    margin-top: 0;
}
</style>