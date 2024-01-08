import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiculeView from '../views/VehiculeView.vue'
import ConnectionView from '../views/ConnectionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vehicule',
      name: 'vehicule',
      component: VehiculeView
    },
    {
      path: '/connection',
      name: 'conenction',
      component: ConnectionView
    }
  ]
})

export default router
