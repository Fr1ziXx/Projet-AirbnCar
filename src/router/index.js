import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VehiculesView from '../views/VehiculesView.vue'
import ConnectionView from '../views/ConnectionView.vue'
import VoitureView from '../views/VoitureView.vue'
import InscriptionView from '@/views/InscriptionView.vue'
import CGUView from '@/views/CGUView.vue'
import ReservationView from '@/views/ReservationView.vue'

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
      path: '/voiture/:IDvoiture',
      name: 'voiture',
      component: VoitureView
    },
    {
      path: '/inscription',
      name: 'inscription',
      component: InscriptionView
    },
    {
      path: '/condition-generale-utilisateur',
      name: 'CGU',
      component: CGUView
    },
    {
      path: '/voiture/:IDvoiture/reservation',
      name: 'reservation',
      component: ReservationView
    }
  ]
})

export default router
