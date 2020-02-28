<template>
	<div class="container">
	<div class="row">
		<div class="col-12 col-sm-10 col-lg-6 mx-auto">
			<h1 class="text-center mt-5"> <b> INGRESAR </b></h1>
			<form @submit.prevent="ingresoUsuario({email, pass})" class="bg-white shadow rounded py-3 px-4">
				<div class="input-group mb-3 mr-sm-5">
					<div class="input-group-prepend ">
						<div class="input-group-text bg-info">E-mail</div>
					</div>
					<input type="email" class="form-control bg-light shadow-sm" v-model="email">
				</div>
				<div class="input-group mb-3 mr-sm-2">
					<div class="input-group-prepend ">
						<div class="input-group-text bg-info">Contraseña</div>
					</div>
					<input type="password" class="form-control bg-light shadow-sm" v-model="pass">
				</div>
				<button type="submit" class="btn btn-info btn-lg btn-block">ACCEDER</button>
			</form>
			<p style="color:red">{{ error }}</p>
		</div>
	</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	export default {
		name: 'Ingreso',
		data(){
			return{
				email: '',
				pass: ''
			}
		},
		methods: {
			...mapActions(['ingresoUsuario'])
		},
		computed: {
			...mapState(['error'])
		}
	};

</script>


