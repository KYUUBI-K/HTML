import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    taskList:[
        {
            id:1,
            title:'Бензонасос',
            car_brand:'Mercedes',
            year_of_issue:2014
        },
        {
            id:2,
            title:'Шарова',
            car_brand:'BMW',
            year_of_issue:2017
        },
        {
            id:3,
            title:'Тормозні діски',
            car_brand:'Audi',
            year_of_issue:2021
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