<template>
  <div class="container mt-5">
  	<v-row justify="center">
	    <img alt="Vue logo" src="../assets/logo.png">
	</v-row>
    <v-layout :wrap="true">
    	<v-flex xs12>
    		<h1 class="text-center">Calendario de Monetizaciones</h1>
    		<v-card>
    		    <v-date-picker
    		      v-model="fecha"
			      full-width
			      :landscape="$vuetify.breakpoint.smAndUp"
			      class="mt-4"
			      locale="es-bo"
			      :min="minimo"
			      :max="maximo"
			      @change="getDolar(fecha)"
			      color="success"
			    ></v-date-picker>
    		</v-card>
    		<v-card color="info" dark>
    			<v-card-text class="display-1 text-center">
    				{{ valor }}
    			</v-card-text>
    		</v-card>
    	</v-flex>
    </v-layout>
  </div>
</template>

<script>
	import axios from "axios";
	import { mapMutations } from "vuex";
	export default {
	  name: 'Home',
	  data(){
	  	return{
	  		fecha: new Date().toISOString().substr(0, 10),
	  		minimo: '1984',
	  		maximo: new Date().toISOString().substr(0, 10),
	  		valor: null
	  	}
	  },
	  methods: {
	  	...mapMutations(['mostrarLoading','ocultarLoading']),
	  	async getDolar(dia){
	  		let arrayFecha = dia.split(['-'])
	  		let ddmmyy = arrayFecha[2]+'-'+arrayFecha[1]+'-'+arrayFecha[0]
	  		//console.log(arrayFecha)
	  		try {
	  			this.mostrarLoading({
	  				titulo:'Accediendo a información en linea',
	  				color: 'info'
	  			})
	  			let datos = await axios.get(`https://mindicador.cl/api/dolar/${ddmmyy}`)
	  			if(datos.data.serie.length > 0 ){
	  				this.valor = await datos.data.serie[0].valor
	  			}else{
	  				this.valor = 'Sin resultados'
	  			}

	  		} catch (error) {
	  			console.log(error);
	  		}
	  		finally{
	  			this.ocultarLoading()
	  		}

	  	}
	  },
	  created(){
	  	this.getDolar(this.fecha)
	  }
	};
</script>
