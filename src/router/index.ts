import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '@/components/HomeComponent.vue'
import QuoteComponent from '@/components/QuoteComponent.vue'
import AboutComponent from '@/components/AboutComponent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/quote',
      name: 'quote',
      component: QuoteComponent
    },
    {
      path: '/about',
      name: 'about',
      component: AboutComponent
    }
  ]
})

export default router
