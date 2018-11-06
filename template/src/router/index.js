import Vue from 'vue'
import Router from 'vue-router'
import HelloIndra from '@/views/HelloIndra'
import Login from '@/views/login/Login'
import LoginForm from '@/components/login/LoginForm'
import LoginPasswordForm from '@/components/login/LoginPasswordForm'

Vue.use(Router)

const route = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      redirect: { name: 'login-form' },
      children: [
        {
          path: '',
          name: 'login-form',
          component: LoginForm
        },
        {
          path: 'password',
          name: 'password-form',
          component: LoginPasswordForm
        }
      ]
    },
    {
      path: '/',
      name: 'Home',
      component: HelloIndra,
      meta: {
        private: true
      }
    }
  ]
})

route.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.private)) {
    if (!sessionStorage.getItem('sessionToken')) {
      next({name: 'Login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default route
