const state={
    homeValue: 'homeInputValue'
}

const mutations={
    increment(state,value){
        state.homeValue=value
    }
}

const actions={
    commitIncrement({commit},value){
        commit('increment',value)
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}