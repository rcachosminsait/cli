import Vue from 'vue'
import Router from 'vue-router'
import HelloIndra from '@/views/HelloIndra'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloIndra',
      component: HelloIndra
    }
  ]
})
