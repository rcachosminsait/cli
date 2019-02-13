import Vue from 'vue'
import App from './App'
import info from '../package.json'
import router from './router'
import store from './store/store.js'
{{#if_eq onesait "yes"}}
import ODS from '@onesait/onesait-ds'
import '@onesait/onesait-ds/lib/theme-onesait/index.css'
{{/if_eq}}
import i18n from './lang/i18n.js'
import 'reset-css/reset.css'
import '@/assets/scss/main.scss'
import { truncate, formatDate } from './utils/filters'
{{#if_eq onesait "yes"}}
Vue.use(ODS)
{{/if_eq}}
Vue.config.productionTip = false
Vue.filter('truncate', truncate)
Vue.filter('formatDate', formatDate)
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
if (process.env.NODE_ENV === 'development') {
  window.odsInfo = {
    'ods-version': ODS.version,
    'project': info.name,
    'author': info.author,
    'componentList': Object.keys(ODS),
    'componentObjectList': ODS
  }
}
