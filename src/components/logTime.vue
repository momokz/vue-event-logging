<template>
    <div class="form-horizontal">
        <div class="form-group">
            <div class="col-sm-6">
                <label for="日期">日期</label>
                <input type="date" class="form-control" v-model="date" placeholder="Date">
            </div>
            <div class="col-sm-6">
                <label for="">时间</label>
                <input type="number" class="form-control" v-model="totalTime" placeholder="Hours">
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-12">
                <label for="">备注</label>
                <input type="text" class="form-control" v-model="comment" placeholder="Comment">
            </div>
        </div>
        <button class="btn btn-primary" @click="save()">保存</button>
        <router-link to="/time-entries" class="btn btn-danger">取消</router-link>
        <hr>
    </div>
</template>
<script>
export default {
    name: 'logTime',
    data() {
        return {
            date: '',
            totalTime: '',
            comment: ''
        }
    },
    methods: {
        save() {
            if (this.date === ''|| this.totalTime == '' || this.comment == '') {
                alert('请添加日期、时间等信息哦');
                return;
            }
            const plan = {
                name: '二者',
                avatar: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256',
                date: this.date,
                totalTime: this.totalTime,
                comment: this.comment
            };
            this.$store.dispatch('savePlan', plan);
            this.$store.dispatch('addTotalTime', this.totalTime);
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
</style>
