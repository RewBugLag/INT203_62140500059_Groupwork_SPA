import { createRouter, createWebHistory } from 'vue-router'
import EmployeeRegister from '../views/EmployeeRegister.vue'
import EmployeeList from '../views/EmployeeList.vue'


const routes = [
  {
    path: '/',
    name: 'EmployeeRegister',
    component: EmployeeRegister
  },
  {
    path: '/EmployeeList',
    name: 'EmployeeList',
    component: EmployeeList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
