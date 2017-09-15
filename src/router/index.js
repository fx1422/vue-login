import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login/login'
import Main from '@/components/main/main'
import Account from '@/components/account/account'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    component: Main
  },
  {
    path: '/account',
    meta: {
      requireAuth: true,
    },
    component: Account
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];


/* // 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
} */

const router = new VueRouter({
  routes
});

/* router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
}) */

export default router;
