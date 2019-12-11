import Vue from 'vue'
import VueRouter from 'vue-router'
import CON from '@conf'

Vue.use(VueRouter)

const router = new VueRouter({
  ...CON.ROUTER_CONFIG,
  mode: 'history',
  base: process.env.BASE_URL,
  routes: CON.ROUTERS
})
router.beforeEach(CON.INTERCEPTORS.routerBeforeEach)
export default router
