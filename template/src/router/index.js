import Vue from 'vue'
import Router from 'vue-router'
import RouteView from '@/components/shared/RouteView'
import HelloIndra from '@/views/HelloIndra'
import Login from '@/views/login/Login'
import LoginForm from '@/components/login/LoginForm'
import LoginPasswordForm from '@/components/login/LoginPasswordForm'
import Dashboard from '@/views/Dashboard'
import Tasks from '@/views/Tasks'
import Users from '@/views/Users'
import MyUser from '@/views/MyUser'
import EditUser from '@/views/EditUser'
import RandomUser from '@/views/RandomUser'
import EditRandomUser from '@/views/EditRandomUser'
import EditRandomUserConfirmation from '@/views/EditRandomUserConfirmation'
import { setBreadcrumbParams } from './breadcrumb-params'
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
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        breadcrumbTextKey: 'dashboard',
        private: true
      }
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks,
      meta: {
        breadcrumbTextKey: 'tasks',
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
            breadcrumbParam: 'date'
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
                    breadcrumbParam: 'myParam'
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
          name: 'My User',
          component: RouteView,
          meta: {
            breadcrumbTextKey: 'myUser'
          },
          children: [
            {
              path: '',
              name: 'My User',
              component: MyUser
            },
            {
              path: 'edit',
              name: 'Edit user',
              component: EditUser
            }
          ]
        }
      ]
    }
  ]
})

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
