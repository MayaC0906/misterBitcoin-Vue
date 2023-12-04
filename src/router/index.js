import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ContactIndex from '../pages/ContactIndex.vue'
import ContactDetails from '../pages/ContactDetails.vue'
import ContactEdit from '../pages/ContactEdit.vue'
import Statistics from '../pages/Statistics.vue'

const routerOptions = {
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:contactId',
      name: 'contactDetails',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:contactId?',
      name: 'contactEdit',
      component: ContactEdit
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: Statistics
    },
  ]
}
const router = createRouter(routerOptions)
export default router
