import Vue from 'vue'
import Router from 'vue-router'
import RouteView from '@/components/shared/RouteView'
import HelloIndra from '@/views/HelloIndra'
import Login from '@/views/login/Login'
import LoginForm from '@/components/login/LoginForm'
import LoginPasswordForm from '@/components/login/LoginPasswordForm'
import Users from '@/views/Users'
import MyUser from '@/views/MyUser'
import EditUser from '@/views/EditUser'
import RandomUser from '@/views/RandomUser'
import EditRandomUser from '@/views/EditRandomUser'
import EditRandomUserConfirmation from '@/views/EditRandomUserConfirmation'
import { setBreadcrumbParams, refreshParam } from './breadcrumb-params'
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
        breadcrumbTextKey: 'home',
        private: true
      }
    },
    {
      path: '/users',
      name: 'UsersView',
      component: RouteView,
      redirect: {name: 'Users'},
      meta: {
        private: true,
        breadcrumbTextKey: 'users'
      },
      children: [
        {
          path: '',
          name: 'Users',
          component: Users
        },
        {
          path: 'random-user/:id',
          component: RouteView,
          redirect: {name: 'Random user'},
          meta: {
            breadcrumbTextKey: 'randomUser',
            breadcrumbParam: 'userInfo'
          },
          children: [
            {
              path: '',
              name: 'Random user',
              component: RandomUser
            },
            {
              path: 'edit',
              component: RouteView,
              redirect: {name: 'Edit user'},
              meta: {
                breadcrumbTextKey: 'editProfile'
              },
              children: [
                {
                  path: '',
                  name: 'Edit user',
                  component: EditRandomUser
                },
                {
                  meta: {
                    breadcrumbParam: 'randomStr'
                  },
                  path: 'confirmation',
                  name: 'Edit user confirmation',
                  component: EditRandomUserConfirmation
                }
              ]
            }
          ]
        },
        {
          path: 'my-user',
          component: RouteView,
          meta: {
            breadcrumbTextKey: 'myUser'
          },
          redirect: {name: 'My User'},
          children: [
            {
              path: '',
              name: 'My User',
              component: MyUser
            },
            {
              path: 'edit',
              name: 'Edit my user',
              component: EditUser
            }
          ]
        }
      ]
    }
  ]
})

// the parmams that refreshParam need are key and value that associate to the key. For example route.refreshParam('workingCenter', 'Horno')
route.refreshParam = (...parameters) => refreshParam.apply(route, [route.app.$route.matched, ...parameters])

route.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.private)) {
    if (!sessionStorage.getItem('sessionToken')) {
      next({name: 'Login'})
    } else {
      setBreadcrumbParams(to)
      next()
    }
  } else {
    next()
  }
})

export default route
