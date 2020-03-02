<template>
	<div class="container">
	<div class="row">
		<div class="col-12 col-sm-10 col-lg-6 mx-auto">
		<h1 class="text-center mt-5"> <b> REGISTRO DE USUARIOS </b></h1>
		<form @submit.prevent="crearUsuario({email:email, pass:pass1})" class="bg-white shadow rounded py-3 px-4">
			<small class="text-danger" v-if="!$v.email.required">Campo requerido</small>
			<small class="text-danger" v-if="!$v.email.email">E-mail no válido</small>
			<div class="input-group mb-3 mr-sm-2">
				<div class="input-group-prepend ">
					<div class="input-group-text bg-info">E-mail</div>
				</div>
				<input type="email" class="form-control bg-light shadow-sm" v-model="$v.email.$model" placeholder="Ingrese su e-mail">
			</div>
			<small class="text-danger" v-if="!$v.pass1.required">Campo requerido</small>
			<small class="text-danger" v-if="!$v.pass1.minLength">Mínimo 6 carácteres</small>
			<div class="input-group mb-3 mr-sm-2">
				<div class="input-group-prepend ">
					<div class="input-group-text bg-info">Contraseña</div>
				</div>
				<input type="password" class="form-control bg-light shadow-sm" v-model="pass1" placeholder="Ingrese su contraseña">
			</div>
			<small class="text-danger" v-if="!$v.pass2.sameAs">Contraseña no coincide</small>
			<div class="input-group mb-3 mr-sm-2 center-block">
				<div class="input-group-prepend ">
					<div class="input-group-text bg-info">Repita/Contraseña</div>
				</div>
				<input type="password" class="form-control bg-light shadow-sm" v-model="pass2" placeholder="Repita su contraseña">
			</div>
			<button type="submit" :disabled="!desactivar" class="btn btn-info btn-lg btn-block">CREAR USUARIO</button>
		</form>
		<p style="color:red" v-if="error === 'auth/email-already-in-use'">E-mail ya registrado!</p>
		</div>
	</div>
	</div>
</template>

<script>

	import {mapActions, mapState} from "vuex";
	import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
	export default {
		name: 'Registro',
		data(){
			return {
				email: '',
				pass1: '',
				pass2: ''
			}
		},
		methods:{
			...mapActions(['crearUsuario'])
		},
		computed: {
			...mapState(['error']),
			desactivar(){
				return this.pass1 === this.pass2 && this.pass1 != ''
			}
		},
		validations: {
			email: {required, email},
			pass1: {
		      required,
		      minLength: minLength(6)
		    },
		    pass2: { sameAs: sameAs('pass1') }
		}
	};
</script>

