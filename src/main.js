import Vue from 'vue'
import App from './App.vue'
import { Row, Column } from 'vue-grid-responsive';

Vue.component('row', Row);
Vue.component('column', Column);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
