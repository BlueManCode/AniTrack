import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Winter from '../views/Winter.vue'
import Spring from '../views/Spring.vue'
import Fall from '../views/Fall.vue'
import Summer from '../views/Summer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/winter',
    name: 'Winter',
    component: Winter
  },
  {
    path: '/spring',
    name: 'Spring',
    component: Spring
  },
  {
    path: '/fall',
    name: 'Fall',
    component: Fall
  },
  {
    path: '/summer',
    name: 'Summer',
    component: Summer
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
