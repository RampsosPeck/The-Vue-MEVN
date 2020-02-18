import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	frutas:[
  		{nombre: 'Manzana', cantidad: 5},
  		{nombre: 'Pera', cantidad: 12},
  		{nombre: 'Palta', cantidad: 15},
  		{nombre: 'Naranja', cantidad: 7},
  		{nombre: 'Coco', cantidad: 2}
  	]
  },
  mutations: {
  	aumentar(state, index){
  		state.frutas[index].cantidad ++
  	},
  	reiniciar(state){
  		state.frutas.forEach(elemento => {
  			elemento.cantidad = 0
  		})
  	}
  },
  actions: {
  },
  modules: {
  }
})
