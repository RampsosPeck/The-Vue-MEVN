<template>
  <div>
    <h1>Galeria de fotos</h1>

	<router-link :to="{name: 'fotos', params:{id: item}}"
		v-for="(item, index) in fotosArreglo" :key="index">
		<button class="btn btn-info">Foto {{ item }}</button>
	</router-link>

    <Foto />

    <button @click="home">HOME</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>
  </div>
</template>

<script>
	import Foto from "@/components/Fotografia.vue";
	export default {
		name: 'Fotos',
		components: {
			Foto
		},
		data () {
			return {
				fotosArreglo: [1,2,3,4,5,6]
			}
		},
		methods: {
			home(){
				this.$router.push('/')
			},
			anterior(){
				this.$router.go(-1)
			},
			siguiente(){
				this.$router.go(1)
			}
		}
	}
</script>
