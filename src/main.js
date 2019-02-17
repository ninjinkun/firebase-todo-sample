import Vue from 'vue'
import Router from 'vue-router';
import App from './App.vue'
import Index from './components/pages/IndexPage/index.vue';
import Todo from './components/pages/TodoPage/index.vue'
import Auth from './components/pages/AuthPage/index.vue';
import firebase from 'firebase';

Vue.config.productionTip = false
Vue.use(Router)

const config = {
  apiKey: "AIzaSyDOGixdrYs5ijdZRpyzDenOwJcHC8DvVgI",
  authDomain: "todo-asanos.firebaseapp.com",
  databaseURL: "https://todo-asanos.firebaseio.com",
  projectId: "todo-asanos",
  storageBucket: "todo-asanos.appspot.com",
  messagingSenderId: "496728968274"
};
firebase.initializeApp(config);

const routes = [
  { path: '/', component: Index },
  { path: '/auth', component: Auth },
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
