<template>
  <div class="about">
    <h1>This is exercices the works</h1>
	<h2  v-for="(item, index) in tareasState" :key="index"> {{ item }} </h2>
	<h3>{{ contador }}</h3>
	<button @click="aumentarContador(1)"> + </button>
	<h4>{{ titulo }}</h4>
  </div>
</template>

<script>
	import { mapState, mapMutations } from "vuex";
	export default {
		computed: {
			...mapState('tareas', ['tareasState']),
			...mapState(['titulo']),
			...mapState('contador', ['contador'])
		},
		methods: {
			...mapMutations('contador',['aumentarContador'])
		}
	};
</script>



