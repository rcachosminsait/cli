import Vue from 'vue'
{{#if_eq onesait "yes"}}
import ODS from '@onesait/onesait-ds'
Vue.use(ODS)
{{/if_eq}}
Vue.config.productionTip = false
