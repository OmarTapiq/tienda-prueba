import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import HomeView from '../views/HomeView.vue'
import LoginApp from '../views/LoginApp.vue'
import CreateColaboradorApp from '../views/colaboradores/CreateColaboradorApp.vue'
import IndexColaboradorApp from '../views/colaboradores/IndexColaboradorApp.vue'
import CreateProductoApp from '../views/productos/CreateProductoApp.vue'
import IndexProductoApp from '../views/productos/IndexProductoApp.vue'
import EditProductoApp from '../views/productos/EditProductoApp.vue'
import GaleriaProductoApp from '../views/productos/GaleriaProductoApp.vue'
import CreateIngresoApp from '../views/ingresos/CreateIngresoApp.vue'
import IndexCategoriaApp from '../views/categorias/IndexCategoriaApp.vue'
import jwt_decode from 'jwt-decode'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'login', component: LoginApp, meta: { requiresAuth: false } },
  { path: '/colaborador', name: 'colaborador-index', component: IndexColaboradorApp, meta: { requiresAuth: true } },
  { path: '/colaborador/create', name: 'colaborador-create', component: CreateColaboradorApp, meta: { requiresAuth: true } },
  { path: '/colaborador/edit/:id', name: 'colaborador-edit', component: () => import('@/views/colaboradores/EditColaboradorApp.vue'), meta: { requiresAuth: true } },
  { path: '/dashboard', name: 'dashboard', component: () => import('@/views/DashboardApp.vue'), meta: { requiresAuth: true } },

  { path: '/producto/create', name: 'producto-create', component: CreateProductoApp, meta: { requiresAuth: true } },
  { path: '/producto', name: 'producto-index', component: IndexProductoApp, meta: { requiresAuth: true } },
  { path: '/producto/edit/:id', name: 'producto-edit', component: EditProductoApp, meta: { requiresAuth: true } },
  { path: '/producto/galeria/:id', name: 'producto-galeria', component: GaleriaProductoApp, meta: { requiresAuth: true } },

  { path: '/ingreso/create', name: 'ingreso-create', component: CreateIngresoApp, meta: { requiresAuth: true } },

  { path: '/categorias', name: 'categorias-index', component: IndexCategoriaApp, meta: { requiresAuth: true } },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(item => item.meta.requiresAuth)) {
    if (!store.state.token) {
      next({
        name: 'login'
      })
    }

    try {
      jwt_decode(store.state.token)
    } catch (error) {
      next({
        name: 'login'
      })
    }

    if (jwt_decode(store.state.token).exp * 1000 <= new Date().getTime()) {
      next({
        name: 'login'
      })
    }

    next()
    console.log('privada');
  } else {
    console.log('publica');
    next()
  }
})

export default router
