import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/usersignup',
    name: 'usersignup',
    component: () => import(/* webpackChunkName: "usersignup" */ '../views/usersignup.vue')
  },
  {
    path: '/vendorsignup',
    name: 'vendorsignup',
    component: () => import(/* webpackChunkName: " name: 'vendorsignup', " */ '../views/vendorsignup.vue')
  },

  {
    path: '/log',
    name: 'log',
    component: () => import(/* webpackChunkName: " name: 'log', " */ '../views/log.vue')
  },
  {
    path: '/userlog',
    name: 'userlog',
    component: () => import(/* webpackChunkName: " name: 'userlog', " */ '../views/userlog.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import(/* webpackChunkName: " name: 'dashboard', " */ '../views/dashboard.vue')
  },
  {
    path: '/company',
    name: 'company',
    component: () => import(/* webpackChunkName: " name: 'company', " */ '../views/companydet.vue')
  },
  {
    path: '/group_info:id',
    name: 'groupinfo',
    component: () => import(/* webpackChunkName: " name: 'groupinfo', " */ '../views/groupinfo.vue')
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: " name: 'chat', " */ '../views/chat.vue')
  },
  {
    path: '/agreement_',
    name: 'agreement_',
    component: () => import(/* webpackChunkName: " name: 'agreement', " */ '../views/agreementform.vue')
  },
  {
    path: '/payment',
    name: 'payment',
    component: () => import(/* webpackChunkName: " name: 'useragremment', " */ '../views/paymentmet.vue')
  },
  {
    path: '/cardpay',
    name: 'cardpay',
    component: () => import(/* webpackChunkName: " name: 'cardpayment', " */ '../views/cardpayment.vue')
  },
  {
    path: '/walletpay',
    name: 'walletpay',
    component: () => import(/* webpackChunkName: " name: 'walletpayment', " */ '../views/walletpay.vue')
  },
  {
    path: '/cashpay',
    name: 'cashpay',
    component: () => import(/* webpackChunkName: " name: 'cashpay', " */ '../views/cashpay.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import(/* webpackChunkName: " name: 'admindashboard', " */ '../../admin/dashboard.vue')
  },
  {
    path: '/adminmessage',
    name: 'adminmessage',
    component: () => import(/* webpackChunkName: " name: 'adminmessage', " */ '../../admin/adminmessage.vue')
  },
  {
    path: '/chat:id',
    name: 'adminchat',
    component: () => import(/* webpackChunkName: " name: 'admichat', " */ '../../admin/adminchat.vue')
  },
  {
    path: '/agreement',
    name: 'agreement',
    component: () => import(/* webpackChunkName: " name: 'agreement', " */ '../../admin/agreementform.vue')
  },
  {
    path: '/agreement:id',
    name: 'agreementdet',
    component: () => import(/* webpackChunkName: " name: 'agreementdet', " */ '../../admin/agreementdet.vue')
  },
  {
    path: '/unread',
    name: 'unread',
    component: () => import(/* webpackChunkName: " name: 'unread', " */ '../../admin/unread.vue')
  },
  {
    path: '/trade',
    name: 'trade',
    component: () => import(/* webpackChunkName: " name: 'trade', " */ '../../admin/trade.vue')
  },

  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: " name: 'report', " */ '../../admin/report.vue')
  },
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
