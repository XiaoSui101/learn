import Vue from 'vue'
import App from './App.vue'
import router from './router';

import i18n from '@/locale'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key, value)
});

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
