<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
	<h1>Estás logueado ruta protegida</h1>
	<h3>Bienbenido: {{ usuario.nombre }}</h3>
  </div>
</template>

<script>
	import { mapState } from "vuex";

	export default {
	  name: 'Home',
	  computed: {
	  	...mapState(['usuario'])
	  }
	};
</script>
