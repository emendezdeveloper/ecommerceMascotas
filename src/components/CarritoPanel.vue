<template>
  <div class="carrito-panel">
    <button class="close-btn" @click="$emit('close')">✖</button>
    <h2>Carrito</h2>
    <div v-if="carrito.items.length > 0">
      <ul>
        <li v-for="item in carrito.items" :key="`${item.tipo}-${item.id}`">
          {{ item.nombre }} ({{ item.tipo }}) - Cantidad: {{ item.cantidad }}
          <button @click="carrito.eliminarItem(item.id, item.tipo)">❌</button>
        </li>
      </ul>
      <button @click="carrito.vaciarCarrito">Vaciar carrito</button>
    </div>
    <p v-else class="empty-message">Aún no has agregado el producto.</p>
  </div>
</template>

<script setup>
import { useCarritoStore } from '../store/carrito'

const carrito = useCarritoStore()

</script>

<style scoped>
.carrito-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: 370px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 12px rgba(0,0,0,0.08);
  z-index: 1000;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  overflow-y: auto;
  transition: right 0.3s;
}
.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.empty-message {
  color: #1e40af;
  font-weight: bold;
  margin-top: 2rem;
  text-align: center;
}
</style>