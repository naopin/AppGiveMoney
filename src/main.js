import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


var firebaseConfig = {
  apiKey: "AIzaSyC9tX52m5ama2qD3pBEP0S_NGZ0ogDKKxE",
  authDomain: "givemoneyapp.firebaseapp.com",
  databaseURL: "https://givemoneyapp.firebaseio.com",
  projectId: "givemoneyapp",
  storageBucket: "givemoneyapp.appspot.com",
  messagingSenderId: "554202918248",
  appId: "1:554202918248:web:8fe85816228caf5438badd",
  measurementId: "G-KHTNRS4Z2Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
