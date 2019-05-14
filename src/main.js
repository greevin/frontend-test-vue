import Vue from 'vue'

import App from './App.vue'
import Home from './Home.vue'
import Header from './Header.vue'
import SportInfo from './SportInfo.vue'
import UserTable from './UserTable.vue'

Vue.component('app-header', Header)
Vue.component('app-sportinfo', SportInfo)
Vue.component('app-usertable', UserTable)

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

new Vue({
  el: '#home',
  render: h => h(Home)
})
