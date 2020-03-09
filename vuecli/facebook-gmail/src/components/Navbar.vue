<template>
	<nav>
		<v-app-bar
      app
      color="info"
      dark
    >
    	<v-toolbar-items>
    		<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    	</v-toolbar-items>
	      <div class="d-flex align-center">
	        <v-img
	          alt="Vuetify Logo"
	          class="shrink mr-2"
	          contain
	          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
	          transition="scale-transition"
	          width="40"
	        />

	        <v-img
	          alt="Vuetify Name"
	          class="shrink mt-1 hidden-sm-and-down"
	          contain
	          min-width="100"
	          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
	          width="100"
	        />
	      </div>
	      <v-toolbar-title class="headline text-uppercase">
	        <router-link :to="{name:'home'}">
	            <span> VUE </span>
	        </router-link>
	      </v-toolbar-title>

	      <v-spacer></v-spacer>

	      <v-btn @click="cerrarSesion">
	        <span class="mr-2">CERRAR CESIÓN</span>
	        <v-icon> fas fa-address-book </v-icon>
	      </v-btn>
	    </v-app-bar>

	    <v-navigation-drawer color="info" v-model="drawer" app>
	    	<v-layout column align-center mt-5>
	    		<v-flex>
	    			<v-avatar>
				      <img
				        :src="usuario.foto"
				        alt="John"
				      >
				    </v-avatar>
	    		</v-flex>
	    		<v-flex>
	    			<p class="mt-3 white--text">{{ usuario.nombre }}</p>
	    		</v-flex>
	    	</v-layout>
	    	<v-divider></v-divider>
			<v-list>
				<v-list-item v-for="(item, index) in items" :key="index"
					:to="item.to">
					<v-list-item-icon>
						<v-icon class="white--text">{{ item.icon }}</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
		              <v-list-item-title class="white--text">{{ item.title }}</v-list-item-title>
		            </v-list-item-content>
				</v-list-item>
			</v-list>
	    </v-navigation-drawer>
	</nav>
</template>


<script>
	import { mapActions, mapState } from "vuex";
	export default {
		data(){
			return {
				drawer: true,
				items: [
					{title: 'Dashboard', icon: 'fas fa-address-card', to:{name: 'home'}},
					{title: 'Account', icon: 'fas fa-address-card', to:{name: 'ingreso'}},
					{title: 'Admin', icon: 'fas fa-address-card', to:{name: 'admin'}},
					{title: 'Chat', icon: 'fas fa-address-card', to:{name: 'chat'}}
				]
			}
		},
		methods: {
			...mapActions(['cerrarSesion'])
		},
		computed: {
			...mapState(['usuario'])
		}
	};

</script>
