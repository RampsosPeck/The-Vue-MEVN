<template>
	<div class="container">
		<h1 class="text-center"> <b> AGREGAR TAREA</b></h1>
		<div class="row justify-content-center h-100">
		<form @submit.prevent="agregarTarea(nombre)" class="form-inline">
			<div class="input-group mb-2 mr-sm-2">
				<div class="input-group-prepend ">
					<div class="input-group-text bg-info">Nombre</div>
				</div>
				<input type="text" class="form-control" v-model="nombre">
			</div>
			<button type="submit" class="btn btn-info mb-2">Agregar</button>
		</form>
		</div>
	</div>
</template>

<script>
	import {mapActions} from 'vuex'
	export default {
		name: 'Agregar',
		data(){
			return {
				nombre: ''
			}
		},
		methods:{
			...mapActions(['agregarTarea'])
		}
	}
</script>

