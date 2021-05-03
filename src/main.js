import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueLuxon from 'vue-luxon'
import UUID from 'vue-uuid'
import axios from 'axios'
import Generator from './plugins/generator'

Vue.prototype.$axios = axios

Vue.use(VueLuxon)
Vue.use(UUID)
Vue.use(Generator)

new Vue({
	store,
	render: h => h(App)
}).$mount('#app')
