import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css/normalize.css'; // 样式初始化，并保证各浏览器默认HTML元素样式的统一
import 'amfe-flexible'; // 动态设置rem的基准值

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
