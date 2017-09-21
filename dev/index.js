import Vue from 'vue'
import Vuetify from '../src/index'
import App from './App'

import '../src/stylus/main.styl'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  render: h => h(App)
})
