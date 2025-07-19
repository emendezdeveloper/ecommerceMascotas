<template>
  <div class="carrito-page">
    <h1>Carrito de compras</h1>
    <div v-if="carrito.items.length > 0">
      <ul>
        <li v-for="item in carrito.items" :key="`${item.tipo}-${item.id}`">
          {{ item.nombre }} ({{ item.tipo }}) - Cantidad: {{ item.cantidad }}
          <button @click="carrito.eliminarItem(item.id, item.tipo)">❌</button>
        </li>
      </ul>
      <button @click="carrito.vaciarCarrito">Vaciar carrito</button>
    </div>
    <p v-else>Tu carrito está vacío.</p>
  </div>
</template>
<script setup>
import { useCarritoStore } from '../store/carrito'

const carrito = useCarritoStore()

</script>
<style scoped>
.carrito-page {
  padding: 2rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
}
</style>