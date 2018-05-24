import Vue from 'vue'
import App from './App'
{{#router}}
import router from './router'
{{/router}}
import store from './store/store.js'

import 'reset-css/reset.css'
import '@/assets/scss/main.scss'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  store,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
