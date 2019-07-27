import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// import globally
Vue.component('v-icon', Icon)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
