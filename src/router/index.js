import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/PublicLayouts/HomeView.vue'
import ProfileView from '@/views/PrivateLayouts/user/ProfileView.vue'
import PublicLayouts from '@/Layouts/PublicLayouts.vue'
import PrivateLayouts from '@/Layouts/PrivateLayouts.vue'
import AdView from '@/views/PrivateLayouts/user/AdView.vue'
import FavoriteView from '@/views/PrivateLayouts/user/FavoriteView.vue'
import NotificationView from '@/views/PrivateLayouts/user/NotificationView.vue'
import LogInView from '@/views/LogInView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LogInView
       
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
       
    },
    {
      path: '/',
      component: PublicLayouts,
      children: [
        {
          path: 'home',
          name: 'home',
          component: HomeView
        },
      ]
    },
    {
      path: '/user',
      component: PrivateLayouts,
      children: [
        {
          path: 'profile',
          name: 'profile',
          component: ProfileView,
        },
        {
          path: 'announcements',
          name: 'announcements',
          component: AdView,
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: FavoriteView,
        },
        {
          path: 'notifications',
          name: 'notifications',
          component: NotificationView,
        },
      ]
    },
    
  ],
})

export default router
