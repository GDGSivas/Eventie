import Vue from 'vue'
import Router from 'vue-router'
import DashboardLayout from '@/layout/DashboardLayout'
import AuthLayout from '@/layout/AuthLayout'
Vue.use(Router);

export default new Router({
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: 'events',
      component: DashboardLayout,
      children: [
        {
          path: '/profile',
          name: 'profile',
          component: () => import('./views/UserProfile.vue')
        },
        {
          path: '/events',
          name: 'events',
          component: () => import('./views/Events.vue'),
        },
        {
          path: '/events/:id',
          name: 'eventDetail',
          component: () => import('./views/EventDetail.vue'),
        },
        {
          path: '/events/:eventID/programs/:programID',
          name: 'programDetail',
          component: () => import('./views/ProgramDetail.vue'),
        }
      ]
    },
    {
      path: '/',
      redirect: 'login',
      component: AuthLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: () => import('./views/Login.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('./views/Register.vue')
        }
      ]
    }
  ]
})
