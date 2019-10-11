const state={
    todoListValue: 'todoListInputValue'
}

const mutations={
    todoListValueFunc(state,value){
        state.todoListValue=value
    }
}

const actions={
    todoListValueAction({commit},value){
        commit('todoListValueFunc',value)
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}