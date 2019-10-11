import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home.js'
import todoList from './todoList.js'

export default new Vuex.Store({
    modules: {
        home,
        todoList
    }
})
