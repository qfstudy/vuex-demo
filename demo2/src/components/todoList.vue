<template>
    <div>
        <span>todoList</span>
        <br>
        <input type="text" v-model="inputValue" @input="todoListVuex">
        <br>
        <span>store值:</span>
        <span>{{getTodoListInpurValue}}</span>
        <br>
        <router-link to="/">
            <span>返回首页</span>
        </router-link>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
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
        ...mapActions('todoList',[
            'todoListValueAction'
        ])
    },
    computed: {
        getTodoListInpurValue(){
            return this.$store.state.todoList.todoListValue
        }
    }
}
</script>

<style scoped>

</style>