const app = new Vue({
	el: '#app',
	data: {
		saludo: 'Este es el ciclo de vida'
	},
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		//Este metodo se ejecuta al crear los métodos, observadores y eventos, pero aún no accede al DOM.
		//Aún no se puede acceder a 'el'
		console.log('created');
	},
	beforeMount(){
		//Este método se ejecuta antes de insertar el DOM
		console.log('beforeMount');
	},
	mounted(){
		//Este método se ejecuta al insertar el DOM
		console.log('mounted');
	},
	beforeUpdate(){
		//Este método se ejecuta al detectar un cambio
		console.log('beforeUpdate');
	},
	updated(){
		//Se ejecuta al realizar los cambios
		console.log('Updated');
	},
	beforeDestroy() {
		//Se ejecuta antes de destruir la instancia
		console.log('beforeDestroy');
	},
	destroyed() {
		//Se destruye toda la instancia :(
		console.log('destroyed');
	},
	methods: {
		destruir(){
			this.$destroy();
		}
	}

})