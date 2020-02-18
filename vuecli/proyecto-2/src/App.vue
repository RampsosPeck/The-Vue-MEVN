<template>
  <div id="app" class="container m-5">
    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>

