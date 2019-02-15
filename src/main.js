import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import Index from './components/pages/IndexPage/index.vue';
import Todo from './components/pages/TodoPage/index.vue'

Vue.config.productionTip = false
Vue.use(Router)

const routes = [
  { path: '/', component: Index },
  { path: '/todo', component: Todo }
]

const router = new Router({
  routes,
  mode: 'history',
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
