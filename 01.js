const app = new Vue({
	el: '#app',
	data: {

		titulo: 'Hola mundo con Vue',
		//frutas: ['manzana', 'pera', 'platano'],
		frutas: [
			{nombre: 'Licor', cantidad:10},
			{nombre: 'Limon', cantidad:0},
			{nombre: 'Botella', cantidad:11},
		],
		nuevaFruta:'',
		total:0,
	},
	methods: {
		agregarFruta () {
			this.frutas.push({
				nombre: this.nuevaFruta,
				cantidad: this.nuevaCantidad
			});
			this.nuevaFruta = '';
			this.nuevaCantidad = '';
		}
	},
	computed: {
		sumarFrutas() {
			this.total = 0;
			for(fruta of this.frutas){
				this.total = this.total + fruta.cantidad;
			}
			return this.total;
		}
	}
})