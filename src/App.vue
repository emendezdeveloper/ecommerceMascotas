<template>
  <div>
    <Navbar @abrirCarrito="mostrarCarrito = true" />
    <CarritoPanel v-if="mostrarCarrito" @close="mostrarCarrito = false" />
    <router-view />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbar from './components/Navbar.vue'
import CarritoPanel from './components/CarritoPanel.vue'

const mostrarCarrito = ref(false)
</script>
