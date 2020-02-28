<template>
	<div>
		<h1 class="text-center"> <b>Lista de Tareas</b></h1>
		<div style="text-align:right">
			<router-link :to="{name: 'agregar'}" >
				<button class="btn btn-success col-md-4">Agregar</button>
			</router-link>
		</div>
		<ul class="list-group mt-5">
			<li class="list-group-item  "
				v-for="(item, index) in tareas" :key="item.id">
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
	import { mapState, mapActions } from "vuex";
	export default {
		name: 'Inicio',
		computed: {
			...mapState(['usuario','tareas'])
		},
		methods: {
			...mapActions(['getTareas','eliminarTarea'])
		},
		created(){
			this.getTareas()
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

