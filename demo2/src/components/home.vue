<template>
    <div>
        <span>我是首页</span>
        <br>
        <input type="text" v-model="inputValue" @input="testVuex">
        <br>
        <span>store值:</span>
        <span>{{getHomeInputValue}}</span>
        <br>
        <router-link to="/todoList">
            <span>跳到todoList页</span>
        </router-link>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name: 'Home',
    data(){
        return{
            inputValue: 'homeInputValue'
        }
    },
    methods: {
        testVuex(e){
            this.commitIncrement(e.target.value)
        },
        ...mapActions('home',[
            'commitIncrement'
        ])
    },
    computed: {
        getHomeInputValue(){
            return this.$store.state.home.homeValue
        }
    }
}
</script>

<style scoped>

</style>