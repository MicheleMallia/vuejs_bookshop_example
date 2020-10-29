import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Prodotti from '../views/Prodotti.vue'
import Contatti from '../views/Contatti.vue'
import Wishlist from '../views/Wishlist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/prodotti',
    name: 'Prodotti',
    component: Prodotti        
  },
  {
    path: '/prodotti/:id',
    name: 'Prodotti',
    component: Prodotti        
  },
  {
    path: '/contatti',
    name: 'Contatti',
    component: Contatti        
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist        
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
