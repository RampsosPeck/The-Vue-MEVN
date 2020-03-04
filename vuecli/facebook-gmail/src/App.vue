<template>
  <v-app>
    <v-app-bar
      app
      color="info"
      dark
    >
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

    <v-content>
      <v-container>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'App',

  methods: {
    ...mapActions(['cerrarSesion'])
  },

  data: () => ({
    //
  }),
};
</script>
