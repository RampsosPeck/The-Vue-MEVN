<template>
	<div>
		<h1 class="text-center"> <b>Lista de Tareas</b></h1>
		<div style="text-align:right">
			<router-link :to="{name: 'agregar'}" >
				<button class="btn btn-success col-md-4">Agregar</button>
			</router-link>
		</div>
		<div v-if="carga" class="text-center mt-5">
			<h3> Cargando contenido... </h3>
			<pulse-loader :loading="carga" ></pulse-loader>
		</div>

		<div class="text-center my-2 col-md-4">
			<form @submit.prevent="buscador(texto)">
				<input type="text" placeholder="Buscar..." class="form-control" v-model="texto" v-on:keyup="buscador(texto)">
			</form>
		</div>

		<ul class="list-group mt-5" v-if="!carga">
			<li class="list-group-item  "
				v-for="(item, index) in arrayFiltrado" :key="item.id">
				{{ ++index }} - {{ item.nombre }}
				<div class="float-right">
					<router-link :to="{name: 'editar', params:{ id: item.id}}">
						<button class="btn btn-info btn-sm mr-2">Editar</button>
					</router-link>
					<button @click="eliminarTarea(item.id)" class="btn btn-danger btn-sm">Eliminar</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { mapState, mapActions, mapGetters } from "vuex";
	import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
	export default {
		name: 'Inicio',
		data(){
			return {
				texto: ''
			}
		},
		computed: {
			...mapState(['usuario','tareas','carga']),
			...mapGetters(['arrayFiltrado'])
		},
		methods: {
			...mapActions(['getTareas','eliminarTarea','buscador'])
		},
		created(){
			this.getTareas()
		},
		components: {
		    PulseLoader
		  }
	};
</script>


<style>
	  .list-group-item {
	  background-color: #f1f9fb;
	  border-top: 1px solid #0091b5;
	  border-left-color: #fff;
	  border-right-color: #fff;
	}

	 .list-group-item:hover {
	  background-color: #17a2b8;
	}
</style>

