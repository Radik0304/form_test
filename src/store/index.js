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
    codes: []
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
    SET_CODES(state, payload){
      state.codes = payload
    }
  },
  actions: {
    SET_NAME(context, payload) {
      context.commit('SET_NAME', payload);
    },
    SET_SECOND_NAME(context, payload) {
      context.commit('SET_SECOND_NAME', payload);
    },
    SET_THIRD_NAME(context, payload) {
      context.commit('SET_THIRD_NAME', payload);
    },
    SET_DATE_CREATE(context, payload) {
      context.commit(' SET_DATE_CREATE', payload);
    },
    SET_COUNTRY(context, payload) {
      context.commit('SET_COUNTRY', payload);
    },
    SET_MAIL(context, payload) {
      context.commit('SET_MAIL', payload);
    },
    UPDATE_CODES(context, payload){
      context.commit('SET_CODES', payload)
    },

    /** Получаем список задач */
    async GET_CODE(context) {
      const res = await fetch('http://localhost:3001/codes')
      const codes = await res.json()
      if(res.ok){
        context.commit('UPDATE_CODES', codes)
      } else {
        console.log('Ошибка получения данных с сервера')
        throw Error
      }
    },
  },
  modules: {
  }
})
