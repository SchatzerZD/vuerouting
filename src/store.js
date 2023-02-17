import {createStore} from "vuex";

const store = createStore({
    state () {
        return {
            name: 'Daniel',
            email: 'daniel@'
        }
    },
    mutations: {
        STORE_INFO(state, name, email){
            state.name = name.name;
            state.email = email.email;
        }
    },

    actions:{
        storeInfo({commit},name,email){
            return commit('STORE_INFO',name,email);
        }
    },

    getters:{
        getName: function (state){
            return `${state.name}`;
        },
        getEmail: function (state){
            return `${state.email}`;
        }
    }
})

export default store;