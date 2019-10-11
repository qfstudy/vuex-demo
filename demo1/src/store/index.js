import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homeValue: 'homeInputValue',
        todoListValue: 'todoListInputValue'
    },
    mutations: {
        increment(state,value){
            state.homeValue=value
        },
        todoListValueFunc(state,value){
            state.todoListValue=value
        }
    },
    actions:{
        commitIncrement({commit},value){
            commit('increment',value)
        },
        todoListValueAction({commit},value){
            commit('todoListValueFunc',value)
        }
    }
})
