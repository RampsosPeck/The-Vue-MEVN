<template>
	<v-layout>
		<v-flex>
			<v-card>
				<v-card-text>
					<h3>Bienvenido {{ usuario.nombre }}</h3>
				</v-card-text>
				<v-card-text style="height 60vh; overflow: auto" v-chat-scroll>
					<div :class="item.nombre === usuario.nombre ? 'text-right':'text-left'"  v-for="(item, index) in mensajes" :key="index" >
						<v-chip  > <!--v-on="on" -->
				            <v-avatar >
				              <v-img :src="item.foto"></v-img>
				            </v-avatar>
				            {{ item.mensaje }}
				        </v-chip>
				        <p class="caption mr-2">{{ item.fecha }}</p>
					</div>
				</v-card-text>
				<v-card-text>
					<v-form @submit.prevent="enviarMensaje" v-model="valido">
						<v-text-field
					      v-model="mensaje"
      					  :rules="reglas"
					      label="Escribe tu mensaje aqui :)"
					      required
					    >
						</v-text-field>
					</v-form>
				</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</template>


<script>
	import { mapState } from "vuex";
	import { db } from "@/firebase";
	import moment from 'moment'
	export default {
		data() {
			return {
				mensaje: '',
				valido: false,
				reglas: [
					 v => !!v || 'Tienes que escribir un mensaje...'
				        ],
				mensajes: []
			}
		},
		computed: {
			...mapState(['usuario'])
		},
		methods: {
			enviarMensaje(){
				if(this.valido){
					//console.log('Enviar el mensaje', this.mensaje)
					db.collection('chats').add({
						mensaje: this.mensaje,
						nombre: this.usuario.nombre,
						foto: this.usuario.foto,
						fecha: Date.now()
					}).catch(
						error => console.log(error)
					)
					this.mensaje = ''
				}else {
					console.log('No escribiste nada')
				}
			}
		},
		created(){
			moment.locale('es');

			let ref = db.collection('chats').orderBy('fecha', 'desc').limit(10)

			ref.onSnapshot(querySnapshot => {
        		this.mensajes = []
        		querySnapshot.forEach( doc => {
        			//this.mensajes.push(doc.data())
        			this.mensajes.unshift({
        				mensaje: doc.data().mensaje,
        				foto: doc.data().foto,
        				nombre: doc.data().nombre,
        				fecha: moment(doc.data().fecha).format('lll')
        			})
        		})
        		console.log(this.mensajes);
			})
		}
	};
</script>
