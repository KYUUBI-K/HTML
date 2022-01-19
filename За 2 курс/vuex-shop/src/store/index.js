import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    taskList:[
        {
            id:1,
            title:'milk',
            price:32
        },
        {
            id:1,
            title:'bread',
            price:15
        },
        {
            id:1,
            title:'coca-cola',
            price:29
        }
    ]
  },
  getters:{
      getTaskList:(state)=>state.taskList
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions:{}
})