import { createRouter, createWebHashHistory, VueRouter } from 'vue-router'
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
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
  },
  {
    path: '/Detail/:id',
    component: Detail
  }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
