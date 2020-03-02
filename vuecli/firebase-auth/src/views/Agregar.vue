<template>
	<div class="container">
		<h1 class="text-center"> <b> AGREGAR TAREA</b></h1>
		<div class="row justify-content-center h-100">
		<form @submit.prevent="agregarTarea($v.nombre.$model)" class="form-inline">
			<div class="input-group mb-2 mr-sm-2">
				<div class="input-group-prepend ">
					<div class="input-group-text bg-info">Nombre</div>
				</div>
				<input type="text" class="form-control" v-model="$v.nombre.$model">
			</div>
			<button type="submit" class="btn btn-info mb-2" :disabled="$v.$invalid || carga">Agregar</button>

		</form>
		</div>
		<div class="row justify-content-center h-100">
			<small class="text-danger d-block" v-if="!$v.nombre.required">Campo requerido</small>
			<small class="text-danger d-block" v-if="!$v.nombre.minLength">Mínimo 5 caracteres</small>
		</div>
	</div>
</template>

<script>
	import {mapActions, mapState} from 'vuex'
	import { required, minLength } from 'vuelidate/lib/validators'
	export default {
		name: 'Agregar',
		data(){
			return {
				nombre: ''
			}
		},
		methods:{
			...mapActions(['agregarTarea'])
		},
		validations: {
		    nombre: {
		      required,
		      minLength: minLength(5)
		    }
		},
		computed: {
			...mapState(['carga'])
		}
	};
</script>

