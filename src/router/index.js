import { createRouter, createWebHashHistory, VueRouter } from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/Profile')

const routes = [
  {
    path: "",
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: profile
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
