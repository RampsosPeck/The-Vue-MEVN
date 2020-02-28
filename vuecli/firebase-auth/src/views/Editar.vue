<template>
	<div class="container">
	<div class="row">
		<div class="col-12 col-sm-10 col-lg-6 mx-auto">
		<h1 class="text-center mt-5"> <b> EDITAR TAREA </b></h1>
		<form @submit.prevent="editarTarea(tarea)" class="bg-white shadow rounded py-3 px-4">
			<!--{{ id }} - {{ tarea }}-->
			<div class="input-group mb-2 mr-sm-2">
				<div class="input-group-prepend">
					<div class="input-group-text bg-info">Nombre</div>
				</div>
				<input type="text" class="form-control"  v-model="tarea.nombre">
			</div>
			<button type="submit" class="btn btn-info btn-lg btn-block">Realizado</button>
		</form>
		</div>
	</div>
	</div>
</template>

<script>
	import {mapActions, mapState} from 'vuex'
	export default {
		name: 'Editar',
		data(){
			return {
				id: this.$route.params.id
			}
		},
		methods: {
			...mapActions(['getTarea','editarTarea'])
		},
		created(){
			this.getTarea(this.id)
		},
		computed : {
			...mapState(['tarea'])
		}

	}
</script>


