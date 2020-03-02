<template>
	<div class="mt-5">
		<h1>FORMULARIOS</h1>
		<form >
			<b-row>
				<b-col md="3">
					<b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
					<small>Como mínimo tres carácteres</small>
				</b-col>
				<b-col md="3">
					<b-form-select v-model="select" :options="animales"></b-form-select>
					<p>Selección {{ select }}</p>
				</b-col>
				<b-col md="3">
					<b-form-radio-group v-model="radio" :options="animalesRadio"></b-form-radio-group>
					<p>Radio : {{ radio }}</p>
				</b-col>
				<b-col md="3">
					<b-form-checkbox-group v-model="check" :options="animalesRadio"></b-form-checkbox-group>
					<p>Check: {{ check }}</p>
				</b-col>
			</b-row>
		</form>
		TEXTO: {{ texto }}
	</div>
</template>

<script>
	export default {
		name:'Forms',
		computed: {
			comprobar(){
				return this.texto.length > 2 ? true : false
			}
		},
		data(){
			return{
				texto: '',
				check: [],
				radio: null,
				select: null,
				animales: [
					{value: 'null', text: 'Seleccione un animal'},
					{value: 'perro', text: 'Gua Gua'},
					{value: 'gato', text: 'Miua'},
					{value: 'pato', text: 'Cuak'}
				],
				animalesRadio: [
					{value: 'perro', text: 'Gua Gua'},
					{value: 'gato', text: 'Miua'},
					{value: 'pato', text: 'Cuak'}
				]
			}
		}
		//Las propiedades computadas siempre devulve un verdadero o false

	};
</script>

