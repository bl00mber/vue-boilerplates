// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'

import 'foundation-sites/dist/css/foundation.css'
import 'foundation-sites/dist/css/foundation-flex.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
