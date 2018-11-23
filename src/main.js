import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import AppCustomers from './components/AppCustomers.vue'
import AppProducts from './components/AppProducts.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)


const routes =[ 

{ path: '/products', component: AppProducts},
{ path: '/customers', component: AppProducts}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
