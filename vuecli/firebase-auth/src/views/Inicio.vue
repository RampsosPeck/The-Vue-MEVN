<template>
	<div>
		<h1 class="text-center"> Lista de Tareas</h1>
		<router-link :to="{name: 'agregar'}">
			<button class="btn btn-success btn-block">Agregar</button>
		</router-link>
		<ul class="list-group mt-5">
			<li class="list-group-item"
				v-for="(item, index) in tareas" :key="item.id">
				{{ item.id }} - {{ item.nombre }}
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

