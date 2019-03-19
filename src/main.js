import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store/store';
import MediaQuery from './plugins/mediaquery';

Vue.config.productionTip = false;

Vue.use(MediaQuery);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
