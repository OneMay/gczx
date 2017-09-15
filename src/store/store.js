import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        baseNo: '',
        companyNo: 2,
        traceCode: ''
    },
    getters: {
        getData(state) {
            return state;
        }
    },
    mutations: {
        //更改store中的状态的唯一方法，类似于事件
        setData(state, payload) {
            state.baseNo = payload.baseNo;
            state.companyNo = payload.companyNo;
            state.traceCode = payload.traceCode;
        }
    },
    actions: {
        //类似于mutations，但它提交的是mutation,而不是直接更改状态，还可以包含任意异步操作
        change(context, payload) {
            setTimeout(function() {
                context.commit('setData', payload)
            }, 1000)
        }
    }
});