import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'
import store from './store'

var firebase = require("firebase/app");
require("firebase/auth");
//require("firebase/database");
require("firebase/firestore");
//require("firebase/messaging");
//require("firebase/functions");

var firebaseConfig = {
  apiKey: "AIzaSyAi2wJnkQaj9UAHI9hdZLtcRxoNI3kfK8E",
  authDomain: "crud-firebase-be47c.firebaseapp.com",
  databaseURL: "https://crud-firebase-be47c.firebaseio.com",
  projectId: "crud-firebase-be47c",
  storageBucket: "crud-firebase-be47c.appspot.com",
  messagingSenderId: "565659863268",
  appId: "1:565659863268:web:b0c2a50a90cfdd5e2a84f1",
  measurementId: "G-8L2SG8W2JP"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

firebaseApp.firestore().settings({})

export default firebaseApp.firestore()


Vue.config.productionTip = false

firebase.auth().onAuthStateChanged((user)=>{
	//console.log(user);
	if(user){
		store.dispatch('detectarUsuario',{email:user.email, uid:user.uid})
	}else{
		store.dispatch('detectarUsuario', null)
	}

	new Vue({
	  router,
	  store,
	  render: h => h(App)
	}).$mount('#app')
})



