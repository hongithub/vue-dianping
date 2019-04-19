import Vue from 'vue';
import axios from 'axios';
import BScroll from 'better-scroll';
import App from './App';
import router from './router';
import store from './store';
import api from './utils/api';
import sesstion from './utils/storage';
import Scroll from './components/scroll';
import GlobalToast from './components/toast';
import GlobalConfirm from './components/confirm';
import './common/scss/index.scss';

Vue.config.productionTip = false;
Vue.use(Scroll);
Vue.use(GlobalToast);
Vue.use(GlobalConfirm);
// axios响应拦截器
axios.interceptors.response.use(res => res.data);
Vue.prototype.$http = axios;
Vue.prototype.$BScroll = BScroll;
Vue.prototype.$sesstion = sesstion;
Vue.prototype.$api = api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
