import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import TodoList from '../components/TodoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todoList',
      name: 'TodoList',
      component: TodoList
    }
  ]
})
