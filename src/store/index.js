import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    second_name: '',
    third_name: '',
    date_create: null,
    country: '',
    mail: null,
    users: []
  },
  getters: {
    NAME(state){
      return state.name
    },
    SECOND_NAME(state){
      return state.second_name
    },
    THIRD_NAME(state){
      return state.third_name
    },
    DATE_CREATE(state){
      return state.date_create
    },
    COUNTRY(state){
      return state.country
    },
    MAIL(state){
      return state.mail
    },
    USERS(state){
      return state.users
    }
  },
  mutations: {
    SET_NAME(state, payload){
      state.name = payload
    },
    SET_SECOND_NAME(state, payload){
      state.second_name = payload
    },
    SET_THIRD_NAME(state, payload){
      state.third_name = payload
    },
    SET_DATE_CREATE(state, payload){
      state.date_create = payload
    },
    SET_COUNTRY(state, payload){
      state.country = payload
    },
    SET_MAIL(state, payload){
      state.mail = payload
    },
    SET_USERS(state, payload){
      state.users = payload
    }
  },
  actions: {
    /** Получаем из базы данные */
    async GET_USERS(context) {
      const res = await fetch('http://localhost:3001/data')
      const usersInfo = await res.json()
      if(res.ok){
        context.commit('SET_USERS', usersInfo)
      } else {
        console.log('Ошибка получения данных с сервера')
        throw Error
      }
    },
  }
})
