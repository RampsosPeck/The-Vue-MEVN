<template>
	<div class="container">
	<div class="row">
		<div class="col-12 col-sm-10 col-lg-6 mx-auto">
			<h2 class="text-center mt-5"> <b> INGRESAR </b></h2>
			<form @submit.prevent="ingresoUsuario({email:$v.email.$model, pass:$v.pass.$model})" class="bg-white shadow rounded py-3 px-4">
				<small class="text-danger" v-if="!$v.email.required">Campo requerido</small>
				<small class="text-danger" v-if="!$v.email.email">No válido</small>
				<div class="input-group mb-3 mr-sm-5">
					<div class="input-group-prepend ">
						<div class="input-group-text bg-info">E-mail</div>
					</div>
					<input type="email" class="form-control bg-light shadow-sm" v-model="$v.email.$model" placeholder="Ingrese su email">
				</div>
				<small class="text-danger" v-if="!$v.pass.required">Campo requerido</small>
				<small class="text-danger" v-if="!$v.pass.minLength">Mínimo 6 carácteres</small>
				<div class="input-group mb-3 mr-sm-2">
					<div class="input-group-prepend ">
						<div class="input-group-text bg-info">Contraseña</div>
					</div>
					<input type="password" class="form-control bg-light shadow-sm" v-model="$v.pass.$model" placeholder="Ingrese su contraseña">
				</div>
				<button type="submit" class="btn btn-info btn-lg btn-block" :disabled="$v.$invalid" >ACCEDER</button>
			</form>
			<p style="color:red" v-if="error === 'auth/user-not-found'">Usuario incorrecto</p>
			<p style="color:red" v-if="error === 'auth/wrong-password'">Contraseña incorrecta</p>
			<!--{{ $v.email }} -->
		</div>
	</div>
	</div>
</template>

<script>
	import { mapActions, mapState } from "vuex";
	import { required, minLength, email } from 'vuelidate/lib/validators'
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
		},
		validations: {
			email: {required, email},
			pass: {required, minLength: minLength(6)}
		}
	};

</script>


