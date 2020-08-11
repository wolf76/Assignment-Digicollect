import Vue from 'vue'
import App from './App.vue'
import { MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(MdIcon)

new Vue({
  render: h => h(App),
}).$mount('#app')
