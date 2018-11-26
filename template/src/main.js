import Vue from 'vue'
import App from './App'
import info from '../package.json'
{{#router}}
import router from './router'
{{/router}}
import store from './store/store.js'
{{#if_eq onesait "yes"}}
import ODS from '@onesait/onesait-ds'
{{/if_eq}}
import i18n from './lang/i18n.js'
import 'reset-css/reset.css'
import '@/assets/scss/main.scss'
{{#if_eq onesait "yes"}}
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
{{/if_eq}}
{{#if_eq onesait "yes"}}
Vue.use(ODS)
{{/if_eq}}
Vue.config.productionTip = false
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  store,
  i18n,
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  components: { App },
  template: '<App/>'
  {{/if_eq}}
})
if (process.env.NODE_ENV === 'development') {
  window.odsInfo = {
    'ods-version': ODS.version,
    'project': info.name,
    'author': info.author
  }
}
