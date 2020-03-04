<template>
	<div>
		<v-layout justify-center mt-5>
			<v-flex xs12 sm8 md6 xl4>
				<v-card>
					<v-card-text class="display-1 text-uppercase info white--text text-center" :class="registro ? 'accent' : 'info'">
					  <span v-if="!registro">INGRESO</span>
					  <span v-if="registro">REGISTRO</span>
					</v-card-text>
					<v-card-text>
					  <v-btn block color="error mb-2" @click="google">
							<v-icon left dark>fab fa-google</v-icon>
							Google
					  </v-btn>
					  <v-btn block color="info" @click="facebook">
							<v-icon left dark>fab fa-facebook-f</v-icon>
							Facebook
					  </v-btn>
					</v-card-text>
					<v-card-text>
						<v-btn block class="secondary" @click="registro = true" v-if="!registro">¿No tienes cuenta? Registrate aquí</v-btn>
						<v-btn block class="secondary" @click="registro = false" v-if="registro">¿Ya tienes cuenta? Ingresa aquí</v-btn>
					</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
	import { firebase, auth, db } from "@/firebase";
	import { mapMutations } from "vuex";
	import router from '../router'

	export default{
		data() {
			return {
				registro: false
			}
		},
		methods: {
			...mapMutations(['nuevoUsuario']),
			facebook() {
				console.log('facebook');
				const provider = new firebase.auth.FacebookAuthProvider();
				this.ingresar(provider);
			},
			google() {
				const provider = new firebase.auth.GoogleAuthProvider();
				this.ingresar(provider);
			},
			async ingresar(provider){
				firebase.auth().languageCode = 'es';
				try{
					const result = await firebase.auth().signInWithPopup(provider);
					const user = result.user;
					//console.log(user); construimos un usuario
					const usuario = {
						nombre: user.displayName,
						email: user.email,
						uid: user.uid,
						foto: user.photoURL
					}
					this.nuevoUsuario(usuario)
					//Guardamos en la base de datos FIRESTORE
					await db.collection('usuarios').doc(usuario.uid).set(
							usuario
						)
					console.log('Usuario guardado en la BD');

					router.push({name:'home'})

				}catch(error){
					console.log(error);
				}
			}
		}
	};
</script>

