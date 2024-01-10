import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiculesView from '../views/VehiculesView.vue'
import ConnectionView from '../views/ConnectionView.vue'
import VoitureView from '../views/VoitureView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vehicules',
      name: 'vehicules',
      component: VehiculesView
    },
    {
      path: '/connection',
      name: 'conenction',
      component: ConnectionView
    },
    {
      path: '/voiture',
      name: 'voiture',
      component: VoitureView
    }
  ]
})

export default router
