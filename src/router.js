import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/profile',
      name: 'profile',
      component: () => import('./views/Profile/index.vue'),
    },
    {
      path: '/',
      name: 'promo',
      component: () => import('./views/Promo/index.vue'),
    },
  ],
})
