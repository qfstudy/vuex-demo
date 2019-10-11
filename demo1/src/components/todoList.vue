<template>
    <div>
        <span>todoList</span>
        <br>
        <input type="text" v-model="inputValue" @input="todoListVuex">
        <br>
        <span>state值:</span>
        <span>{{todoListValue}}</span>
        <br>
        <router-link to="/">
            <span>返回首页</span>
        </router-link>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    name: 'todoList',
    data(){
        return{
            inputValue: 'todoListInputValue'
        }
    },
    methods:{
        todoListVuex(e){
            this.todoListValueAction(e.target.value)
        },
        ...mapActions([
            'todoListValueAction'
        ])
    },
    computed: {
        ...mapState(['todoListValue'])
    },
}
</script>

<style scoped>

</style>