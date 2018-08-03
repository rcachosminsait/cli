import Vue from 'vue'
import Router from 'vue-router'
import HelloIndra from '@/views/HelloIndra'
import Login from '@/views/Login'
import LoginForm from '@/views/LoginForm'

Vue.use(Router)

const route = new Router({
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
        }
      ]
    },
    {
      path: '/',
      name: 'HelloIndra',
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
