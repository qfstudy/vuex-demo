<template>
    <div>
        <span>我是首页</span>
        <br>
        <input type="text" v-model="inputValue" @input="testVuex">
        <br>
        <span>state值:</span>
        <span>{{gethomeValue}}</span>
        <br>
        <router-link to="/todoList">
            <span>跳到todoList页</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return{
            inputValue: 'homeInputValue'
        }
    },
    methods: {
        testVuex(){
            this.$store.dispatch('commitIncrement',this.inputValue)
        }
    },
    computed: {
        gethomeValue(){
            return this.$store.state.homeValue
        }
    }
}
</script>

<style scoped>

</style>