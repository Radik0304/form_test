import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalData from '../views/PersonalData';
import Identification from '../views/Identification.vue'
import CircsContract from '../views/Circs'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: PersonalData
  },
  {
    path: '/identification',
    name: 'identification',
    component: Identification
  },
  {
    path: '/circs',
    name: 'circs',
    component: CircsContract
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
