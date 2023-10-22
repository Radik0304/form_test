import Vue from 'vue'
import VueRouter from 'vue-router'
import PersonalData from '../views/PersonalData';
import Identification from '../views/Identification.vue'
import CircsContract from '../views/Circs'
import CheckDates from '../views/CheckDates'
import ApproveRequest from '../views/ApproveRequest'

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
    component: CircsContract,
  },
  {
    path: '/check-dates',
    name: 'checkDates',
    component: CheckDates
  },
  {
    path: '/approve-dates',
    name: 'approveDates',
    component: ApproveRequest
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
